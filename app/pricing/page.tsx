import { config } from "@/lib/config"

export default function PricingPage() {
  return (
    <div className="container mt-20">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl">
          Structure Pricing
        </h1>

        <p className="text-[#7a7367] max-w-2xl mx-auto mt-4">
          One academic task → one structured writing framework.
          Pricing is based on complexity, not file type.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Level 1 */}
        <div className="bg-[var(--white)] border border-[#d8d2c4] p-6">
          <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-2">
            Level 1 — Simple Structure
          </div>

          <div className="text-4xl font-serif mb-2">$4</div>

          <p className="text-sm text-[#7a7367] mb-4">
            For clear topics with light input.
          </p>

          <ul className="text-sm text-[#0f0e0c] space-y-2">
            <li>→ Basic outline creation</li>
            <li>→ Single academic idea</li>
            <li>→ Fast structuring</li>
          </ul>
        </div>

        {/* Level 2 */}
        <div className="bg-[var(--white)] border border-[#d8d2c4] p-6">
          <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-2">
            Level 2 — Standard Structure
          </div>

          <div className="text-4xl font-serif mb-2">$7</div>

          <p className="text-sm text-[#7a7367] mb-4">
            For mixed materials in one assignment.
          </p>

          <ul className="text-sm space-y-2">
            <li>→ PDFs + voice notes + screenshots</li>
            <li>→ Full structure mapping</li>
            <li>→ Organized academic flow</li>
          </ul>
        </div>

        {/* Level 3 */}
        <div className="bg-[var(--white)] border border-[#d8d2c4] p-6">
          <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-2">
            Level 3 — Heavy Structure
          </div>

          <div className="text-4xl font-serif mb-2">$10</div>

          <p className="text-sm text-[#7a7367] mb-4">
            For large or messy academic input.
          </p>

          <ul className="text-sm space-y-2">
            <li>→ Long PDFs & voice notes</li>
            <li>→ High restructuring load</li>
            <li>→ Deep clarity building</li>
          </ul>
        </div>

      </div>

      {/* Level 4 */}
      <div className="mt-10 border border-[#d8d2c4] bg-[var(--white)] p-8">
        <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-2">
          Level 4 — System Structure
        </div>

        <div className="text-4xl font-serif mb-3">$20</div>

        <p className="text-sm text-[#7a7367] mb-4 max-w-2xl">
          For complex academic situations with unclear or multi-source inputs.
        </p>

        <ul className="text-sm space-y-2">
          <li>→ Multiple documents or unclear direction</li>
          <li>→ Research-heavy restructuring</li>
          <li>→ Full academic framework creation</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
            config.whatsapp.message
          )}`}
          className="btn"
        >
          Send Material on WhatsApp
        </a>

        <p className="text-xs text-[#7a7367] mt-4">
          One message is enough — send everything as it is.
        </p>
      </div>

    </div>
  )
}
