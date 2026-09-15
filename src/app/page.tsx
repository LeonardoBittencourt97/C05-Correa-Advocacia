import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { FirmSection } from "@/components/sections/FirmSection";
import { Specialization } from "@/components/sections/Specialization";
import { LeadQualifier } from "@/components/sections/LeadQualifier";
import { FAQ } from "@/components/sections/FAQ";
import { MapSection } from "@/components/sections/MapSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#08090c] text-[#f4f5f7]">
      <Header />
      <main className="flex-1">
        {/* 1. Hero com Fundo Fotográfico, Minimalista e Direto */}
        <Hero />

        {/* 2. Parte Especial do Escritório com a Logo em Fundo Branco */}
        <FirmSection />

        {/* 3. Especialidades Principais Enxutas */}
        <Specialization />

        {/* 4. Orientação Confidencial Passo a Passo */}
        <LeadQualifier />

        {/* 5. Dúvidas Frequentes Objetivas */}
        <FAQ />

        {/* 6. Localização no Batel & Rotas Maps */}
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
