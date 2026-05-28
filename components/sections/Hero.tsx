export default function Hero() {
  return (
    <section className="container pt-3 pb-12">

      <div className="max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
          Academic Structure Support
        </div>

        {/* Main headline */}
        <h1
          className="
            text-[3rem]
            md:text-[5.4rem]
            leading-[0.95]
            tracking-[-0.05em]
            mb-6
          "
          style={{ fontFamily: "Instrument Serif" }}
        >
          Turn messy study material into structured clarity
        </h1>

        {/* Supporting text */}
        <p className="text-[1.15rem] md:text-[1.35rem] text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-7">
          Send academic material in any form. We turn incomplete, mixed, or messy inputs into a structured framework you can actually write from.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-5">
          <a
            href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
            className="
              inline-flex
              items-center
              justify-center
              bg-[#25d366]
              text-white
              px-7
              py-3.5
              text-base
            "
          >
            Start on WhatsApp
          </a>
        </div>

        {/* Trust text */}
        <p className="text-[0.98rem] text-[var(--muted)]">
          Structured guidance only — not ghostwriting
        </p>

      </div>

    </section>
  )
}
