import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

export const metadata: Metadata = {
  title: "StrategyPM - Product Strategy Consulting with a Google PM",
  description: "Expert product strategy consulting from a $210k Google PM. Roadmap planning, feature prioritization, and stakeholder alignment for high-growth companies.",
  keywords: "product management, product strategy, Google PM, consulting, roadmap planning, feature prioritization",
  authors: [{ name: "Oliver Newth" }],
  openGraph: {
    title: "StrategyPM - Product Strategy Consulting",
    description: "Expert product strategy from a Google PM with experience at Meta and Microsoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrategyPM - Product Strategy Consulting",
    description: "Expert product strategy from a Google PM",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
