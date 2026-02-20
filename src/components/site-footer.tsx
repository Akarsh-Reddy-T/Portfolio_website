import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-ink/80 md:flex-row md:items-center md:justify-between md:px-8">
        <p>{siteConfig.name} • {siteConfig.role}</p>
        <div className="flex gap-4">
          <Link href={siteConfig.linkedin} target="_blank">LinkedIn</Link>
          <Link href={siteConfig.github} target="_blank">GitHub</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
