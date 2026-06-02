import WhatsAppButton from "@/components/ui/WhatsAppButton"
import { tiers } from "@/lib/tiers"

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

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Choose your <span className="text-[#22c55e]">workflow level</span>
          </h1>

          <p className="text-lg">
            Send materials → receive structured preview → approve → complete output
          </p>
        </div>

        {/* TIERS */}
        <div className="flex flex-col gap-6 mb-12">

          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white border border-[#ddd9d0] p-8 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-widest uppercase text-[#7a7469]">
                  {tier.name}
                </span>

                {tier.tag && (
                  <span className="text-xs text-[#22c55e] border border-[#22c55e]/30 px-3 py-1">
                    {tier.tag}
                  </span>
                )}
              </div>

              <div className="text-5xl font-black">{tier.price}</div>

              <p>{tier.desc}</p>

              <ul className="text-sm text-[#7a7469] space-y-2">
                {tier.examples.map((e) => (
                  <li key={e}>→ {e}</li>
                ))}
              </ul>

              <WhatsAppButton
                label={`Request preview — ${tier.price}`}
                fullWidth
                customMessage={tier.waMessage}
              />
            </div>
          ))}

        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-sm text-[#7a7469]">
          Structured academic support only — you retain full authorship
        </p>

      </div>
    </main>
  )
}
