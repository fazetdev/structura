export default function PricingPage() {
  const plans = [
    {
      title: "Level 1",
      price: "$4",
      desc: "Simple academic structure support.",
    },
    {
      title: "Level 2",
      price: "$7",
      desc: "Mixed materials and medium complexity.",
    },
    {
      title: "Level 3",
      price: "$10",
      desc: "Heavy restructuring and large inputs.",
    },
    {
      title: "Level 4",
      price: "$20",
      desc: "Complex academic situations and research-heavy support.",
    },
  ]

  return (
    <main className="container py-12">

      <div className="max-w-3xl mb-10">

        <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
          Pricing
        </div>

        <h1
          className="text-[2.8rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.05em] mb-6"
          style={{ fontFamily: "Instrument Serif" }}
        >
          Structure pricing
        </h1>

        <p className="text-[1.15rem] md:text-[1.3rem] text-[var(--muted)] leading-relaxed">
          Pricing depends on complexity and amount of structure work required.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {plans.map((plan) => (
          <div
            key={plan.title}
            className="border border-[var(--border)] bg-[var(--white)] p-7"
          >

            <div className="text-sm uppercase tracking-[0.15em] text-[var(--muted)] mb-3">
              {plan.title}
            </div>

            <div
              className="text-[3.2rem] mb-4"
              style={{ fontFamily: "Instrument Serif" }}
            >
              {plan.price}
            </div>

            <p className="text-[1.08rem] text-[var(--muted)] leading-relaxed">
              {plan.desc}
            </p>

          </div>
        ))}

      </div>

    </main>
  )
}
