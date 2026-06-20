import WhatsAppButton from "@/components/ui/WhatsAppButton"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0b0b0f] via-[#121018] to-[#0a0a0a] min-h-screen flex items-center border-b border-[#1f1f1f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#22c55e]">
            Academic structure system for students
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-8 max-w-4xl break-words">
          Can’t start your assignment?
          {" "}
          <span className="text-[#22c55e]">Get structured clarity</span>
        </h1>

        {/* Body */}
        <p className="text-lg md:text-xl text-[#cfcfcf] leading-[1.8] max-w-3xl mb-6 font-normal">
          Send assignments, notes, PDFs, screenshots, or voice notes.
          We convert them into a structured writing framework — not a finished essay.
        </p>

        {/* OUTPUT VISUALIZATION (KEY FIX) */}
        <p className="text-sm text-[#9ca3af] max-w-3xl mb-10 leading-relaxed">
          You receive a clear structure with sections, flow, and writing direction from your material.
          <br />
          Example output: Introduction → Key points → Section breakdown → What to write under each section
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

          <WhatsAppButton
            label="Get Structure on WhatsApp"
            size="lg"
          />

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center border border-[#22c55e] text-[#22c55e] font-semibold text-base px-8 py-4 transition hover:bg-[#22c55e] hover:text-white"
          >
            View Pricing
          </Link>

        </div>

        {/* TRUST STRIP */}
        <div className="mt-16 pt-10 border-t border-[#1f1f1f] grid sm:grid-cols-3 gap-5">

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#22c55e] text-sm font-bold">✓</span>
            </div>
            <p className="text-[#bdbdbd] text-base leading-relaxed">
              Not a full assignment service
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#22c55e] text-sm font-bold">✓</span>
            </div>
            <p className="text-[#bdbdbd] text-base leading-relaxed">
              You remain the writer of your work
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#22c55e] text-sm font-bold">✓</span>
            </div>
            <p className="text-[#bdbdbd] text-base leading-relaxed">
              Built for students with scattered academic materials
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
