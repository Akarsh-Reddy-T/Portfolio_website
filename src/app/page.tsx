import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { certificates } from "@/data/certificates";
import { homeContent } from "@/data/home";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => homeContent.featuredProjectIds.includes(p.id)).slice(0, 3);
  const skillSnapshot = skills.slice(0, 3);
  const latestCertificates = certificates.slice(0, 3);

  return (
    <div className="space-y-14 md:space-y-20">
      <MotionSection className="space-y-6">
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-sea">Portfolio</p>
        <h1 className="max-w-4xl font-[var(--font-title)] text-4xl leading-tight md:text-6xl">{homeContent.headline}</h1>
        <p className="max-w-3xl text-lg text-ink/80">{homeContent.subheadline}</p>
        <div className="space-y-3 max-w-3xl text-ink/85">
          {homeContent.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/projects" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-sea">
            View Projects
          </Link>
          <Link href="/contact" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold hover:border-sea hover:text-sea">
            Contact Me
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-4">
        {homeContent.quickStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-ink/10 bg-white/70 p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-ink/60">{stat.label}</p>
            <p className="mt-2 text-lg font-semibold">{stat.value}</p>
          </article>
        ))}
      </MotionSection>

      <MotionSection className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-[var(--font-title)] text-3xl">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-semibold text-sea hover:text-ember">See all projects</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.id} className="rounded-2xl border border-ink/10 bg-white/80 p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-ember">{project.status}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{project.summary}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-[var(--font-title)] text-3xl">Skills Snapshot</h2>
          <Link href="/skills" className="text-sm font-semibold text-sea hover:text-ember">See all skills</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {skillSnapshot.map((group) => (
            <article key={group.id} className="rounded-2xl border border-ink/10 bg-white/80 p-5">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <p className="mt-2 text-sm text-ink/70">{group.items.slice(0, 4).map((item) => item.name).join(" • ")}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-[var(--font-title)] text-3xl">Certificates</h2>
          <Link href="/certificates" className="text-sm font-semibold text-sea hover:text-ember">View all certificates</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestCertificates.map((certificate) => (
            <article key={certificate.id} className="rounded-2xl border border-ink/10 bg-white/80 p-5">
              <h3 className="text-lg font-semibold">{certificate.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{certificate.issuer} • {certificate.issueDate}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-ink/15 bg-ink p-8 text-paper">
        <h2 className="font-[var(--font-title)] text-3xl">Let&apos;s build something useful.</h2>
        <p className="mt-3 max-w-2xl text-paper/80">
          Reach me at <a className="font-semibold underline decoration-sand decoration-2 underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or use the contact form.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-sand px-6 py-3 text-sm font-semibold text-ink hover:bg-paper">
            Open Contact Options
          </Link>
          <Link href="/projects" className="rounded-full border border-paper/60 px-6 py-3 text-sm font-semibold hover:border-paper">
            Review Projects
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
