import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: "AI/ML Engineer portfolio focused on production GenAI systems, agentic workflows, and measurable business impact."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-[var(--font-body)]">
        <SiteNav />
        <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
