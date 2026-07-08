"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  isLoading,
  placeholder = "Ask a question about AhasanHub...",
}: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    onSendMessage(inputValue.trim());
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-border bg-surface p-3"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        disabled={isLoading}
        className={cn(
          "flex-1 h-10 px-4 rounded-xl border border-border bg-surface-muted text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200",
          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        aria-label="Chat input message"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-all duration-200",
          "hover:bg-primary/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:pointer-events-none disabled:opacity-40"
        )}
        aria-label="Send message"
      >
        <SendHorizontal className="size-4 shrink-0" />
      </button>
    </form>
  );
}
