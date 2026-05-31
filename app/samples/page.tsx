"use client"

import { useEffect, useState } from "react"

type Sample = {
  id: string
  title: string
  description: string
  files: Record<string, string>
}

export default function SamplesPage() {
  const [samples, setSamples] = useState<Sample[]>([])

  useEffect(() => {
    fetch("/samples/index.json")
      .then((res) => res.json())
      .then((data) => setSamples(data))
  }, [])

  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#141210]">
          Sample Conversions
        </h1>
        <p className="text-[#7a7367] mt-4 text-lg leading-relaxed">
          Real examples of messy academic input transformed into structured frameworks.
        </p>
      </div>

      {/* SAMPLES */}
      <div className="max-w-5xl mx-auto px-6 space-y-10">

        {samples.map((sample) => (
          <div
            key={sample.id}
            className="bg-white border border-[#ddd9d0] p-8"
          >

            {/* TITLE */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#141210]">
                {sample.title}
              </h2>
              <p className="text-[#7a7367] mt-2">
                {sample.description}
              </p>
            </div>

            {/* INPUT SECTION */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-4">
                Input Materials
              </div>

              <div className="space-y-4">

                {/* VOICE (collapsed by default) */}
                {sample.files.voice && (
                  <details className="border border-[#ddd9d0] p-4">
                    <summary className="cursor-pointer font-medium text-[#141210]">
                      Voice Note (click to play)
                    </summary>

                    <div className="mt-3">
                      <audio
                        controls
                        preload="none"
                        className="w-full h-14 cursor-pointer"
                      >
                        <source src={sample.files.voice} type="audio/mpeg" />
                      </audio>
                    </div>
                  </details>
                )}

                {/* NOTES (collapsed by default) */}
                {sample.files.notes && (
                  <details className="border border-[#ddd9d0] p-4">
                    <summary className="cursor-pointer font-medium text-[#141210]">
                      Notes / Screenshot
                    </summary>

                    <img
                      src={sample.files.notes}
                      alt="Notes"
                      className="mt-3 w-full max-h-[420px] object-contain"
                    />
                  </details>
                )}

                {/* BRIEF */}
                {sample.files.brief && (
                  <details className="border border-[#ddd9d0] p-4">
                    <summary className="cursor-pointer font-medium text-[#141210]">
                      Assignment Brief
                    </summary>

                    <a
                      href={sample.files.brief}
                      target="_blank"
                      className="text-green-600 underline block mt-3"
                    >
                      Open Document
                    </a>
                  </details>
                )}

              </div>
            </div>

            {/* OUTPUT */}
            <div className="border-t border-[#ddd9d0] pt-6">
              <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
                Output Structure
              </div>

              <p className="text-sm text-[#141210] leading-relaxed">
                Structured academic framework generated from raw input materials.
                The system extracts logic, removes ambiguity, and rebuilds a writing-ready structure.
              </p>

              {sample.files.output && (
                <a
                  href={sample.files.output}
                  target="_blank"
                  className="inline-block mt-4 text-green-600 underline"
                >
                  View Full Output →
                </a>
              )}
            </div>

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-16 px-6">
        <a
          href="https://wa.me/2349036961611"
          className="inline-flex bg-[#22c55e] text-white px-8 py-4 font-medium"
        >
          Send Your Material
        </a>
      </div>

    </main>
  )
}
