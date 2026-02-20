import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function ResumePage() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Resume</p>
      <h1 className="font-[var(--font-title)] text-4xl">Resume</h1>
      <p className="text-ink/80">Open or download the latest version of my resume.</p>
      <Link href={siteConfig.resumePath} target="_blank" className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-sea">
        Open Resume PDF
      </Link>
    </section>
  );
}
