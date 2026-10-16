import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Certificates</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">Certifications and Credentials</h1>
        <p className="mt-3 max-w-2xl text-ink/70">
          Professional credentials across AI, engineering, data science, and leadership.
        </p>
      </MotionSection>
      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((certificate) => (
          <MotionSection
            key={certificate.id}
            className={
              certificate.featured
                ? "relative overflow-hidden rounded-2xl border border-violet-300/70 bg-gradient-to-br from-violet-700 via-indigo-600 to-violet-500 p-6 text-white shadow-lg shadow-violet-900/20"
                : "rounded-2xl border border-ink/10 bg-white/85 p-6"
            }
          >
            {certificate.featured && (
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]">
                  OpenAI Featured
                </span>
                <span className="text-sm font-semibold text-white/80">OpenAI</span>
              </div>
            )}
            <h2 className="text-xl font-semibold">{certificate.title}</h2>
            {!certificate.featured && <p className="mt-1 text-sm text-ink/75">{certificate.issuer}</p>}
            <p className={`mt-2 text-sm ${certificate.featured ? "text-white/85" : "text-sea"}`}>
              Issued: {certificate.issueDate}
              {certificate.validThrough && ` · Valid through: ${certificate.validThrough}`}
            </p>
            {certificate.credentialId && (
              <p className={`mt-1 text-xs ${certificate.featured ? "text-white/70" : "text-ink/65"}`}>
                Credential ID: {certificate.credentialId}
              </p>
            )}
            <p className={`mt-3 text-xs uppercase tracking-[0.12em] ${certificate.featured ? "text-white/75" : "text-ember"}`}>
              {certificate.tags.join(" • ")}
            </p>
            <div className={`mt-5 flex gap-4 text-sm font-semibold ${certificate.featured ? "text-white" : "text-sea"}`}>
              {certificate.filePath !== "#" ? (
                <Link
                  className={certificate.featured ? "rounded-full bg-white px-4 py-2 text-indigo-700 hover:bg-white/90" : "hover:text-ember"}
                  href={certificate.filePath}
                  target="_blank"
                >
                  Open Certificate
                </Link>
              ) : (
                <span className="text-ink/55">File pending upload</span>
              )}
              {certificate.verifyUrl && <Link href={certificate.verifyUrl} target="_blank">Verify</Link>}
            </div>
          </MotionSection>
        ))}
      </div>
    </div>
  );
}
