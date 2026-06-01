import Link from "next/link"
import { config } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)] mt-20">

      <div className="container py-12">

        {/* BRAND */}
        <div className="mb-10">

          <div
            className="text-[2rem] mb-3 tracking-tight"
            style={{ fontFamily: "Instrument Serif" }}
          >
            Q<span className="text-[var(--accent)]">lack</span>
          </div>

          <p className="text-[1.05rem] text-white/60 max-w-md leading-relaxed">
            Academic structure support for students. We turn messy inputs into clear writing frameworks.
          </p>

        </div>

        {/* CTA */}
        <div className="mb-8">

          <a
            href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
              config.whatsapp.message
            )}`}
            className="
              inline-flex
              items-center
              justify-center
              bg-[#22c55e]
              hover:bg-[#16a34a]
              text-white
              px-6
              py-3
              text-sm
              w-fit
              transition-colors
            "
          >
            Start on WhatsApp
          </a>

        </div>

        {/* LIMITED LINKS */}
        <div className="flex flex-wrap gap-6 text-[0.95rem]">

          <Link href="/faq" className="text-white/60 hover:text-white transition">
            FAQ
          </Link>

          <Link href="/policy" className="text-white/60 hover:text-white transition">
            Policy
          </Link>

          <Link href="/privacy" className="text-white/60 hover:text-white transition">
            Privacy
          </Link>

          <Link href="/disclaimer" className="text-white/60 hover:text-white transition">
            Disclaimer
          </Link>

        </div>

        {/* COPYRIGHT */}
        <div className="text-[0.85rem] text-white/40 pt-6 mt-6 border-t border-white/10">
          © {new Date().getFullYear()} Qlack. All rights reserved.
        </div>

      </div>

    </footer>
  )
}
