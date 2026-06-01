export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0b0b0f] via-[#121018] to-[#0a0a0a] min-h-screen flex items-center border-b border-[#1f1f1f]">
      <div className="max-w-4xl mx-auto px-6 py-24 w-full">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#22c55e]">
            Qlack Academic Structure Support
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-white mb-8 max-w-3xl">
          Turn messy academic
          <br />
          material into{" "}
          <span className="text-[#22c55e]">structured</span>
          <br />
          <span className="text-[#22c55e]">clarity</span>
        </h1>

        {/* Body */}
        <p className="text-xl text-[#cfcfcf] leading-[1.8] max-w-2xl mb-12 font-normal">
          Send assignments, reports, presentations, lecture notes, PDFs, screenshots, or voice notes. Qlack converts unstructured input into a structured writing framework you can build from.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
          className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-base px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#22c55e]/20"
        >
          Start on WhatsApp
        </a>

        {/* Trust strip */}
        <div className="mt-16 pt-10 border-t border-[#1f1f1f] grid sm:grid-cols-2 gap-5">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#22c55e] text-sm font-bold">✓</span>
            </div>
            <p className="text-[#bdbdbd] text-base leading-relaxed">
              Structured academic guidance only — not ghostwriting or submission writing
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#22c55e] text-sm font-bold">✓</span>
            </div>
            <p className="text-[#bdbdbd] text-base leading-relaxed">
              Works across assignments, reports, presentations, and project work
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
