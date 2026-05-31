import { config } from "@/lib/config"

type Props = {
  label?: string
  fullWidth?: boolean
  size?: "sm" | "md" | "lg"
  customMessage?: string
}

export default function WhatsAppButton({
  label = "Start on WhatsApp",
  fullWidth = false,
  size = "md",
  customMessage,
}: Props) {
  const message =
    customMessage || config.whatsapp.message

  const href = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    message
  )}`

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        inline-flex items-center justify-center
        rounded-xl
        bg-[#25d366]
        text-black
        font-medium
        hover:opacity-90
        transition
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {label}
    </a>
  )
}
