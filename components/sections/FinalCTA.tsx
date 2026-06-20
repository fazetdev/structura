import { config } from "@/lib/config"

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 border-t border-[#ddd9d0] bg-[#f6f3ee]">
      <div className="max-w-3xl mx-auto text-center">

        {/* PAIN RE-TRIGGER */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#141210]">
          Still stuck starting your assignment?
        </h2>

        {/* VALUE REINFORCEMENT */}
        <p className="mt-4 text-[#7a7367] text-base md:text-lg leading-relaxed">
          Send your notes, PDFs, screenshots, or voice notes.
          We turn them into a structured writing framework you can actually start from.
        </p>

        {/* RISK REDUCTION */}
        <p className="mt-3 text-sm text-[#7a7367]">
          No signup. No forms. No full essay writing. You remain in control of your work.
        </p>

        {/* URGENCY */}
        <p className="mt-5 text-sm text-[#141210] font-medium">
          Get your structure in minutes — not hours of confusion.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-8">
          <a
            href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
              config.whatsapp.message
            )}`}
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#22c55e] text-white font-medium hover:bg-[#16a34a] transition"
          >
            Get Structure on WhatsApp
          </a>
        </div>

        {/* FINAL TRUST LINE */}
        <div className="mt-6 text-sm text-[#7a7367] leading-relaxed">
          Built for students who know their topic but cannot organize their thoughts into writing.
        </div>

      </div>
    </section>
  )
}
