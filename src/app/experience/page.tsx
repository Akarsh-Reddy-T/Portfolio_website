import { MotionSection } from "@/components/motion-section";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Experience</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">Professional Timeline</h1>
        <p className="mt-4 max-w-3xl text-ink/80">
          I have worked across AI engineering, machine learning research, and applied data science roles, with a strong track record of turning experimentation into production-ready systems.
        </p>
      </MotionSection>
      <div className="space-y-5">
        {experience.map((role) => (
          <MotionSection key={role.id} className="rounded-2xl border border-ink/10 bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ember">{role.period}</p>
            <h2 className="mt-1 text-2xl font-semibold">{role.role}</h2>
            <p className="text-ink/70">{role.company}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
