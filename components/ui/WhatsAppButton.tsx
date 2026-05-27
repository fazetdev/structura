import { waLink } from "@/lib/config"

export default function WhatsAppButton({
  label = "Start on WhatsApp",
  fullWidth = false
}: {
  label?: string
  fullWidth?: boolean
}) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-xl
        bg-[#25d366] text-black font-medium
        hover:opacity-90 transition
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {label}
    </a>
  )
}
