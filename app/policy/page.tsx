"use client"

import { useState } from "react"

const items = [
  {
    title: "Educational support only",
    desc: "Structura provides organization, structure, and clarity support for academic material. Nothing more.",
  },
  {
    title: "No ghostwriting",
    desc: "Structura does not impersonate students or complete final academic submissions on behalf of students.",
  },
  {
    title: "Responsible usage",
    desc: "Students are expected to use the structure provided as guidance for their own writing process.",
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
          <p className="text-base text-[#7a7469] leading-relaxed">{desc}</p>
        </div>
      )}
    </div>
  )
}

export default function PolicyPage() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#22c55e]">
              Policy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141210] mb-4">
            Academic support policy
          </h1>
          <p className="text-lg text-[#7a7469]">
            How Structura operates and what we stand for.
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
