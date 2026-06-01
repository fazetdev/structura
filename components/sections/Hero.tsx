export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0b0b0f] via-[#121018] to-[#0a0a0a] min-h-screen flex items-center border-b border-[#1f1f1f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#22c55e]">
            Qlarc Academic Structure Support
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-8 max-w-4xl break-words">
          Turn messy academic material into{" "}
          <span className="text-[#22c55e]">structured clarity</span>
        </h1>

        {/* Body */}
        <p className="text-lg md:text-xl text-[#cfcfcf] leading-[1.8] max-w-3xl mb-12 font-normal">
          Send assignments, reports, presentations, lecture notes, PDFs,
          screenshots, or voice notes. Qlarc converts unstructured input into
          a structured writing framework you can build from.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
          className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-base px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#22c55e]/20"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.512 5.831L.057 23.804a.5.5 0 00.61.61l6.055-1.435A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.659-.5-5.191-1.376l-.371-.214-3.85.912.934-3.768-.234-.386A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
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
