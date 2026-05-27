import { config } from "@/lib/config"

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 border-t border-[#1e1e1e]">
      <div className="max-w-3xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Ready to turn your material into structure?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[#b5b5b5] text-base md:text-lg leading-relaxed">
          Send your notes, voice, PDFs, or screenshots. Get a clear academic framework you can write from.
        </p>

        {/* Micro reassurance */}
        <p className="mt-3 text-sm text-[#7a7a7a]">
          No signup. No forms. Just WhatsApp.
        </p>

        {/* CTA button */}
        <div className="mt-8">
          <a
            href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.message)}`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
          >
            Start on WhatsApp
          </a>
        </div>

        {/* Extra conversion nudge */}
        <div className="mt-6 text-sm text-[#7a7a7a]">
          Need structure help now?
        </div>

      </div>
    </section>
  )
}
