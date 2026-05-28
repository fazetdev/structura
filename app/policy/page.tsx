export default function PolicyPage() {
  return (
    <main className="container py-12">

      <div className="max-w-3xl mx-auto">

        <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
          Policy
        </div>

        <h1
          className="text-[2.8rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.05em] mb-6"
          style={{ fontFamily: "Instrument Serif" }}
        >
          Academic support policy
        </h1>

        <div className="space-y-8 text-[1.08rem] md:text-[1.15rem] leading-relaxed text-[var(--muted)]">

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Educational support only
            </h2>

            <p>
              Structura provides organization, structure, and clarity support for academic material.
            </p>

          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              No ghostwriting
            </h2>

            <p>
              Structura does not impersonate students or complete final academic submissions on behalf of students.
            </p>

          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.3rem] text-[var(--ink)] mb-3 font-medium">
              Responsible usage
            </h2>

            <p>
              Students are expected to use the structure provided as guidance for their own writing process.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}
