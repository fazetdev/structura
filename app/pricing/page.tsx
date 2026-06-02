import WhatsAppButton from "@/components/ui/WhatsAppButton"

const tiers = [
  {
    level: "Tier 1",
    name: "Single Source",
    price: "$5",
    tag: null,
    desc: "One academic task from a single input transformed into a structured framework.",
    examples: [
      "One assignment or report",
      "One PDF or lecture note",
      "One voice note",
      "One set of screenshots",
    ],
    waMessage: "Hi, I want a preview first. Tier 1 — $5:",
  },
  {
    level: "Tier 2",
    name: "Small Combo",
    price: "$9",
    tag: "Most popular",
    desc: "A small mix of 2–3 academic materials structured into one framework.",
    examples: [
      "Brief + lecture slides",
      "Voice note + screenshots",
      "Lecture notes + PDF",
      "Any 2–3 item combination",
    ],
    waMessage: "Hi, I want a preview first. Tier 2 — $9:",
  },
  {
    level: "Tier 3",
    name: "Full Set",
    price: "$14",
    tag: null,
    desc: "Multiple academic materials combined into a complete structured output.",
    examples: [
      "Brief + slides + notes",
      "Voice note + PDF + screenshots",
      "3–5 mixed materials",
      "Multi-format academic task",
    ],
    waMessage: "Hi, I want a preview first. Tier 3 — $14:",
  },
  {
    level: "Tier 4",
    name: "Complex Case",
    price: "$25",
    tag: "Advanced",
    desc: "Large or unclear academic material requiring deep restructuring.",
    examples: [
      "Multiple unclear documents",
      "Research-heavy tasks",
      "Cross-topic materials",
      "Undefined structure inputs",
    ],
    waMessage: "Hi, I want a preview first. Tier 4 — $25:",
  },
]

export default function PricingPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24 text-[#141210]">
      <div className="max-w-3xl mx-auto px-6">

        {/* 1. HEADER */}
        <div className="mb-10">

          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              Pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-4">
            Choose your <span className="text-[#22c55e]">workflow size</span>
          </h1>

          <p className="text-lg text-[#141210] leading-relaxed mb-3">
            Send your academic material and receive a structured writing framework built from it.
          </p>

          <p className="text-sm text-[#7a7469]">
            No complexity scoring. No confusion. Just select what you already have.
          </p>

        </div>

        {/* 2. FUNNEL EXPLANATION (KEY CONVERSION BLOCK) */}
        <div className="border border-[#22c55e]/20 bg-[#22c55e]/5 p-5 mb-10 text-sm text-[#141210] space-y-2">
          <p><b>How it works:</b></p>
          <p>1. Send material on WhatsApp</p>
          <p>2. Receive structured preview</p>
          <p>3. Approve if satisfied</p>
          <p>4. Pay and receive final structured output</p>
        </div>

        {/* 3. TIERS */}
        <div className="flex flex-col gap-6 mb-12">

          {tiers.map((tier) => (
            <div
              key={tier.level}
              className="bg-white border border-[#ddd9d0] p-8 flex flex-col gap-6 hover:border-[#22c55e]/50 transition"
            >

              {/* Tier header */}
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest uppercase text-[#7a7469] font-semibold">
                  {tier.level}
                </span>

                {tier.tag && (
                  <span className="text-xs font-semibold text-[#22c55e] border border-[#22c55e]/30 px-3 py-1">
                    {tier.tag}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black">{tier.price}</span>
                <span className="text-xl font-bold text-[#22c55e]">
                  {tier.name}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-[#141210]">
                {tier.desc}
              </p>

              {/* Examples */}
              <div className="border-t border-[#ddd9d0] pt-5">
                <p className="text-xs tracking-widest uppercase text-[#7a7469] mb-3">
                  Examples
                </p>

                <ul className="space-y-2 text-sm text-[#7a7469]">
                  {tier.examples.map((ex) => (
                    <li key={ex} className="flex gap-2">
                      <span className="text-[#22c55e]">→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <WhatsAppButton
                label={`Get preview — ${tier.price}`}
                size="lg"
                fullWidth
                customMessage={tier.waMessage}
              />

            </div>
          ))}
        </div>

        {/* 4. TRUST + RISK REDUCTION */}
        <div className="grid gap-4 mb-10 text-sm text-[#7a7469]">

          <div className="border border-[#ddd9d0] bg-white p-5">
            ✔ No upfront payment required
          </div>

          <div className="border border-[#ddd9d0] bg-white p-5">
            ✔ Preview is always sent before payment
          </div>

          <div className="border border-[#ddd9d0] bg-white p-5">
            ✔ You only pay if you approve the structure
          </div>

        </div>

        {/* 5. PAYMENT CLARITY (NO DETAILS EXPOSED) */}
        <div className="border border-[#ddd9d0] bg-white p-6 mb-10">

          <p className="font-semibold mb-2">Supported payment methods</p>

          <p className="text-sm text-[#7a7469] mb-3">
            Payment details are shared only after preview approval.
          </p>

          <div className="text-sm text-[#7a7469] space-y-1">
            <p>• Binance Pay</p>
            <p>• USD Bank Transfer (Grey)</p>
          </div>

        </div>

        {/* 6. FINAL FOOT NOTE */}
        <p className="text-center text-sm text-[#7a7469]">
          Structured academic support only — you retain full authorship of your work
        </p>

      </div>
    </main>
  )
}
