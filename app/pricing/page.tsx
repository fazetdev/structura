import WhatsAppButton from "@/components/ui/WhatsAppButton"
import { tiers } from "@/lib/tiers"

export default function PricingPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24 text-[#141210]">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              Pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Choose your <span className="text-[#22c55e]">workflow level</span>
          </h1>

          <p className="text-lg text-[#7a7469]">
            Send materials → receive structured preview → approve → complete output
          </p>
        </div>

        {/* DECISION HELPER */}
        <div className="bg-white border border-[#ddd9d0] p-6 mb-10">
          <h2 className="text-lg font-semibold mb-2">
            Not sure what to choose?
          </h2>

          <p className="text-sm text-[#7a7469] mb-4">
            Just send your material. We will tell you the correct structure level before you pay.
          </p>

          <WhatsAppButton
            label="Get recommendation on WhatsApp"
            size="md"
          />
        </div>

        {/* TIERS */}
        <div className="flex flex-col gap-6 mb-10">

          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white border border-[#ddd9d0] p-8 flex flex-col gap-5"
            >

              {/* HEADER ROW */}
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

              {/* PRICE */}
              <div className="text-5xl font-black text-[#141210]">
                {tier.price}
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#7a7469]">
                {tier.desc}
              </p>

              {/* EXAMPLES */}
              <ul className="text-sm text-[#7a7469] space-y-2">
                {tier.examples.map((e) => (
                  <li key={e}>→ {e}</li>
                ))}
              </ul>

              {/* CTA */}
              <WhatsAppButton
                label={`Request preview — ${tier.price}`}
                fullWidth
                customMessage={tier.waMessage}
              />

            </div>
          ))}

        </div>

        {/* GLOBAL CTA */}
        <div className="bg-white border border-[#ddd9d0] p-8 text-center mb-10">

          <h2 className="text-2xl font-bold mb-3">
            Still unsure?
          </h2>

          <p className="text-[#7a7469] mb-5">
            Send your material and we will recommend the right structure level before you choose.
          </p>

          <WhatsAppButton
            label="Start on WhatsApp"
            size="lg"
          />

        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-sm text-[#7a7469]">
          Structured academic support only — you retain full authorship
        </p>

      </div>
    </main>
  )
}
