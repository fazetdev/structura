"use client"

import Hero from "@/components/sections/Hero"
import { useState } from "react"

const items = [
  {
    title: "Voice notes",
    desc: "Recorded explanations, lectures, or ideas. Converted into structured academic points.",
  },
  {
    title: "PDF files",
    desc: "Lecture slides, textbooks, or briefs. Key ideas extracted and structured clearly.",
  },
  {
    title: "Lecture notes",
    desc: "Handwritten or digital notes reorganized into academic structure.",
  },
  {
    title: "Screenshots",
    desc: "Images from WhatsApp, LMS, or notes interpreted into structured content.",
  },
  {
    title: "Rough ideas",
    desc: "Unclear or incomplete thoughts refined into a structured writing framework.",
  },
]

const steps = [
  {
    title: "Send anything",
    desc: "No format needed. Just send your material as it is.",
  },
  {
    title: "We structure it",
    desc: "We convert messy input into a clear academic framework.",
  },
  {
    title: "You write easily",
    desc: "You complete your work using a structured guide.",
  },
]

function AccordionItem({ item }: any) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[var(--border)] bg-[var(--white)]">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span className="text-[1.05rem] md:text-lg font-medium text-[var(--ink)]">
          {item.title}
        </span>

        <span className="text-[var(--muted)] text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-[1rem] md:text-lg text-[var(--muted)] leading-relaxed">
            {item.desc}
          </p>
        </div>
      )}

    </div>
  )
}

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <Hero />

      {/* WHAT YOU CAN SEND */}
      <section className="container pt-10 pb-12">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          What you can send
        </h2>

        <p className="text-[1.1rem] md:text-xl text-[var(--muted)] mb-7 leading-relaxed">
          Any academic material in any form. We work with messy, incomplete, or mixed inputs and turn them into a structured writing framework.
        </p>

        <div className="space-y-3">
          {items.map((item) => (
            <AccordionItem key={item.title} item={item} />
          ))}
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="container py-12">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          How it works
        </h2>

        <div className="space-y-4">

          {steps.map((step, i) => (
            <div
              key={step.title}
              className="border border-[var(--border)] bg-[var(--white)] p-5"
            >
              <div className="text-sm text-[var(--muted)] mb-1">
                Step {i + 1}
              </div>

              <div className="text-[1.05rem] md:text-lg font-medium mb-1">
                {step.title}
              </div>

              <div className="text-[1rem] md:text-lg text-[var(--muted)] leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="container py-14 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Need structure help now?
        </h2>

        <p className="text-[1.1rem] md:text-xl text-[var(--muted)] mb-6">
          Send your material and get a clear academic framework you can write from.
        </p>

        <a
          href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
          className="inline-flex px-6 py-3 bg-[var(--accent)] text-white"
        >
          Start on WhatsApp
        </a>

      </section>

    </main>
  )
}
