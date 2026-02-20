import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Contact</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">Get In Touch</h1>
        <p className="mt-4 max-w-2xl text-ink/80">
          I am open to AI/ML engineering, data science, and agentic AI opportunities. Reach out through email or the contact form.
        </p>
      </MotionSection>
      <MotionSection className="rounded-2xl border border-ink/10 bg-white/85 p-6">
        <p className="text-sm uppercase tracking-[0.12em] text-ink/60">Email</p>
        <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-xl font-semibold text-sea hover:text-ember">{siteConfig.email}</a>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link href={siteConfig.linkedin} target="_blank" className="rounded-full border border-ink/20 px-5 py-2 text-sm font-semibold hover:border-sea hover:text-sea">LinkedIn</Link>
          <Link href={siteConfig.github} target="_blank" className="rounded-full border border-ink/20 px-5 py-2 text-sm font-semibold hover:border-sea hover:text-sea">GitHub</Link>
          {siteConfig.googleFormUrl !== "#" && (
            <Link href={siteConfig.googleFormUrl} target="_blank" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper hover:bg-sea">
              Open Google Form
            </Link>
          )}
        </div>
      </MotionSection>
    </div>
  );
}
