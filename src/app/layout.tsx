import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Jost } from "next/font/google";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Artline Frames | Custom Picture Framing & Art in Dubai, UAE",
    template: "%s | Artline Frames Dubai",
  },
  description: site.description,
  keywords: [
    "picture framing Dubai",
    "custom framing Dubai",
    "canvas stretching Dubai",
    "jersey framing Dubai",
    "oil painting Dubai",
    "art printing Dubai",
    "framing shop UAE",
    "artwork installation Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: site.name,
    url: site.url,
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/brand/logo.jpg`,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  priceRange: "AED",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${cinzel.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
