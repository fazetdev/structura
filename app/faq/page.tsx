"use client"

import { useState } from "react"

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
  {
    q: "Do I pay before or after the preview?",
    a: "After. A short structured preview is sent to you first. You only pay if you are satisfied with what you see.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Binance Pay, Payoneer, and Grey. Not sure which to use? Message us on WhatsApp and we will guide you.",
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#ddd9d0] bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-[#141210]">{q}</span>
        <span className="text-2xl text-[#7a7469] shrink-0 ml-4">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-base text-[#7a7469] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              FAQ
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141210] mb-4">
            Frequently asked questions
          </h1>
          <p className="text-lg text-[#7a7469]">
            Clear answers about how Structura works.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Item key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </main>
  )
}
