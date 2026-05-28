export default function FAQPage() {
  const faqs = [
    {
      q: "What does Structura do?",
      a: "Structura helps students organize messy academic material into a structured framework they can write from.",
    },
    {
      q: "What can I send?",
      a: "Voice notes, screenshots, PDFs, lecture notes, links, research material, rough ideas, or mixed files.",
    },
    {
      q: "Do you write assignments for students?",
      a: "No. Structura provides structure support and organization guidance only — not ghostwriting.",
    },
    {
      q: "Can I send multiple files together?",
      a: "Yes. Mixed and incomplete materials are accepted.",
    },
    {
      q: "How do I start?",
      a: "Simply send your material through WhatsApp and explain what you need help organizing.",
    },
  ]

  return (
    <main className="container py-12">

      <div className="max-w-3xl mx-auto">

        <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
          FAQ
        </div>

        <h1
          className="text-[2.8rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.05em] mb-6"
          style={{ fontFamily: "Instrument Serif" }}
        >
          Frequently asked questions
        </h1>

        <p className="text-[1.15rem] md:text-[1.3rem] text-[var(--muted)] leading-relaxed mb-10">
          Clear answers about how Structura works.
        </p>

        <div className="space-y-4">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border border-[var(--border)] bg-[var(--white)] p-6"
            >

              <h2 className="text-[1.15rem] md:text-[1.3rem] font-medium mb-3 text-[var(--ink)]">
                {faq.q}
              </h2>

              <p className="text-[1.05rem] md:text-[1.12rem] text-[var(--muted)] leading-relaxed">
                {faq.a}
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}
