"use client"

import Link from "next/link"
import { useState } from "react"
import { config } from "@/lib/config"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[var(--paper)] border-b border-[var(--border)]/60">

      <div className="container h-14 flex items-center justify-between">

        <Link href="/" className="text-xl font-semibold tracking-tight">
          Struc<span className="text-[var(--accent)]">tura</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {config.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <WhatsAppButton label="Start" />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <div className="flex flex-col gap-1">
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
            <span className="w-6 h-[2px] bg-black" />
          </div>
        </button>

      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--paper)]">
          <div className="container py-4 flex flex-col gap-4">
            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base"
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton label="Start on WhatsApp" />
          </div>
        </div>
      )}

    </nav>
  )
}
