"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { config } from "@/lib/config"

const mainNav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Samples", href: "/samples" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 border-b transition
      ${scrolled ? "bg-[#0b0b0f]/95 backdrop-blur border-white/10" : "bg-[#0b0b0f]"}`}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-xl font-semibold text-white">
          Qlack
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={`https://wa.me/${config.whatsapp.number}`}
            className="ml-4 bg-[#22c55e] text-black px-4 py-2 text-sm font-medium"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white border border-white/20 px-3 py-1 text-sm"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-[#0b0b0f] z-50 flex flex-col">

          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <div className="text-white">Qlack</div>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col px-6 py-10 gap-6 text-white text-lg">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${config.whatsapp.number}`}
              className="mt-6 bg-[#22c55e] text-black px-4 py-3 text-center font-medium"
            >
              Start on WhatsApp
            </a>
          </div>

        </div>
      )}
    </nav>
  )
}
