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

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#141210]">
          Proof of structure
        </h1>

        <p className="text-[#7a7367] mt-4 text-lg leading-relaxed">
          See how messy academic input becomes structure.
        </p>
      </div>

      {/* Samples */}
      <div className="max-w-5xl mx-auto px-6 space-y-10">

        {samples.map((sample) => (
          <div
            key={sample.id}
            className="bg-white border border-[#ddd9d0] p-8"
          >

            {/* Title */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#141210]">
                {sample.title}
              </h2>
              <p className="text-[#7a7367] mt-2">
                {sample.description}
              </p>
            </div>

            {/* INPUT MATERIALS */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
                Input
              </div>

              <div className="space-y-4">

                {Object.entries(sample.files).map(([key, value]) => (
                  <div key={key}>
                    {key === "voice" ? (
                      <div className="border border-[#ddd9d0] p-3 bg-[#faf8f4] rounded-md">
                        <div className="text-xs uppercase text-[#7a7367] mb-2">
                          Voice
                        </div>

                        <audio
                          controls
                          preload="metadata"
                          className="w-full h-12 cursor-pointer"
                        >
                          <source src={value} type="audio/mpeg" />
                        </audio>
                      </div>
                    ) : (
                      <a
                        href={value}
                        target="_blank"
                        className="text-[#22c55e] underline text-sm"
                      >
                        Open {key}
                      </a>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* OUTPUT */}
            <div className="border-t border-[#ddd9d0] pt-6">
              <div className="text-xs uppercase tracking-widest text-[#7a7367] mb-3">
                Output
              </div>

              <p className="text-sm text-[#141210] leading-relaxed">
                Structured academic output from raw input.
              </p>

              {sample.files.output && (
                <a
                  href={sample.files.output}
                  target="_blank"
                  className="inline-block mt-4 text-[#22c55e] underline"
                >
                  View output →
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
          Get your structure
        </a>
      </div>

    </main>
  )
}
