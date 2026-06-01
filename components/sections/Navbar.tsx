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
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-200
      ${scrolled ? "bg-[#141210]/95 backdrop-blur border-white/10" : "bg-[#141210]"}`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* BRAND */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
          style={{ fontFamily: "Instrument Serif" }}
        >
          <span className="text-white">Q</span>
          <span className="text-white/80">la</span>
          <span className="text-[#c2410c]">ck</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* MOBILE OPEN */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-sm border border-white/20 px-3 py-1"
        >
          Menu
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-[#141210] z-50 flex flex-col">

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <div className="text-white/70">Menu</div>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col px-6 py-10 gap-6 text-white/80 text-lg">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* FOOTER STRIP */}
          <div className="mt-auto border-t border-white/10 px-6 py-6 text-sm text-white/40">
            Qlack — Academic structure support
          </div>

        </div>
      )}
    </nav>
  )
}
