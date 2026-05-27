export const config = {
  brand: "Structura",
  tagline: "Academic Structure Service",
  whatsapp: {
    number: "2349036961611",
    message: "Hi, I need help organizing my academic material. I'm sending:",
  },
  nav: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Samples", href: "/samples" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
  footer: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Samples", href: "/samples" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy", href: "/privacy" },
    { label: "Policy", href: "/policy" },
  ],
}

export const waLink = () =>
  `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.message)}`
