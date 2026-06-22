export default function HowItWorksPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-20 w-full">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 border border-[#22c55e]/40 px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#22c55e]">
              How it works
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141210] leading-tight mb-3">
            Simple process. Clear structure.
          </h1>

          <p className="text-base text-[#7a7469]">
            Send your material → we structure it → you write with clarity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              n: "01",
              title: "Send your material",
              desc: "Notes, PDFs, screenshots, or voice notes via WhatsApp. No preparation required.",
            },
            {
              n: "02",
              title: "We analyze your assignment",
              desc: "We extract the real question, requirements, and structure needed.",
            },
            {
              n: "03",
              title: "We build your structure",
              desc: "Your material is converted into a clear academic writing framework.",
            },
            {
              n: "04",
              title: "You receive your framework",
              desc: "A structured writing guide you can directly use to complete your assignment.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-white border border-[#ddd9d0] px-6 py-5 hover:border-[#22c55e]/40 transition"
            >
              <div className="text-2xl font-extrabold text-[#ddd9d0] mb-3">
                {s.n}
              </div>

              <h3 className="text-base font-semibold text-[#141210] mb-1.5">
                {s.title}
              </h3>

              <p className="text-sm text-[#7a7469] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust block */}
        <div className="mt-6 border-l-2 border-[#22c55e] pl-4">
          <p className="text-sm text-[#7a7469]">
            You are not paying for an assignment.{" "}
            <span className="text-[#141210] font-medium">
              You are paying for a structured writing framework that guides your work.
            </span>
          </p>
        </div>

      </div>
    </main>
  )
}
