import { config } from "@/lib/config"

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 border-t border-[#1e1e1e]">
      <div className="max-w-3xl mx-auto text-center">

        {/* HEADLINE (more action-driven) */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Turn your material into a clear writing structure
        </h2>

        {/* OUTPUT REINFORCEMENT */}
        <p className="mt-4 text-[#b5b5b5] text-base md:text-lg leading-relaxed">
          From notes, PDFs, screenshots, or voice notes → to structured academic framework.
        </p>

        {/* RISK REDUCTION */}
        <p className="mt-3 text-sm text-[#7a7a7a]">
          No signup. No forms. No essay writing. You stay in control of your work.
        </p>

        {/* URGENCY / INTENT LAYER */}
        <p className="mt-4 text-sm text-[#22c55e] font-medium">
          Get clarity before you start writing.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-8">
          <a
            href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
              config.whatsapp.message
            )}`}
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
          >
            Get Structure on WhatsApp
          </a>
        </div>

        {/* FINAL TRUST LINE */}
        <div className="mt-6 text-sm text-[#7a7a7a]">
          Built for students who understand their topic but cannot start writing.
        </div>

      </div>
    </section>
  )
}
