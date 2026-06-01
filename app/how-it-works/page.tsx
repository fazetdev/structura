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
            Preview before you pay.<br />
            <span className="text-[#22c55e]">Always.</span>
          </h1>

          <p className="text-base text-[#7a7469]">
            Send your material → preview → approve → pay → full delivery.
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
              title: "Receive a preview",
              desc: "A structured sample is prepared first so you can review quality before payment.",
            },
            {
              n: "03",
              title: "Approve and pay",
              desc: "If satisfied with the preview, proceed with secure payment options.",
            },
            {
              n: "04",
              title: "Full delivery",
              desc: "Complete structured framework is delivered, ready for your final writing or submission.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-[#faf9f7] border border-[#ddd9d0] px-6 py-5 hover:border-[#22c55e]/40 transition"
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
            You only pay after reviewing the preview.{" "}
            <span className="text-[#141210] font-medium">
              No upfront risk. No forced payment.
            </span>
          </p>
        </div>

      </div>
    </main>
  )
}
