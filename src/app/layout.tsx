import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { company } from "@/lib/constants";

// Tipografia moderna, legível e de alto impacto para Landing Pages
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${company.name} | Marcelo Miguel Corrêa Junior - Advogado Trabalhista Bancário`,
  description:
    "Defesa estratégica e sigilosa para bancários e trabalhadores. Recupere 7ª e 8ª horas, descaracterize falsos cargos de confiança e obtenha indenização por Burnout e metas abusivas.",
  keywords: [
    "advogado trabalhista bancario",
    "acao trabalhista bancario curitiba",
    "7 e 8 horas bancarios",
    "cargo de confianca bancario fraude",
    "burnout bancario indenizacao",
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
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 dark:bg-[#07080b] text-slate-900 dark:text-slate-100 min-h-screen selection:bg-[#c5a880] selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
