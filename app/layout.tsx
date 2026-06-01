import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { config } from "@/lib/config"

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: `${config.brand} — ${config.tagline}`,
    template: `%s — ${config.brand}`,
  },
  description:
    "Turn messy academic material into a clean structured starting draft.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-[#f6f3ee]">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
