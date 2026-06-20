"use client"

import { useState } from "react"

const items = [
  {
    title: "Service purpose",
    desc: "Qlack provides academic structure support only. It converts unstructured materials into a clear writing framework for students to use in their own work.",
  },
  {
    title: "No ghostwriting",
    desc: "Qlack does not write full assignments, essays, or reports. It does not replace student work or submit content on behalf of users.",
  },
  {
    title: "User responsibility",
    desc: "Students are fully responsible for writing, editing, and submitting their own academic work based on the structure provided.",
  },
  {
    title: "Delivery timeframe",
    desc: "Preview evaluation is typically delivered within 4 hours. Full structured framework is delivered within 24 hours after confirmation.",
  },
  {
    title: "Revisions",
    desc: "One free revision is allowed within 48 hours if the structure does not match the agreed scope. Revisions only cover restructuring, not content expansion.",
  },
  {
    title: "Refund policy",
    desc: "Refunds are only issued if delivery fails within the stated timeframe. Because a preview is provided before full processing, refunds are otherwise not applicable.",
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
            How Qlack operates, delivers, and supports academic structuring services.
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
