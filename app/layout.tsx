import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import ExitIntentPopup from "@/components/ExitIntentPopup"
import "./globals.css"

export const metadata: Metadata = {
  title: "Product Strategy Consulting from a $210k Google PM | StrategyPM",
  description: "Ship products that matter. Expert product strategy, roadmap planning, and stakeholder alignment from a Google PM with 10+ years at Google, Meta, and Microsoft.",
  keywords: "product strategy consulting, product management, roadmap planning, feature prioritization, stakeholder alignment, Google PM, product strategy, PM consulting",
  authors: [{ name: "Oliver Newth" }],
  creator: "Oliver Newth",
  metadataBase: new URL("https://pm-consulting-one.vercel.app"),
  openGraph: {
    title: "Product Strategy Consulting from a $210k Google PM | StrategyPM",
    description: "Ship products that matter. Expert product strategy, roadmap planning, and stakeholder alignment from a Google PM with 10+ years at Google, Meta, and Microsoft.",
    type: "website",
    url: "https://pm-consulting-one.vercel.app",
    siteName: "StrategyPM",
    locale: "en_US",
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
    title: "Product Strategy Consulting from a $210k Google PM",
    description: "Expert product strategy, roadmap planning, and stakeholder alignment. 10+ years at Google, Meta, Microsoft.",
    creator: "@newth",
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
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ProfessionalService schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "StrategyPM - Product Strategy Consulting",
    alternateName: "StrategyPM",
    description: "Expert product strategy consulting from a $210k Google PM with 10+ years at Google, Meta, and Microsoft. Roadmap planning, feature prioritization, and stakeholder alignment services.",
    url: "https://pm-consulting-one.vercel.app",
    logo: "https://pm-consulting-one.vercel.app/logo.png",
    image: "https://pm-consulting-one.vercel.app/og-image.jpg",
    priceRange: "$$$",
    email: "oliver@newth.ai",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Worldwide",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    sameAs: [
      "https://twitter.com/newth",
      "https://linkedin.com/in/olivernewth",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Product Strategy Consulting",
      "Roadmap Planning",
      "Feature Prioritization",
      "Stakeholder Alignment",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  }

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Product Strategy Consulting",
    name: "Hourly Product Strategy Consulting",
    description: "One-on-one product strategy sessions with a Google PM. Includes roadmap development, prioritization frameworks, and stakeholder templates.",
    provider: {
      "@type": "ProfessionalService",
      name: "StrategyPM",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "300",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: "300",
        unitCode: "HUR",
        unitText: "per hour",
      },
      availability: "https://schema.org/InStock",
      url: "https://pm-consulting-one.vercel.app#contact",
      validFrom: "2026-01-01",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  }

  // Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Oliver Newth",
    jobTitle: "Product Strategy Consultant",
    description: "Former Google PM with 10+ years product leadership experience at Google, Meta, and Microsoft. Specializes in product roadmaps, feature prioritization, and stakeholder alignment.",
    url: "https://pm-consulting-one.vercel.app",
    email: "oliver@newth.ai",
    sameAs: [
      "https://twitter.com/newth",
      "https://linkedin.com/in/olivernewth",
      "https://github.com/n3wth",
    ],
    worksFor: {
      "@type": "Organization",
      name: "StrategyPM",
    },
    alumniOf: [
      {
        "@type": "Organization",
        name: "Google",
      },
      {
        "@type": "Organization",
        name: "Meta",
      },
      {
        "@type": "Organization",
        name: "Microsoft",
      },
    ],
  }

  // AggregateOffer schema
  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "300",
    highPrice: "300",
    offerCount: "1",
    offers: [
      {
        "@type": "Offer",
        name: "Hourly Consulting",
        price: "300",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  }

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is product strategy consulting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Product strategy consulting helps companies build effective product roadmaps, prioritize features, and align stakeholders. Our consulting is led by a former Google PM with 10+ years experience at Google, Meta, and Microsoft.",
        },
      },
      {
        "@type": "Question",
        name: "How much does product strategy consulting cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hourly consulting is $300/hour. This includes 1-on-1 strategy sessions, product roadmap development, feature prioritization frameworks, stakeholder communication templates, and async support via Slack/email.",
        },
      },
      {
        "@type": "Question",
        name: "What experience do you have as a PM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I have 10+ years of product management experience at Google, Meta, and Microsoft. My work has impacted billions of users globally. I was a $210k PM at Google specializing in product strategy, roadmap planning, and cross-functional leadership.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with startups or enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both! I work with startups building their first product roadmap and enterprises scaling product teams. The frameworks I teach (RICE scoring, quarterly planning, stakeholder alignment) work at any scale.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a strategy session through the contact form on this page. We'll discuss your product challenges, goals, and how I can help. First consultation is free to ensure we're a good fit.",
        },
      },
    ],
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pm-consulting-one.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://pm-consulting-one.vercel.app#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: "https://pm-consulting-one.vercel.app#pricing",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://pm-consulting-one.vercel.app#contact",
      },
    ],
  }

  // Review schemas from testimonials
  const reviewSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "StrategyPM",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Chen",
        jobTitle: "VP Product, Series B SaaS",
      },
      reviewBody: "This framework saved our team. We went from chaotic roadmapping to 40% faster development cycles and higher feature adoption. Everyone's aligned now, and our NPS jumped from 42 to 58.",
      datePublished: "2026-01-10",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "StrategyPM",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Marcus Rodriguez",
        jobTitle: "CEO, E-commerce Startup",
      },
      reviewBody: "Stakeholder alignment was killing us. Got a framework that actually works. Implementation took 2 weeks. Results were immediate—revenue jumped 18% in Q1.",
      datePublished: "2026-01-12",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "StrategyPM",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Emily Watson",
        jobTitle: "Director of Product, Fintech",
      },
      reviewBody: "The roadmap planning session alone was worth the investment. Having a framework everyone understands—including the board—changed everything. We went from scattered priorities to a coherent strategy.",
      datePublished: "2026-01-15",
    },
  ]

  // HowTo schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a Product Roadmap",
    description: "Learn the proven framework used at Google, Meta, and Microsoft to build effective product roadmaps.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Define Business Goals",
        text: "Start by understanding your company's quarterly and annual objectives. Your product roadmap must align with business goals.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Gather Input from Stakeholders",
        text: "Interview executives, engineering, design, sales, and customers to understand priorities, constraints, and opportunities.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Prioritize Using RICE Framework",
        text: "Score features based on Reach, Impact, Confidence, and Effort. This data-driven approach removes bias from prioritization.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Map Dependencies and Timelines",
        text: "Identify technical dependencies, resource constraints, and realistic timelines. Account for buffer time.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Communicate and Iterate",
        text: "Share the roadmap with all stakeholders, gather feedback, and iterate. A roadmap is a living document.",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1d1d1f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {reviewSchemas.map((review, index) => (
          <script
            key={`review-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body>
        {children}
        <ExitIntentPopup
          title="Before You Go..."
          message="Get the Product Strategy Checklist (used at Google). Join 2,000+ product managers who use our templates."
          cta="Get Free Checklist"
          ctaHref="/resources"
          email={true}
        />
        <Analytics />
      </body>
    </html>
  )
}
