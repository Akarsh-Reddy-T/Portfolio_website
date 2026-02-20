import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <MotionSection>
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-sea">Certificates</p>
        <h1 className="mt-2 font-[var(--font-title)] text-4xl">Certifications and Credentials</h1>
      </MotionSection>
      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((certificate) => (
          <MotionSection key={certificate.id} className="rounded-2xl border border-ink/10 bg-white/85 p-6">
            <h2 className="text-xl font-semibold">{certificate.title}</h2>
            <p className="mt-1 text-sm text-ink/75">{certificate.issuer}</p>
            <p className="mt-1 text-sm text-sea">Issued: {certificate.issueDate}</p>
            {certificate.credentialId && <p className="mt-1 text-xs text-ink/65">Credential ID: {certificate.credentialId}</p>}
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-ember">{certificate.tags.join(" • ")}</p>
            <div className="mt-4 flex gap-4 text-sm font-semibold text-sea">
              {certificate.filePath !== "#" ? (
                <Link href={certificate.filePath} target="_blank">Open Certificate</Link>
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
