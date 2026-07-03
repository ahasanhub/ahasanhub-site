import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AhasanHub",
  description: "AhasanHub portfolio and engineering workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-foreground/10">
              <nav
                className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8"
                aria-label="Primary"
              >
                Navbar placeholder
              </nav>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="border-t border-foreground/10">
              <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                Footer placeholder
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
