export default function DisclaimerPage() {
  return (
    <main className="container py-12">

      <div className="max-w-3xl mx-auto">

        {/* LABEL */}
        <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
          Disclaimer
        </div>

        {/* TITLE */}
        <h1
          className="text-[2.8rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.05em] mb-6"
          style={{ fontFamily: "Instrument Serif" }}
        >
          Important notice
        </h1>

        {/* CONTENT */}
        <div className="space-y-6 text-[1.08rem] md:text-[1.15rem] leading-relaxed text-[var(--muted)]">

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.2rem] text-[var(--ink)] mb-3 font-medium">
              Service purpose
            </h2>

            <p>
              Structura provides academic organization and structure support only. It is designed to help students
              transform unstructured input into a clear framework for their own writing.
            </p>

          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.2rem] text-[var(--ink)] mb-3 font-medium">
              No academic submission guarantee
            </h2>

            <p>
              The service does not produce final academic submissions and does not guarantee grades, outcomes, or approval
              from any institution.
            </p>

          </div>

          <div className="border border-[var(--border)] bg-[var(--white)] p-6">

            <h2 className="text-[1.2rem] text-[var(--ink)] mb-3 font-medium">
              User responsibility
            </h2>

            <p>
              Users remain fully responsible for writing, editing, and submitting their own academic work based on the structure provided.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}
