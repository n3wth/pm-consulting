import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PM Consulting & Product Strategy Advice | Google PM Expert",
  description: "Strategic product management consulting from a $210k Google PM with 10+ years experience. Expert help with product roadmaps, feature prioritization, stakeholder alignment, and tech consulting for high-growth startups.",
  keywords: "PM consulting, product management consultant, product strategy advisor, strategic planning, tech consulting, product roadmap, feature prioritization, Google PM",
  authors: [{ name: "Oliver Newth" }],
  creator: "Oliver Newth",
  metadataBase: new URL("https://pm-consulting-one.vercel.app"),
  openGraph: {
    title: "Expert PM Consulting & Product Strategy | Google PM",
    description: "Get strategic product management advice from a Google PM. Specializing in product roadmaps, feature prioritization, and stakeholder alignment for B2B SaaS and tech startups.",
    type: "website",
    url: "https://pm-consulting-one.vercel.app",
    siteName: "StrategyPM",
    images: [
      {
        url: "https://pm-consulting-one.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StrategyPM - Product Strategy Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert PM Consulting & Product Strategy | Google PM",
    description: "Strategic product management advice from a $210k Google PM with Meta & Microsoft experience.",
    creator: "@newth_ai",
    images: ["https://pm-consulting-one.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://pm-consulting-one.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "StrategyPM",
    description: "Product management consulting and strategic planning services",
    url: "https://pm-consulting-one.vercel.app",
    telephone: "+1-XXX-XXX-XXXX",
    email: "contact@strategypm.com",
    priceRange: "$300/hr",
    areaServed: {
      "@type": "Country",
      name: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/oliver-newth",
      "https://twitter.com/newth_ai",
    ],
    founder: {
      "@type": "Person",
      name: "Oliver Newth",
      jobTitle: "Product Strategy Consultant",
      worksFor: {
        "@type": "Organization",
        name: "Google",
      },
    },
    offers: {
      "@type": "Offer",
      name: "Product Strategy Consulting",
      price: "300",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
