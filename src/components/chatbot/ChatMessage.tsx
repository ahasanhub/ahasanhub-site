"use client";

import { ChatMessage as ChatMessageType } from "@/types/chatbot";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  // Light-weight custom parser to format bold markers (**) and linebreaks/lists
  // without importing external markdown dependencies
  const renderMessageContent = (content: string) => {
    const lines = content.split("\n");
    let inList = false;
    const listBuffer: React.ReactNode[] = [];
    const elements: React.ReactNode[] = [];

    const flushList = (key: string | number) => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="my-2 space-y-1 list-disc pl-5">
            {[...listBuffer]}
          </ul>
        );
        listBuffer.length = 0;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Check if it's a bullet point
      if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
        inList = true;
        const cleanContent = trimmedLine.replace(/^[-*]\s+/, "");
        listBuffer.push(
          <li key={`li-${index}`} className="text-sm leading-relaxed">
            {parseInlineStyles(cleanContent)}
          </li>
        );
      } else {
        // If we were building a list, close it first
        if (inList) {
          flushList(index);
          inList = false;
        }

        if (trimmedLine === "") {
          elements.push(<div key={`spacer-${index}`} className="h-2" />);
        } else {
          elements.push(
            <p key={`p-${index}`} className="text-sm leading-relaxed">
              {parseInlineStyles(line)}
            </p>
          );
        }
      }
    });

    // Flush any remaining list items
    if (inList) {
      flushList("final");
    }

    return elements;
  };

  // Helper to parse bold formatting: **text**
  const parseInlineStyles = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={cn(
        "flex w-full items-end gap-3 py-1",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {/* Icon for Assistant */}
      {isAssistant && (
        <div
          className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface shadow-sm text-tech"
          aria-hidden="true"
        >
          <Bot className="size-4" />
        </div>
      )}

      <div
        className={cn(
          "flex flex-col gap-1 max-w-[80%]",
          isAssistant ? "items-start" : "items-end"
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 shadow-sm text-sm border",
            isAssistant
              ? "rounded-bl-xs border-border bg-surface-muted text-foreground"
              : "rounded-br-xs border-primary bg-primary text-primary-foreground"
          )}
        >
          <div className="space-y-1.5 break-words">
            {renderMessageContent(message.content)}
          </div>
        </div>

        {/* Timestamp */}
        <span
          className="px-1 text-[10px] text-muted-foreground"
          title={new Date(message.createdAt).toLocaleString()}
        >
          {formattedTime}
        </span>
      </div>

      {/* Icon for User */}
      {!isAssistant && (
        <div
          className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 shadow-sm text-primary"
          aria-hidden="true"
        >
          <User className="size-4" />
        </div>
      )}
    </div>
  );
}
