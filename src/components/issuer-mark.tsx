type IssuerMarkProps = {
  issuer: string;
  featured?: boolean;
};

type MarkConfig = {
  asset?: string;
  label: string;
  color: string;
  wordmarkClassName?: string;
};

const marks: Record<string, MarkConfig> = {
  OpenAI: {
    asset: "/brand/openai.svg",
    label: "OpenAI",
    color: "text-white"
  },
  Databricks: {
    asset: "/brand/databricks.svg",
    label: "Databricks",
    color: "text-[#ff3621]"
  },
  "British Airways": {
    asset: "/brand/british-airways.svg",
    label: "British Airways",
    color: "text-[#2e5c99]"
  },
  "Boston Consulting Group (BCG)": {
    label: "BCG",
    color: "text-[#006b54]",
    wordmarkClassName: "text-base tracking-[-0.04em]"
  },
  "McKinsey & Company": {
    label: "McKinsey",
    color: "text-[#0b1f3a]",
    wordmarkClassName: "font-[var(--font-title)] text-sm"
  },
  IBM: {
    label: "IBM",
    color: "text-[#0f62fe]",
    wordmarkClassName: "text-base tracking-[-0.08em]"
  },
  "National Service Scheme (NSS)": {
    label: "NSS",
    color: "text-[#8b1e3f]",
    wordmarkClassName: "text-sm tracking-[0.08em]"
  },
  "IIT Bombay Spoken Tutorial": {
    label: "IITB",
    color: "text-[#9a6700]",
    wordmarkClassName: "text-sm tracking-[0.08em]"
  },
  "Trekking Club": {
    label: "TC",
    color: "text-sea",
    wordmarkClassName: "text-sm tracking-[0.08em]"
  }
};

export function IssuerMark({ issuer, featured = false }: IssuerMarkProps) {
  const mark = marks[issuer] ?? {
    label: issuer
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 4),
    color: "text-sea"
  };
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div
      aria-label={`${issuer} logo`}
      className={`inline-flex min-h-10 items-center gap-2 rounded-xl border px-3 py-2 ${
        featured ? "border-white/25 bg-white/10" : "border-ink/10 bg-paper/70"
      } ${mark.color}`}
    >
      {mark.asset && (
        <span
          aria-hidden="true"
          className="h-5 w-5 shrink-0 bg-current"
          style={{
            mask: `url(${basePath}${mark.asset}) center / contain no-repeat`,
            WebkitMask: `url(${basePath}${mark.asset}) center / contain no-repeat`
          }}
        />
      )}
      <span className={`font-bold leading-none ${mark.wordmarkClassName ?? "text-xs"}`}>{mark.label}</span>
    </div>
  );
}
