import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  industry: z.string().min(1, "Industry is required"),
  challenge: z.string().min(5, "Challenge description is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate payload server-side using Zod
    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify all fields are filled correctly.",
        },
        { status: 400 }
      );
    }

    const { name, email, company, industry, challenge } = validationResult.data;

    // 2. Map payload for the administrative database ingestion
    const adminPayload = {
      name,
      email,
      company,
      industry,
      challenge,
      source: "AI_CHATBOT",
    };

    // 3. Post securely from server to prevent exposing keys or direct endpoints to client
    const response = await fetch("https://admin.ahasanhub.com/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Admin API lead registration failed (${response.status}):`, errorText);
      throw new Error(`Admin service responded with status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Lead capture route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit consultation request. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
