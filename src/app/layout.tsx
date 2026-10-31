import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, services, site } from "@/lib/site";

const serif = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | Clinical Psychologist, Therapy & Mental Health Training`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.brand,
  authors: [{ name: site.person, url: site.url }],
  creator: site.person,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.brand,
    title: `${site.brand} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#5e8a47",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.brand,
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: site.person,
      jobTitle: site.jobTitle,
      image: absoluteUrl("/images/portrait.jpg"),
      url: site.url,
      worksFor: { "@id": absoluteUrl("/#practice") },
      knowsAbout: [
        "Clinical psychology",
        "Psychotherapy",
        "Anxiety",
        "Addiction recovery",
        "Youth mental health",
        "Mental health in higher education",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#practice"),
      name: site.brand,
      url: site.url,
      image: absoluteUrl("/images/portrait.jpg"),
      description: site.description,
      email: site.email,
      ...(site.phone ? { telephone: site.phone } : {}),
      areaServed: "IN",
      founder: { "@id": absoluteUrl("/#person") },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: absoluteUrl(`/services/${s.slug}`),
          },
        })),
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd data={organizationLd} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
