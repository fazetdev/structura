import WhatsAppButton from "@/components/ui/WhatsAppButton"
import { tiers } from "@/lib/tiers"

export default function PricingPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24 text-[#141210]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">

          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              Pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Choose your structure level
          </h1>

          <p className="text-lg text-[#7a7469]">
            Send your material. Receive a structured academic framework.
          </p>
        </div>

        {/* Quick help */}
        <div className="bg-white border border-[#ddd9d0] p-6 mb-10">
          <h2 className="text-lg font-semibold mb-2">
            Not sure?
          </h2>

          <p className="text-sm text-[#7a7469] mb-4">
            Send your material first. We will tell you the correct option.
          </p>

          <WhatsAppButton
            label="Ask on WhatsApp"
            size="md"
          />
        </div>

        {/* Tiers */}
        <div className="flex flex-col gap-6 mb-10">

          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white border border-[#ddd9d0] p-8 flex flex-col gap-5"
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

              <div className="text-5xl font-black">
                {tier.price}
              </div>

              <p className="text-[#7a7469]">
                {tier.desc}
              </p>

              <ul className="text-sm text-[#7a7469] space-y-2">
                {tier.examples.map((e) => (
                  <li key={e}>→ {e}</li>
                ))}
              </ul>

              <WhatsAppButton
                label="Request this structure"
                size="lg"
                customMessage={tier.waMessage}
              />

            </div>
          ))}

        </div>

        {/* Final CTA */}
        <div className="bg-white border border-[#ddd9d0] p-8 text-center">

          <h2 className="text-2xl font-bold mb-3">
            Still unsure?
          </h2>

          <p className="text-[#7a7469] mb-5">
            Send your material. We will guide the structure level.
          </p>

          <WhatsAppButton
            label="Start on WhatsApp"
            size="lg"
          />

        </div>

      </div>
    </main>
  )
}
