export default function PrivacyPage() {
  return (
    <main className="container py-12">

      <div className="max-w-3xl mx-auto">

        <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
          Privacy
        </div>

        <h1
          className="text-[2.8rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.05em] mb-6"
          style={{ fontFamily: "Instrument Serif" }}
        >
          Privacy policy
        </h1>

        <div className="space-y-8 text-[1.08rem] md:text-[1.15rem] leading-relaxed text-[var(--muted)]">

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Material handling
            </h2>

            <p>
              Academic materials shared with Structura are used only for structure support and organization.
            </p>

          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Student responsibility
            </h2>

            <p>
              Students remain responsible for writing and submitting their own academic work.
            </p>

          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Data sharing
            </h2>

            <p>
              Materials are not sold or publicly shared.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}
