import { MotionSection } from "@/components/motion-section";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Skills</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">Technical Skills</h1>
        <p className="mt-4 max-w-3xl text-ink/80">
          My skill set combines AI/ML engineering, data science, cloud systems, and workflow orchestration to build end-to-end intelligent solutions.
        </p>
      </MotionSection>
      <div className="space-y-5">
        {skills.map((group) => (
          <MotionSection key={group.id} className="rounded-2xl border border-ink/10 bg-white/85 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-semibold">{group.category}</h2>
              <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-ink">
                {group.items.length} skills
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item.id} className="rounded-full border border-ink/20 bg-paper px-4 py-2 text-sm">
                  {item.name}{item.level ? ` • ${item.level}` : ""}
                </span>
              ))}
            </div>
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
