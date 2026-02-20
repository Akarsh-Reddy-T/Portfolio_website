import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Projects</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">Project Portfolio</h1>
        <p className="mt-4 max-w-3xl text-ink/80">
          These projects reflect my core work across agentic AI, LLM applications, and data-driven decision systems, with a focus on practical deployment and measurable outcomes.
        </p>
      </MotionSection>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <MotionSection key={project.id} className="rounded-2xl border border-ink/10 bg-white/85 p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-ink">{project.status}</span>
            </div>
            <p className="mt-3 text-sm text-ink/75">{project.summary}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-sea">{project.techStack.join(" • ")}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {(project.repoUrl || project.liveUrl) && (
              <div className="mt-4 flex gap-4 text-sm font-semibold text-sea">
                {project.repoUrl && <Link href={project.repoUrl} target="_blank">Repository</Link>}
                {project.liveUrl && <Link href={project.liveUrl} target="_blank">Live Demo</Link>}
              </div>
            )}
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
