import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-sm font-bold tracking-[0.12em] uppercase text-sea">
          AR
        </Link>
        <ul className="flex flex-wrap items-center gap-3 text-sm md:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-ember">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
