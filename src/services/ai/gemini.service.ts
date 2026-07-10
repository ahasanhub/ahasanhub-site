import { ChatMessage } from "@/types/chatbot";

export class GeminiService {
  private apiKey: string;
  private defaultModel: string;

  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY || "";
    this.defaultModel = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  }

  /**
   * Generates a chat completion using the native Google Gemini REST API.
   * Includes timeout and error handling.
   * @param messages Conversation history excluding the system prompt
   * @param systemPrompt System instructions for the AI
   */
  async generateChatResponse(
    messages: { role: string; content: string }[],
    systemPrompt: string
  ): Promise<string> {
    if (!this.apiKey) {
      console.error("Gemini API Key is missing in environment variables.");
      throw new Error("API_KEY_MISSING");
    }

    const model = this.defaultModel;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;

    // Map roles to Gemini specifications ("assistant" -> "model")
    const contents = messages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const payload = {
      contents,
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    };

    // Timeout implementation using AbortController (15 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 15000);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Gemini API error response (${response.status}):`, errorText);
        throw new Error(`Gemini API error (Status ${response.status})`);
      }

      const data = await response.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (content === undefined || content === null) {
        console.error("Gemini API response parsing error: empty content in candidates.", data);
        throw new Error("Empty response from Gemini AI service");
      }

      return content;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        console.error("Gemini API call timed out after 15 seconds.");
        throw new Error("AI service request timed out. Please try again.");
      }
      console.error("Error communicating with Gemini API:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
