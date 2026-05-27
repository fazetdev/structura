import Link from "next/link"
import { config, waLink } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0f0f10] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-lg font-semibold">{config.brand}</h3>
            <p className="mt-3 text-[#b5b5b5] text-sm max-w-md">
              Academic structure support for students. You provide material, we convert it into structured clarity.
            </p>

            <a
              href={waLink()}
              className="inline-block mt-5 text-sm text-[#25d366]"
            >
              Send on WhatsApp →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm text-[#b5b5b5]">
            <div>
              <div className="text-white mb-3">Service</div>
              {config.nav.map((i) => (
                <Link key={i.href} href={i.href} className="block mb-2 hover:text-white">
                  {i.label}
                </Link>
              ))}
            </div>

            <div>
              <div className="text-white mb-3">Legal</div>
              {config.footer.map((i) => (
                <Link key={i.href} href={i.href} className="block mb-2 hover:text-white">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 text-xs text-[#666]">
          © {new Date().getFullYear()} {config.brand}
        </div>

      </div>
    </footer>
  )
}
