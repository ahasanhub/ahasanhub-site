import { useEffect, useRef, useState } from "react";
import { X, Trash2, Bot, Sparkles } from "lucide-react";
import { ChatMessage as ChatMessageType } from "@/types/chatbot";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { cn } from "@/lib/utils";

const SUGGESTED_QUESTIONS = [
  { label: "AI Integration & Agent Solutions", query: "Can you explain AhasanHub's AI integration and AI agent solutions?" },
  { label: "ERP & Dynamics 365 Modernization", query: "How does AhasanHub help with legacy system modernization and Dynamics 365 / ERP consulting?" },
  { label: "Cloud, DevOps & Data Analytics", query: "What kind of Cloud/DevOps architecture and Data Analytics services do you provide?" },
];

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessageType[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (content: string) => void;
  onClearChat: () => void;
}

export function ChatWindow({
  isOpen,
  onClose,
  messages,
  isLoading,
  error,
  onSendMessage,
  onClearChat,
}: ChatWindowProps) {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const lastMessage = messages[messages.length - 1];
  const hasSuggestions = 
    lastMessage && 
    lastMessage.role === "assistant" && 
    lastMessage.suggestions && 
    lastMessage.suggestions.length > 0;

  // Auto-scroll to bottom of conversation
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !showLeadForm) {
      scrollToBottom();
      // Focus the input or container if needed
      windowRef.current?.focus();
    }
  }, [messages, isLoading, isOpen, showLeadForm]);

  // Handle Escape key to close chat window
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      tabIndex={-1}
      className={cn(
        "fixed bottom-24 right-6 z-50 flex h-[580px] w-[400px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] flex-col rounded-2xl border border-border bg-surface shadow-2xl transition-all duration-300 outline-none",
        "animate-in fade-in-50 slide-in-from-bottom-5 duration-200"
      )}
      role="dialog"
      aria-label="AhasanHub Consulting AI Chatbot"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface-muted px-4 py-3 rounded-t-2xl">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Bot className="size-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-1.5 leading-none">
              AhasanHub AI
              <Sparkles className="size-3.5 text-premium shrink-0" />
            </h2>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-success"></span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium">
                Online Consulting Assistant
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Consultation Button */}
          {!showLeadForm && (
            <button
              onClick={() => setShowLeadForm(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/90 px-2 py-1 rounded-lg hover:bg-surface transition-colors focus-visible:outline-ring mr-1 shrink-0 cursor-pointer"
              title="Request a consulting discovery session"
              aria-label="Request Consultation"
            >
              <Sparkles className="size-3 text-premium fill-premium/10 shrink-0" />
              <span>Consulting</span>
            </button>
          )}

          {messages.length > 0 && !showLeadForm && (
            <button
              onClick={onClearChat}
              className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-surface hover:text-destructive transition-colors focus-visible:outline-ring cursor-pointer"
              title="Clear conversation history"
              aria-label="Clear chat history"
            >
              <Trash2 className="size-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground transition-colors focus-visible:outline-ring cursor-pointer"
            title="Close chatbot"
            aria-label="Close chatbot window"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {/* Body Content */}
      {showLeadForm ? (
        <LeadCaptureForm
          onClose={() => setShowLeadForm(false)}
          onSuccess={() => setShowLeadForm(false)}
        />
      ) : (
        <>
          {/* Messages List Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-background/50">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center p-5 space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-surface border border-border shadow-sm text-primary mb-1">
                    <Bot className="size-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Consulting Assistant
                  </h3>
                  <p className="text-xs text-muted-foreground max-w-[280px] leading-relaxed">
                    {"Hello! I can answer questions about AhasanHub's enterprise AI systems, ERP architecture, cloud solutions, and software engineering services."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(true)}
                    className="text-xs font-semibold text-primary hover:underline hover:text-primary/90 flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="size-3 text-premium fill-premium/10 shrink-0" />
                    Request expert consultation
                  </button>
                </div>

                <div className="w-full max-w-[320px] pt-2 space-y-2 border-t border-border/60">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground text-left px-1 mb-1">
                    Suggested Inquiries
                  </p>
                  <div className="space-y-1.5">
                    {SUGGESTED_QUESTIONS.map((s, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onSendMessage(s.query)}
                        className="w-full text-left px-3 py-2 text-xs rounded-xl border border-border bg-surface hover:bg-surface-muted hover:border-primary/30 transition-all text-foreground font-medium flex items-start gap-2 shadow-xs cursor-pointer leading-normal"
                      >
                        <Sparkles className="size-3.5 text-premium shrink-0 mt-0.5" />
                        <span>{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            ) : (
              messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))
            )}

            {/* Dynamic suggested questions from the latest assistant response */}
            {hasSuggestions && !isLoading && (
              <div className="flex flex-col gap-1.5 py-1.5 pl-11 pr-4 animate-in fade-in duration-200">
                <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                  Suggested Follow-ups
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {lastMessage.suggestions!.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onSendMessage(suggestion)}
                      className="text-left px-3 py-1.5 text-xs rounded-xl border border-border bg-surface hover:bg-surface-muted hover:border-primary/30 transition-all text-foreground font-medium flex items-center gap-1.5 shadow-xs cursor-pointer leading-normal"
                    >
                      <Sparkles className="size-3 text-premium shrink-0" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex w-full items-end gap-3 py-1 justify-start">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface shadow-sm text-tech">
                  <Bot className="size-4 animate-pulse" />
                </div>
                <div className="rounded-2xl rounded-bl-xs border border-border bg-surface-muted px-4 py-3 shadow-sm max-w-[80%]">
                  <div className="flex gap-1.5 py-1 items-center justify-center">
                    <span className="size-2 rounded-full bg-muted-foreground/60 animate-bounce duration-300" style={{ animationDelay: "0ms" }} />
                    <span className="size-2 rounded-full bg-muted-foreground/60 animate-bounce duration-300" style={{ animationDelay: "150ms" }} />
                    <span className="size-2 rounded-full bg-muted-foreground/60 animate-bounce duration-300" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3 text-xs text-destructive text-center leading-relaxed">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input panel */}
          <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
        </>
      )}
    </div>
  );
}
