import { config } from "@/lib/config"

export default function StickyCTA() {
  const waLink = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.message
  )}`

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f0e0c] text-white p-4 flex items-center justify-between md:hidden z-50 border-t border-[#d8d2c4]">

      <div className="text-sm">
        Need structure help?
      </div>

      <a
        href={waLink}
        className="bg-[#25d366] text-white px-4 py-2 text-sm font-medium"
      >
        WhatsApp
      </a>

    </div>
  )
}
