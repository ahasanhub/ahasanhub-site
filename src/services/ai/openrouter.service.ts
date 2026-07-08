import { ChatMessage } from "@/types/chatbot";

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export class OpenRouterService {
  private apiKey: string;
  private defaultModel: string;
  private siteUrl: string;
  private siteName: string;

  constructor() {
    this.apiKey = process.env.OPENROUTER_API_KEY || "";
    this.defaultModel = process.env.OPENROUTER_MODEL || "google/gemini-2.5-flash";
    this.siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahasanhub.com";
    this.siteName = "AhasanHub";
  }

  /**
   * Generates a chat completion using the OpenRouter API.
   * Includes timeout and error handling.
   */
  async generateChatResponse(
    messages: { role: string; content: string }[],
    systemPrompt: string
  ): Promise<string> {
    if (!this.apiKey) {
      console.error("OpenRouter API Key is missing in environment variables.");
      throw new Error("API_KEY_MISSING");
    }

    const payload = {
      model: this.defaultModel,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    };

    // Timeout implementation using AbortController (15 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 15000);

    try {
      const response = await fetch(OPENROUTER_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "HTTP-Referer": this.siteUrl,
          "X-Title": this.siteName,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`OpenRouter API error response (${response.status}):`, errorText);
        throw new Error(`OpenRouter API error (Status ${response.status})`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (content === undefined || content === null) {
        console.error("OpenRouter API response parsing error: empty content in choices.", data);
        throw new Error("Empty response from AI service");
      }

      return content;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        console.error("OpenRouter API call timed out after 15 seconds.");
        throw new Error("AI service request timed out. Please try again.");
      }
      console.error("Error communicating with OpenRouter:", error);
      throw error;
    }
  }
}

export const openRouterService = new OpenRouterService();
