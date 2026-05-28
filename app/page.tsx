"use client"

import Hero from "@/components/sections/Hero"
import { useState } from "react"

const items = [
  {
    title: "Voice notes",
    desc: "Recorded explanations, lectures, or ideas converted into structured academic points and flow.",
  },
  {
    title: "PDF files",
    desc: "Lecture slides, textbooks, briefs, or course materials reorganized into a clear framework.",
  },
  {
    title: "Lecture notes",
    desc: "Messy handwritten or digital notes cleaned into readable academic structure.",
  },
  {
    title: "Screenshots",
    desc: "Images from WhatsApp, LMS platforms, websites, or documents interpreted into organized content.",
  },
  {
    title: "Research material",
    desc: "Articles, links, excerpts, journals, or references organized into usable structure.",
  },
  {
    title: "Mixed materials",
    desc: "Different file types sent together — including unclear or incomplete instructions.",
  },
]

const steps = [
  {
    number: "01",
    title: "Send your material",
    desc: "Send voice notes, PDFs, screenshots, lecture notes, links, or mixed materials exactly as they are.",
  },
  {
    number: "02",
    title: "We organize everything",
    desc: "Your material is cleaned, structured, and arranged into a readable academic framework.",
  },
  {
    number: "03",
    title: "Write with clarity",
    desc: "Use the structure as your guide for writing the final work yourself.",
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

        <span className="text-[1.08rem] md:text-[1.15rem] font-medium text-[var(--ink)]">
          {item.title}
        </span>

        <span className="text-[var(--muted)] text-2xl">
          {open ? "−" : "+"}
        </span>

      </button>

      {open && (
        <div className="px-5 pb-5">

          <p className="text-[1rem] text-[var(--muted)] leading-relaxed">
            {item.desc}
          </p>

        </div>
      )}

    </div>
  )
}

export default function Home() {

  const [processOpen, setProcessOpen] = useState(false)

  return (
    <main>

      <Hero />

      {/* INPUTS */}
      <section className="container py-10 border-t border-[var(--border)]">

        <div className="space-y-3">

          {items.map((item) => (
            <AccordionItem key={item.title} item={item} />
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section className="container py-10 border-t border-[var(--border)]">

        <div className="border border-[var(--border)] bg-[var(--white)]">

          <button
            onClick={() => setProcessOpen(!processOpen)}
            className="w-full p-5 flex items-center justify-between text-left"
          >

            <div>

              <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                Process
              </div>

              <h2
                className="text-[1.6rem] md:text-[2rem] leading-[1]"
                style={{ fontFamily: "Instrument Serif" }}
              >
                How it works
              </h2>

            </div>

            <span className="text-3xl text-[var(--muted)]">
              {processOpen ? "−" : "+"}
            </span>

          </button>

          {processOpen && (

            <div className="px-5 pb-5 border-t border-[var(--border)]">

              <div className="space-y-5 py-5">

                {steps.map((step) => (

                  <div
                    key={step.number}
                    className="border border-[var(--border)] p-5"
                  >

                    <div className="flex items-center gap-4 mb-3">

                      <div
                        className="text-[1.5rem] text-[var(--accent)]"
                        style={{ fontFamily: "Instrument Serif" }}
                      >
                        {step.number}
                      </div>

                      <h3 className="text-[1.05rem] font-medium">
                        {step.title}
                      </h3>

                    </div>

                    <p className="text-[1rem] text-[var(--muted)] leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                ))}

              </div>

              <a
                href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#25d366]
                  text-white
                  px-6
                  py-4
                  text-sm
                  mt-2
                "
              >
                Start on WhatsApp
              </a>

            </div>

          )}

        </div>

      </section>

      {/* CTA */}
      <section className="container py-14 border-t border-[var(--border)]">

        <div className="bg-[var(--white)] border border-[var(--border)] p-8 text-center">

          <h2
            className="text-[2.1rem] md:text-[3.4rem] leading-[0.95] tracking-[-0.05em] mb-5"
            style={{ fontFamily: "Instrument Serif" }}
          >
            Need structure help now?
          </h2>

          <p className="text-[1.08rem] text-[var(--muted)] leading-relaxed mb-7 max-w-xl mx-auto">
            One message is enough. Send your material exactly as it is.
          </p>

          <a
            href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
            className="
              inline-flex
              items-center
              justify-center
              bg-[#25d366]
              text-white
              px-8
              py-4
              text-base
            "
          >
            Start on WhatsApp
          </a>

        </div>

      </section>

    </main>
  )
}
