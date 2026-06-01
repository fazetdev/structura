"use client"

import Hero from "@/components/sections/Hero"
import Link from "next/link"
import { useState } from "react"

const items = [
  {
    title: "Voice notes",
    desc: "Recorded explanations, lectures, or ideas converted into structured academic points and flow.",
  },
  {
    title: "Assignment briefs",
    desc: "Your academic task sheet, instructions, or rubric. We turn it into a clear structure you can follow.",
  },
  {
    title: "Lecture notes",
    desc: "Messy handwritten or digital notes cleaned into readable academic structure.",
  },
  {
    title: "PDF files",
    desc: "Lecture slides, textbooks, or course materials reorganized into a structured framework.",
  },
  {
    title: "Screenshots",
    desc: "Images from WhatsApp, LMS platforms, slides, or documents interpreted into organized content.",
  },
  {
    title: "Photos of handwritten notes",
    desc: "Notebook pages or whiteboard images converted into structured academic flow.",
  },
  {
    title: "Links",
    desc: "Google Docs, LMS pages, articles, or YouTube lectures converted into structured notes.",
  },
  {
    title: "Research material",
    desc: "Articles, excerpts, journals, or references organized into usable structure (optional for advanced work).",
  },
  {
    title: "Presentation slides",
    desc: "Slides or presentation outlines structured into clear speaking or writing flow.",
  },
  {
    title: "Project materials",
    desc: "Multi-part academic projects broken into structured sections and planning flow.",
  },
]

function AccordionItem({ item }: { item: typeof items[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#ddd9d0] bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span className="text-lg font-medium text-[#141210]">
          {item.title}
        </span>
        <span className="text-[#7a7469] text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-base text-[#7a7469] leading-relaxed">
            {item.desc}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-[#f6f3ee]">

      <Hero />

      {/* INPUTS */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-t border-[#ddd9d0]">

        <p className="text-sm text-[#7a7469] mb-4">
          Any form of academic material can be turned into a structured writing framework.
        </p>

        <div className="space-y-3">
          {items.map((item) => (
            <AccordionItem key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-t border-[#ddd9d0]">

        <div className="border border-[#ddd9d0] bg-white p-6">

          <div className="text-sm uppercase tracking-widest text-[#7a7469] mb-2">
            Process
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#141210] mb-3">
            How it works
          </h2>

          <p className="text-base text-[#7a7469] mb-5 leading-relaxed">
            View the full step-by-step breakdown of how Qlack converts academic material into structured writing frameworks.
          </p>

          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 text-sm font-medium"
          >
            Open How it works
          </Link>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-14 border-t border-[#ddd9d0]">

        <div className="bg-white border border-[#ddd9d0] p-8 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#141210] mb-5">
            Need structure help now?
          </h2>

          <p className="text-lg text-[#7a7469] leading-relaxed mb-7 max-w-xl mx-auto">
            One message is enough. Send your material exactly as it is.
          </p>

          <a
            href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
            className="inline-flex items-center justify-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 text-base font-medium"
          >
            Start on WhatsApp
          </a>

        </div>

      </section>

    </main>
  )
}
