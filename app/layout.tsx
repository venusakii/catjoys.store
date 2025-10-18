import type React from "react"
import type { Metadata } from "next"
import { Baloo_2, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CatJoys - Joy for Your Cat, Comfort for Your Home",
  description:
    "Premium cat toys, scratching posts, and interactive play systems. Natural materials, safe for claws, tested by cats.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${baloo2.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
