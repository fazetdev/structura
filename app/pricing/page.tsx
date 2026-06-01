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
    tag: "Most common",
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

const payments = [
  { name: "Binance Pay", desc: "Crypto transfer", icon: "₿" },
  { name: "Payoneer", desc: "Card or bank transfer", icon: "P" },
  { name: "Grey", desc: "USD account transfer", icon: "G" },
]

export default function PricingPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24 text-[#141210]">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              Pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5">
            Choose based on<br />
            <span className="text-[#22c55e]">what you already have</span>
          </h1>

          <p className="text-lg text-[#141210] max-w-xl leading-relaxed mb-4">
            Select a tier based on your current academic materials. No complexity scoring needed.
          </p>

          <p className="text-base text-[#7a7469]">
            Works for assignments, reports, presentations, and project-based tasks.
          </p>

          <div className="border-l-4 border-[#22c55e] pl-4 mt-4">
            <p className="text-base text-[#7a7469]">
              A preview is always provided before payment.
            </p>
          </div>
        </div>

        {/* TIERS */}
        <div className="flex flex-col gap-5 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.level}
              className="bg-white border border-[#ddd9d0] p-8 flex flex-col gap-6 hover:border-[#22c55e]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#7a7469]">
                    {tier.level}
                  </span>

                  {tier.tag && (
                    <span className="text-sm font-semibold text-[#22c55e] border border-[#22c55e]/30 px-3 py-1">
                      {tier.tag}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-6xl font-black text-[#141210]">
                    {tier.price}
                  </span>
                  <span className="text-xl font-bold text-[#22c55e]">
                    {tier.name}
                  </span>
                </div>

                <p className="text-lg text-[#141210]">
                  {tier.desc}
                </p>
              </div>

              <div className="border-t border-[#ddd9d0] pt-5">
                <div className="text-sm font-semibold tracking-widest uppercase text-[#7a7469] mb-4">
                  Examples
                </div>

                <ul className="flex flex-col gap-3">
                  {tier.examples.map((ex) => (
                    <li key={ex} className="flex gap-3 text-base text-[#7a7469]">
                      <span className="text-[#22c55e] font-bold">→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              <WhatsAppButton
                label={`Request preview — ${tier.price}`}
                size="lg"
                fullWidth
                customMessage={tier.waMessage}
              />
            </div>
          ))}
        </div>

        {/* PAYMENT */}
        <div className="bg-white border border-[#ddd9d0] mb-10">
          <div className="border-b border-[#ddd9d0] px-8 py-5">
            <span className="text-sm font-semibold tracking-widest uppercase text-[#7a7469]">
              Payment methods
            </span>
          </div>

          <div className="flex flex-col divide-y divide-[#ddd9d0]">
            {payments.map((p) => (
              <div key={p.name} className="px-8 py-6 flex items-center gap-5">
                <div className="w-10 h-10 flex items-center justify-center bg-[#f6f3ee] border border-[#ddd9d0] font-bold">
                  {p.icon}
                </div>
                <div>
                  <div className="font-bold">{p.name}</div>
                  <div className="text-sm text-[#7a7469]">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#ddd9d0] bg-[#faf9f7] px-8 py-5 text-sm text-[#7a7469]">
            Need help choosing? Message on WhatsApp.
          </div>
        </div>

        <p className="text-sm text-[#7a7469] text-center">
          Not a ghostwriting service — you always produce the final work.
        </p>

      </div>
    </main>
  )
}
