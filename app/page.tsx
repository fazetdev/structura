"use client"

import Hero from "@/components/sections/Hero"
import Link from "next/link"
import OutputPreview from "@/components/sections/OutputPreview"

const items = [
  {
    title: "Voice notes",
    desc: "Lecture recordings or spoken explanations turned into structured writing framework.",
  },
  {
    title: "Assignment briefs",
    desc: "Task sheets and rubrics converted into structured academic direction.",
  },
  {
    title: "Lecture notes",
    desc: "Messy notes organized into clear writing flow.",
  },
  {
    title: "PDF files",
    desc: "Slides and textbooks converted into structured framework.",
  },
  {
    title: "Screenshots",
    desc: "LMS or WhatsApp content turned into structured guidance.",
  },
  {
    title: "Handwritten notes",
    desc: "Notebook content converted into academic structure.",
  },
  {
    title: "Research material",
    desc: "Sources organized into writing direction.",
  },
  {
    title: "Project materials",
    desc: "Multi-part content broken into structured sections.",
  },
]

function AccordionItem({ item }: { item: typeof items[0] }) {
  return (
    <div className="border border-[#ddd9d0] bg-white">
      <details className="group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-5">
          <span className="text-lg font-medium text-[#141210]">
            {item.title}
          </span>
          <span className="text-[#7a7367] text-2xl group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <div className="px-5 pb-5">
          <p className="text-base text-[#7a7367] leading-relaxed">
            {item.desc}
          </p>
        </div>
      </details>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-[#f6f3ee]">

      {/* HERO */}
      <Hero />

      {/* INPUTS */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-t border-[#ddd9d0]">

        <p className="text-sm text-[#7a7367] mb-2">
          What you can send
        </p>

        <p className="text-lg font-medium text-[#141210] mb-6">
          Any academic material in any format
        </p>

        <div className="space-y-3">
          {items.map((item) => (
            <AccordionItem key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* OUTPUT PROOF (MOVED HERE - KEY FIX) */}
      <OutputPreview />

      {/* PROCESS */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-t border-[#ddd9d0]">

        <div className="border border-[#ddd9d0] bg-white p-6">

          <div className="text-sm uppercase tracking-widest text-[#7a7367] mb-2">
            Process
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#141210] mb-3">
            How it works
          </h2>

          <p className="text-base text-[#7a7367] mb-5 leading-relaxed">
            See how Qlack turns academic material into structured writing framework.
          </p>

          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 text-sm font-medium"
          >
            Open How it works
          </Link>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 py-14 border-t border-[#ddd9d0]">

        <div className="bg-white border border-[#ddd9d0] p-8 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#141210] mb-5">
            Need structure help now?
          </h2>

          <p className="text-lg text-[#7a7367] leading-relaxed mb-7 max-w-xl mx-auto">
            Send your material. Get a structured writing framework in return.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/2349036961611?text=Hi%20Qlack%2C%0A%0AI%20need%20structured%20help%20with%20my%20academic%20work."
              className="inline-flex items-center justify-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 text-base font-medium"
            >
              Get Structure on WhatsApp
            </a>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-[#22c55e] text-[#22c55e] px-8 py-4 text-base font-medium hover:bg-[#22c55e] hover:text-white transition"
            >
              View Pricing
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}
