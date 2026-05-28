import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)] mt-20">

      <div className="container py-12">

        {/* BRAND */}
        <div className="mb-10">

          <div
            className="text-[2rem] mb-3"
            style={{ fontFamily: "Instrument Serif" }}
          >
            Struc<span className="text-[var(--accent)]">tura</span>
          </div>

          <p className="text-[1.05rem] text-white/60 max-w-md leading-relaxed">
            Academic structure support for students. We turn messy inputs into clear writing frameworks.
          </p>

        </div>

        {/* CORE ACTION */}
        <div className="flex flex-col gap-6">

          <a
            href="https://wa.me/2349036961611?text=Hi%2C%20I%20need%20help%20organizing%20my%20academic%20material."
            className="
              inline-flex
              items-center
              justify-center
              bg-[#25d366]
              text-white
              px-6
              py-3
              text-sm
              w-fit
            "
          >
            Start on WhatsApp
          </a>

          {/* ESSENTIAL LINKS ONLY */}
          <div className="flex flex-wrap gap-6 text-[0.95rem]">

            <Link
              href="/faq"
              className="text-white/60 hover:text-white transition"
            >
              FAQ
            </Link>

            <Link
              href="/policy"
              className="text-white/60 hover:text-white transition"
            >
              Policy
            </Link>

            <Link
              href="/disclaimer"
              className="text-white/60 hover:text-white transition"
            >
              Disclaimer
            </Link>

          </div>

          {/* COPYRIGHT */}
          <div className="text-[0.85rem] text-white/40 pt-2 border-t border-white/10">
            © {new Date().getFullYear()} Structura. All rights reserved.
          </div>

        </div>

      </div>

    </footer>
  )
}
