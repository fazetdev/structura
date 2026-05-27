export default function Hero() {
  return (
    <section className="container pt-2 pb-12">

      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-[3rem] leading-[1] font-extrabold tracking-[-0.04em] mb-6 md:text-[5rem]">
          Turn messy study material into a clear structure
        </h1>

        <p className="text-[1.2rem] text-[var(--muted)] mb-6">
          Send academic material in any form. We turn it into a structured framework you can write from.
        </p>

        <a
          href={`https://wa.me/2349036961611?text=${encodeURIComponent(
            "Hi, I need help organizing my academic material."
          )}`}
          className="inline-flex px-6 py-3 bg-[var(--accent)] text-white mb-6"
        >
          Start on WhatsApp
        </a>

        <p className="text-[1rem] text-[var(--muted)]">
          Structured guidance only — not ghostwriting
        </p>

      </div>

    </section>
  )
}
