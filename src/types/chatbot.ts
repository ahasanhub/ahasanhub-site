export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string; // ISO date string
  suggestions?: string[]; // Dynamic follow-up suggested questions
}

export interface ChatSessionState {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
}

export interface ChatRequestBody {
  messages: {
    role: "user" | "assistant" | "system";
    content: string;
  }[];
}

export interface ChatResponseBody {
  success: boolean;
  message?: string;
  suggestions?: string[];
  error?: string;
}
