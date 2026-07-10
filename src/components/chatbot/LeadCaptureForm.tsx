"use client";

import React, { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";

// Client-side validation schema using Zod
const leadFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  currentSystem: z.string().min(1, "Current system details are required"),
  challenge: z.string().min(5, "Challenge description must be at least 5 characters"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadCaptureFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function LeadCaptureForm({ onClose, onSuccess }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    company: "",
    industry: "",
    currentSystem: "",
    challenge: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when typing
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError(null);

    // Validate using Zod schema
    const result = leadFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LeadFormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Forward to secure Next.js API route
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          challenge: `Current System: ${formData.currentSystem}\nBusiness Challenge: ${formData.challenge}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit lead data.");
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (err: unknown) {
      console.error("Lead Form Submission Error:", err);
      const errorObj = err as Error;
      setSubmitError(
        (errorObj && typeof errorObj === "object" && "message" in errorObj && typeof errorObj.message === "string" ? errorObj.message : null) || "Failed to submit your details. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center space-y-4 animate-in fade-in duration-300">
        <div className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="text-base font-semibold text-foreground">
          Request Received
        </h3>
        <p className="text-xs text-muted-foreground max-w-[280px] leading-relaxed">
          Thank you for your interest! A senior technology architect from AhasanHub will review your information and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      {/* Mini Sub-Header */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-2.5 text-xs text-muted-foreground">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"
          title="Back to conversation"
        >
          <ArrowLeft className="size-3.5" />
          Back
        </button>
        <span className="text-border">|</span>
        <span className="font-medium text-foreground flex items-center gap-1">
          Request Consulting Discovery
          <Sparkles className="size-3 text-premium fill-premium/10" />
        </span>
      </div>

      {/* Form Scrollable Container */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto p-4 space-y-3.5"
      >
        {submitError && (
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-xs text-destructive text-center leading-relaxed">
            {submitError}
          </div>
        )}

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="lead-name" className="text-xs font-semibold text-foreground mb-1">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id="lead-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isLoading}
            className={cn(
              "w-full h-9 px-3 rounded-lg border bg-surface-muted text-xs text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
              errors.name ? "border-destructive focus:ring-destructive focus:border-destructive" : "border-border"
            )}
            placeholder="John Doe"
          />
          {errors.name && (
            <span className="text-[10px] text-destructive mt-1 font-medium">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="lead-email" className="text-xs font-semibold text-foreground mb-1">
            Work Email <span className="text-primary">*</span>
          </label>
          <input
            id="lead-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
            className={cn(
              "w-full h-9 px-3 rounded-lg border bg-surface-muted text-xs text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
              errors.email ? "border-destructive focus:ring-destructive focus:border-destructive" : "border-border"
            )}
            placeholder="john@company.com"
          />
          {errors.email && (
            <span className="text-[10px] text-destructive mt-1 font-medium">{errors.email}</span>
          )}
        </div>

        {/* Company & Industry side-by-side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label htmlFor="lead-company" className="text-xs font-semibold text-foreground mb-1">
              Company <span className="text-primary">*</span>
            </label>
            <input
              id="lead-company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              disabled={isLoading}
              className={cn(
                "w-full h-9 px-3 rounded-lg border bg-surface-muted text-xs text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                errors.company ? "border-destructive focus:ring-destructive focus:border-destructive" : "border-border"
              )}
              placeholder="Enterprise Inc."
            />
            {errors.company && (
              <span className="text-[10px] text-destructive mt-1 font-medium">{errors.company}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lead-industry" className="text-xs font-semibold text-foreground mb-1">
              Industry <span className="text-primary">*</span>
            </label>
            <input
              id="lead-industry"
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              disabled={isLoading}
              className={cn(
                "w-full h-9 px-3 rounded-lg border bg-surface-muted text-xs text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                errors.industry ? "border-destructive focus:ring-destructive focus:border-destructive" : "border-border"
              )}
              placeholder="Finance, Retail..."
            />
            {errors.industry && (
              <span className="text-[10px] text-destructive mt-1 font-medium">{errors.industry}</span>
            )}
          </div>
        </div>

        {/* Current System */}
        <div className="flex flex-col">
          <label htmlFor="lead-system" className="text-xs font-semibold text-foreground mb-1">
            Current ERP / Tech Stack <span className="text-primary">*</span>
          </label>
          <input
            id="lead-system"
            type="text"
            name="currentSystem"
            value={formData.currentSystem}
            onChange={handleInputChange}
            disabled={isLoading}
            className={cn(
              "w-full h-9 px-3 rounded-lg border bg-surface-muted text-xs text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
              errors.currentSystem ? "border-destructive focus:ring-destructive focus:border-destructive" : "border-border"
            )}
            placeholder="e.g. NAV 2018, Legacy SQL Server, Excel"
          />
          {errors.currentSystem && (
            <span className="text-[10px] text-destructive mt-1 font-medium">{errors.currentSystem}</span>
          )}
        </div>

        {/* Challenge */}
        <div className="flex flex-col">
          <label htmlFor="lead-challenge" className="text-xs font-semibold text-foreground mb-1">
            Business Challenge <span className="text-primary">*</span>
          </label>
          <textarea
            id="lead-challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleInputChange}
            disabled={isLoading}
            rows={3}
            className={cn(
              "w-full p-2.5 rounded-lg border bg-surface-muted text-xs text-foreground resize-none transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
              errors.challenge ? "border-destructive focus:ring-destructive focus:border-destructive" : "border-border"
            )}
            placeholder="Describe integration hurdles, modernization requests, or automation requirements..."
          />
          {errors.challenge && (
            <span className="text-[10px] text-destructive mt-1 font-medium">{errors.challenge}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full h-9 mt-2 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow-sm transition-all duration-200 cursor-pointer",
            "hover:bg-primary/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            "disabled:pointer-events-none disabled:opacity-40"
          )}
        >
          {isLoading ? "Submitting Inquiry..." : "Submit Discovery Request"}
        </button>
      </form>
    </div>
  );
}
