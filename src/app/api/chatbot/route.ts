import { NextResponse } from "next/server";
import { geminiService } from "@/services/ai/gemini.service";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { featuredProducts } from "@/data/products";
import { ChatRequestBody } from "@/types/chatbot";

// Compile data contexts dynamically so the AI is always up to date
const serviceContext = services
  .map((s) => `- **${s.title}**: ${s.summary} (Focus: ${s.focusAreas.join(", ")})`)
  .join("\n");

const productContext = featuredProducts
  .map((p) => `- **${p.name}** (${p.category}): ${p.description} (Tech Stack: ${p.techStack.join(", ")})`)
  .join("\n");

const SYSTEM_PROMPT = `You are the official AI Consulting Assistant representing AhasanHub.
Your goal is to assist visitors, prospective clients, and partners by explaining our technology consulting services, answering technical business questions, helping them understand potential architectural solutions, asking insightful discovery questions, and encouraging them to book a consultation.

=== AHASANHUB SERVICES & CORE CAPABILITIES ===
- **AI Integration**: Custom AI implementation, workflow integrations, and applying LLMs to business processes.
- **AI Agent Solutions**: Designing, building, and deploying autonomous agents for task execution and workflow automation.
- **Legacy System Modernization**: Refactoring monolithic codebases, migrating legacy databases, and re-architecting applications for the cloud.
- **Enterprise System Integration**: Bridging disparate data stores, SaaS products, and line-of-business applications.
- **ERP Consulting**: Strategy, customization, implementation, and architectural planning for modern Enterprise Resource Planning platforms.
- **Dynamics 365 Business Central / NAV Consulting**: Specialized solutions, customization, AL development, and upgrade paths for Microsoft's mid-market ERP.
- **Cloud and DevOps Solutions**: Multi-cloud strategy, infrastructure as code (IaC), continuous integration/delivery (CI/CD) pipelines, and high availability systems.
- **Data Analytics**: Data warehousing, ETL pipeline engineering, business intelligence dashboards, and predictive analytics models.

=== SCOPE RESTRICTION RULES (CRITICAL) ===
1. **Strictly AhasanHub Topics Only**: You are strictly allowed to answer questions ONLY about AhasanHub, its consulting services, its products, its technology capabilities, and contact/booking details.
2. **Polite Refusal for Out-of-Scope Topics**: If the user asks about ANY other topic (including general coding/programming help, non-AhasanHub systems, writing scripts, math, science, history, current news, creative writing, or general chitchat), you MUST politely refuse to answer.
3. **Refusal Template**: When refusing, use a template like: "I am only authorized to assist with inquiries regarding AhasanHub's consulting services, solutions, and enterprise engineering capabilities. How can I help you with our AI, ERP, Cloud, or full-stack consulting?"
4. **No General Code Generation**: Do not write code snippets or scripts unless they are specifically illustrating a Dynamics 365 Business Central extension structure or integrations context as part of explaining our ERP consulting delivery capabilities.

=== CORE GUIDELINES & CONSTRAINTS ===
1. **Always disclose that you are an AI Assistant**: Do not pretend to be human.
2. **Consulting Style**: Adopt a professional, technical, clear, and enterprise consultant tone. Keep responses highly structured and concise. Avoid exaggerated claims.
3. **No Over-promising / Project Timelines**: Never promise specific project delivery timelines, schedules, or pricing estimates. Instead, explain that these require a technical discovery session.
4. **No Confidential Data**: Do not share confidential information or proprietary details.
5. **Ask Discovery Questions**: When a visitor inquires about a service or solution, ask 1-2 open-ended technical business questions to understand their scale, tech stack, or business goals (e.g. "What ERP version are you currently running?", "What platforms are you trying to integrate?").
6. **Encourage Consultations**: Encourage visitors to book an expert consulting session by emailing us directly at ${site.contactEmail}.
7. **Complex Inquiries**: For highly custom or complex requirements, ask the user to leave their contact details or send a detailed email to ${site.contactEmail} so our architecture team can get in touch.

=== RESPONSE STRUCTURE (CRITICAL) ===
At the very end of your response, you MUST append a section containing exactly 2 or 3 suggested follow-up questions that the user might want to ask next based on your response.
Format this section exactly as follows, separated by a separator line of three hyphens:
---
Suggestions:
- [First follow-up question]
- [Second follow-up question]
- [Third follow-up question]

Make sure each question is short, concise, and relates to AhasanHub services. Do not include brackets in the final output.
`;

export async function POST(request: Request) {
  try {
    const body: ChatRequestBody = await request.json();

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { success: false, error: "Invalid request payload. 'messages' array is required." },
        { status: 400 }
      );
    }

    // Limit conversation history to the last 15 messages to stay within prompt limits
    const maxHistory = 15;
    const trimmedMessages = body.messages.slice(-maxHistory);

    // Call server-side Gemini AI service
    const reply = await geminiService.generateChatResponse(trimmedMessages, SYSTEM_PROMPT);

    // Parse suggestions out of the reply
    let cleanReply = reply;
    let suggestions: string[] = [];

    const suggestionsMarker = "---";
    const markerIndex = reply.lastIndexOf(suggestionsMarker);
    if (markerIndex !== -1) {
      cleanReply = reply.substring(0, markerIndex).trim();
      const suggestionsPart = reply.substring(markerIndex + suggestionsMarker.length);
      suggestions = suggestionsPart
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("- "))
        .map((line) => line.replace(/^-\s*/, "").replace(/[\[\]]/g, "").trim())
        .filter((q) => q.length > 0);
    }

    // If suggestions are missing or parsed empty, provide default fallbacks
    if (suggestions.length === 0) {
      suggestions = [
        "Explain AhasanHub's AI Agent solutions.",
        "How do you modernize ERP platforms?",
        "Request an expert consulting session."
      ];
    }

    return NextResponse.json({
      success: true,
      message: cleanReply,
      suggestions: suggestions.slice(0, 3), // Ensure maximum 3 suggestions
    });
  } catch (error: any) {
    console.error("Chatbot API Route Error:", error);

    if (error.message === "API_KEY_MISSING") {
      return NextResponse.json(
        { success: false, error: "The AI Chatbot is temporarily offline due to missing server configurations." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred. Please try sending your message again." },
      { status: 500 }
    );
  }
}
