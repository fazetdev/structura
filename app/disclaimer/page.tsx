"use client"

import { useState } from "react"

const items = [
  {
    title: "Service purpose",
    desc: "Qlack provides academic organization and structure support only. It helps transform unstructured input into a clear framework for the student's own writing.",
  },
  {
    title: "No academic submission guarantee",
    desc: "The service does not produce final academic submissions and does not guarantee grades, outcomes, or institutional approval.",
  },
  {
    title: "User responsibility",
    desc: "Users remain fully responsible for writing, editing, and submitting their own academic work based on the structure provided.",
  },
]

function Item({ title, desc }: { title: string; desc: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#ddd9d0] bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-[#141210]">{title}</span>
        <span className="text-2xl text-[#7a7469]">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 pb-6">
          <p className="text-base text-[#7a7469] leading-relaxed">
            {desc}
          </p>
        </div>
      )}
    </div>
  )
}

export default function DisclaimerPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              Disclaimer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141210] mb-4">
            Important notice
          </h1>

          <p className="text-lg text-[#7a7469]">
            What Qlack is — and what it is not.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <Item key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>

      </div>
    </main>
  )
}
