"use client";

import { useState } from "react";
import { MessageSquareText } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { useChatbot } from "./useChatbot";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearConversation,
    isMounted,
  } = useChatbot();

  if (!isMounted) return null;

  return (
    <>
      {/* Floating Toggle Button (Hidden when chat window is open) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg cursor-pointer transition-all duration-300",
            "hover:scale-110 hover:bg-primary/95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            "animate-in fade-in zoom-in-50 duration-200"
          )}
          aria-label="Open AI Consulting Chatbot"
          aria-expanded={isOpen}
        >
          <MessageSquareText className="size-6 transition-transform duration-200 group-hover:scale-110" />
        </button>
      )}

      {/* Chat Window Panel */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isLoading={isLoading}
        error={error}
        onSendMessage={sendMessage}
        onClearChat={clearConversation}
      />
    </>
  );
}
