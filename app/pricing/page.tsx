import WhatsAppButton from "@/components/ui/WhatsAppButton"

const tiers = [
  {
    level: "Tier 1",
    name: "Single Source",
    price: "$5",
    tag: null,
    desc: "One academic task. One clear input, one structured framework back.",
    examples: [
      "One academic task (assignment / report / presentation)",
      "One PDF or lecture note",
      "One voice note",
      "One set of screenshots",
    ],
    waMessage: "Hi, I want to request a preview first. I have a single source (Tier 1 — $5):",
  },
  {
    level: "Tier 2",
    name: "Small Combo",
    price: "$9",
    tag: "Most common",
    desc: "You have two or three items from different sources.",
    examples: [
      "Academic brief + lecture slides",
      "Voice note + screenshots",
      "Lecture notes + PDF",
      "Any 2–3 item combination",
    ],
    waMessage: "Hi, I want to request a preview first. I have a small combo (Tier 2 — $9):",
  },
  {
    level: "Tier 3",
    name: "Full Set",
    price: "$14",
    tag: null,
    desc: "Brief, slides, notes, screenshots — all pulled into one structure.",
    examples: [
      "Academic brief + slides + notes",
      "Voice note + PDF + screenshots",
      "3–5 items across different sources",
      "One academic task in multiple formats",
    ],
    waMessage: "Hi, I want to request a preview first. I have a full set (Tier 3 — $14):",
  },
  {
    level: "Tier 4",
    name: "Complex Case",
    price: "$25",
    tag: "For serious cases",
    desc: "A lot of academic material with unclear direction or structure.",
    examples: [
      "Many sources, unclear instructions",
      "Research-heavy restructuring",
      "Multiple documents across topics",
      "You don't know where to start",
    ],
    waMessage: "Hi, I want to request a preview first. I have a complex case (Tier 4 — $25):",
  },
]

const payments = [
  { name: "Binance Pay", desc: "Crypto · instant · zero fees", icon: "₿" },
  { name: "Payoneer", desc: "Card or bank transfer", icon: "P" },
  { name: "Grey", desc: "USD account · bank transfer", icon: "G" },
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

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#141210] mb-5">
            Pick based on what<br />
            <span className="text-[#22c55e]">you currently have.</span>
          </h1>

          <p className="text-lg text-[#141210] max-w-xl leading-relaxed mb-4">
            Look at what is in your phone right now and pick the tier that matches.
            Not file types. Not complexity scores.
          </p>

          <p className="text-base text-[#7a7469] mt-2">
            Works for assignments, reports, presentations, and project-based academic tasks.
          </p>

          <div className="border-l-4 border-[#22c55e] pl-4 mt-4">
            <p className="text-base text-[#7a7469]">
              A short preview is sent before you pay. You only proceed if it looks right.
            </p>
          </div>
        </div>

        {/* TIERS */}
        <div className="flex flex-col gap-5 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.level}
              className="bg-white border border-[#ddd9d0] p-8 flex flex-col gap-6 hover:border-[#22c55e]/50 transition-colors duration-200"
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
                  <span className="text-6xl font-black tracking-tight text-[#141210] leading-none">
                    {tier.price}
                  </span>
                  <span className="text-xl font-bold text-[#22c55e]">
                    {tier.name}
                  </span>
                </div>

                <p className="text-lg text-[#141210] leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              <div className="border-t border-[#ddd9d0] pt-5">
                <div className="text-sm font-semibold tracking-widest uppercase text-[#7a7469] mb-4">
                  What you might have
                </div>
                <ul className="flex flex-col gap-3">
                  {tier.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-3 text-base text-[#7a7469]">
                      <span className="text-[#22c55e] mt-0.5 shrink-0 font-bold">→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-2">
                <WhatsAppButton
                  label={`Request preview — ${tier.price}`}
                  size="lg"
                  fullWidth
                  customMessage={tier.waMessage}
                />
                <p className="text-sm text-[#7a7469] text-center mt-3">
                  Preview first · pay only if satisfied
                </p>
              </div>
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
                <div className="w-12 h-12 flex items-center justify-center bg-[#f6f3ee] border border-[#ddd9d0] text-base font-bold text-[#141210] shrink-0">
                  {p.icon}
                </div>
                <div>
                  <div className="text-base font-bold text-[#141210]">{p.name}</div>
                  <div className="text-sm text-[#7a7469] mt-1">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#ddd9d0] bg-[#faf9f7] px-8 py-5">
            <p className="text-sm text-[#7a7469]">
              Not sure which to use?{" "}
              <a
                href="https://wa.me/2349036961611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] border-b border-[#22c55e]/30 hover:border-[#22c55e] font-medium transition-colors"
              >
                Message us on WhatsApp →
              </a>
            </p>
          </div>
        </div>

        <p className="text-sm text-[#7a7469] text-center leading-relaxed">
          Not a ghostwriting service — you always write the final work.{" "}
          <a
            href="/disclaimer"
            className="text-[#141210] hover:text-[#22c55e] border-b border-[#ddd9d0] hover:border-[#22c55e]"
          >
            Read disclaimer →
          </a>
        </p>

      </div>
    </main>
  )
}
