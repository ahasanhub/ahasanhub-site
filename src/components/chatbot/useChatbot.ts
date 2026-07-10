"use client";

import { useState, useEffect, useCallback } from "react";
import { ChatMessage } from "@/types/chatbot";

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Load chat history from localStorage on client-side mount
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("ahasanhub_chat_history");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved chat history:", e);
        localStorage.removeItem("ahasanhub_chat_history");
      }
    }
  }, []);

  /**
   * Synchronizes message state.
   * This abstracts storage layers, preparing the architecture for future database syncs.
   */
  const syncHistory = useCallback(async (updatedMessages: ChatMessage[]) => {
    // 1. Session persistence via Local Storage
    localStorage.setItem("ahasanhub_chat_history", JSON.stringify(updatedMessages));

    // 2. Future Database Sync Point:
    // Replace this or trigger a background job to post to `/api/chatbot/history`
    // Example:
    // await fetch("/api/chatbot/history", {
    //   method: "PUT",
    //   body: JSON.stringify({ messages: updatedMessages }),
    // });
  }, []);

  /**
   * Submits a user message and triggers the AI API response handler.
   */
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    // Optimistically update UI and session store
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    syncHistory(updatedMessages);

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get AI response.");
      }

      const data = await response.json();

      if (data.success && data.message) {
        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
          createdAt: new Date().toISOString(),
          suggestions: data.suggestions,
        };

        const finalMessages = [...updatedMessages, assistantMessage];
        setMessages(finalMessages);
        syncHistory(finalMessages);
      } else {
        throw new Error(data.error || "Invalid response structure from assistant.");
      }
    } catch (err: any) {
      console.error("Chatbot Hook Send Error:", err);
      setError(
        err.message || "Failed to connect to the assistant. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, [messages, syncHistory]);

  /**
   * Clears session chat logs.
   */
  const clearConversation = useCallback(async () => {
    setMessages([]);
    setError(null);
    localStorage.removeItem("ahasanhub_chat_history");

    // Future Database Sync Point:
    // Ex: await fetch("/api/chatbot/history", { method: "DELETE" });
  }, []);

  return {
    messages: isMounted ? messages : [],
    isLoading,
    error,
    sendMessage,
    clearConversation,
    isMounted,
  };
}
