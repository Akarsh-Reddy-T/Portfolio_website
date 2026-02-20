import { MotionSection } from "@/components/motion-section";
import { education } from "@/data/education";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">About</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">{siteConfig.name}</h1>
        <div className="mt-4 max-w-3xl space-y-3 text-ink/80">
          <p>
            I build production-oriented AI and data systems that combine practical engineering with measurable business impact.
          </p>
          <p>
            With a Master&apos;s in Data Science and hands-on experience across AI agents, RAG, and cloud ML platforms, I focus on creating systems that are reliable, scalable, and aligned with real business workflows.
          </p>
          <p>
            I am especially motivated by solving ambiguous problems, collaborating with diverse teams, and turning complex technical ideas into intuitive, high-value products.
          </p>
        </div>
      </MotionSection>
      <MotionSection className="space-y-4">
        <h2 className="font-[var(--font-title)] text-3xl">Education</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.id} className="rounded-2xl border border-ink/10 bg-white/80 p-5">
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <p className="mt-1 text-sm text-ink/80">{item.degree}</p>
              <p className="mt-2 text-sm font-semibold text-sea">{item.grade}</p>
              <p className="mt-2 text-sm text-ink/70">{item.coursework.join(" • ")}</p>
            </article>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
