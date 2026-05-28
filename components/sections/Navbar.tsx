"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { config } from "@/lib/config"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-200
        ${scrolled
          ? "bg-[rgba(245,242,235,0.96)] backdrop-blur-md border-b border-[var(--border)]"
          : "bg-[var(--paper)]"
        }
      `}
    >
      <div className="container">

        <div className="h-14 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-[1.3rem] tracking-tight"
            style={{ fontFamily: "Instrument Serif" }}
          >
            Struc<span className="text-[var(--accent)]">tura</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">

            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.message)}`}
              className="inline-flex items-center bg-[#25d366] text-white px-5 py-2 text-sm"
            >
              WhatsApp
            </a>

          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-all ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />

            <span
              className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-all ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-all ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>

        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--paper)]">

          <div className="container py-5 flex flex-col gap-5">

            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.message)}`}
              className="inline-flex justify-center bg-[#25d366] text-white px-5 py-3 text-base"
            >
              Start on WhatsApp
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}
