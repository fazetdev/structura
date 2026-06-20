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
              Academic materials shared with Qlack are used only to generate a structured academic framework.
              We do not use your materials for any purpose outside your request.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">
            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Data usage
            </h2>
            <p>
              Your notes, PDFs, screenshots, and voice inputs are used only to organize and structure your academic content.
              We do not use your data to train AI models or share it with third parties.
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">
            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Data retention
            </h2>
            <p>
              All materials are deleted within 7 days after delivery unless you request earlier deletion.
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
              We do not sell, publish, or share user materials with any third party.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}
