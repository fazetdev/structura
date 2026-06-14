import Link from "next/link"
import { config } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] text-white mt-20 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Brand */}
        <div className="mb-10">
          <div className="text-2xl font-semibold tracking-tight mb-3">
            Q<span className="text-[#22c55e]">lack</span>
          </div>

          <p className="text-white/60 max-w-md leading-relaxed">
            {config.tagline}
          </p>
        </div>

        {/* CTA */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
              config.whatsapp.message
            )}`}
            className="inline-flex items-center justify-center bg-[#22c55e] text-white px-6 py-3 text-sm hover:bg-[#16a34a]"
          >
            Start on WhatsApp
          </a>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center border border-white/20 text-white px-6 py-3 text-sm hover:bg-white hover:text-black"
          >
            View Pricing
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-5 text-sm text-white/60">
          {config.footer.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/40 pt-8 mt-8 border-t border-white/10">
          © {new Date().getFullYear()} Qlack
        </div>

      </div>
    </footer>
  )
}
