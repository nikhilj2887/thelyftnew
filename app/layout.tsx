import "./globals.css";

export const metadata = {
  title: "thelyft | Recruitment & Staffing Solutions",
  description:
    "thelyft helps companies hire top talent and professionals find their dream jobs. Specialized in staffing, recruitment, and HR solutions.",
  keywords: [
    "recruitment company",
    "staffing services India",
    "HR consultancy Hyderabad",
    "job placement services",
    "thelyft careers",
  ],
  authors: [{ name: "thelyft" }],
  metadataBase: new URL("https://thelyft.in"),

  openGraph: {
    title: "thelyft | Recruitment & Staffing Solutions",
    description:
      "Find top talent or your next dream job with thelyft.",
    url: "https://thelyft.in",
    siteName: "thelyft",
    images: [
      {
        url: "/thelyft-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "thelyft | Recruitment & Staffing",
    description:
      "Helping companies hire better and faster.",
    images: ["/thelyft-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "thelyft",
    url: "https://thelyft.in",
    logo: "https://thelyft.in/thelyft-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9642232781",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/thelyft",
      "https://www.instagram.com/the_lyft/",
      "https://www.youtube.com/@thelyft_official",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chikoti Gardens, Begumpet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500016",
      addressCountry: "IN",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "thelyft",
    image: "https://thelyft.in/thelyft-logo.png",
    "@id": "https://thelyft.in",
    url: "https://thelyft.in",
    telephone: "+91-9642232781",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chikoti Gardens, Begumpet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500016",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4435,
      longitude: 78.4626,
    },
  };

  return (
    <html lang="en">
      <body>
        {children}

        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </body>
    </html>
  );
}