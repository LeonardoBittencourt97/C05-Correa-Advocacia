import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { company } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${company.name} | Marcelo Miguel Corrêa Junior - Advogado Trabalhista Bancário`,
  description:
    "Defesa estratégica em Direito do Trabalho para bancários e trabalhadores em todo o Brasil. Foco em cargos de confiança fraudulentos, 7ª e 8ª horas, Burnout e assédio moral.",
  keywords: [
    "advogado trabalhista bancario",
    "acao trabalhista bancario curitiba",
    "7 e 8 horas bancarios",
    "cargo de confianca bancario fraude",
    "burnout bancario indenizacao",
    "assedio moral bancos",
    "Marcelo Miguel Correa Junior",
    "Correa Advocacia Especializada",
  ],
  authors: [{ name: company.founder }],
  creator: company.name,
  metadataBase: new URL("https://correaadvocacia.com.br"),
  openGraph: {
    title: `${company.name} | Advogado Trabalhista Bancário`,
    description: company.description,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema estruturado Organization / LegalService para SEO avançado
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: company.name,
    description: company.description,
    url: "https://correaadvocacia.com.br",
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Francisco Rocha, 198",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: company.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.431267,
      longitude: -49.290562,
    },
    founder: {
      "@type": "Person",
      name: company.founder,
      jobTitle: "Advogado Trabalhista Fundador",
    },
    areaServed: "BR",
    priceRange: "$$",
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#08090c] text-[#f4f5f7] min-h-screen selection:bg-[#c5a880] selection:text-[#08090c]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
