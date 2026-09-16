import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { FirmSection } from "@/components/sections/FirmSection";
import { Specialization } from "@/components/sections/Specialization";
import { WhatCanBeClaimed } from "@/components/sections/WhatCanBeClaimed";
import { DeadlineAlert } from "@/components/sections/DeadlineAlert";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadQualifier } from "@/components/sections/LeadQualifier";
import { FAQ } from "@/components/sections/FAQ";
import { MapSection } from "@/components/sections/MapSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-[#07080b] text-slate-900 dark:text-slate-100 transition-colors">
      <Header />
      <main className="flex-1">
        {/* 1. Topo / Primeira Dobra de Alta Conversão */}
        <Hero />

        {/* 2. Benefícios Rápidos em Destaque */}
        <BenefitsBar />

        {/* 3. O Escritório (Autoridade + Logo Oficial Fundo Branco) */}
        <FirmSection />

        {/* 4. Casos Estratégicos (9 Situações Mapeadas) */}
        <Specialization />

        {/* 5. O Que Pode Ser Cobrado (10 Direitos Além da Rescisão) */}
        <WhatCanBeClaimed />

        {/* 6. Atenção ao Prazo (2 Anos Constitucionais) */}
        <DeadlineAlert />

        {/* 7. Como Funciona na Prática (4 Passos do Primeiro 'Oi' ao Fim) */}
        <HowItWorks />

        {/* 8. Prova Social: Carrossel de Depoimentos Reais do Google 5.0 */}
        <Testimonials />

        {/* 9. Diagnóstico Preliminar em 3 Passos (Formulário/Oferta no WhatsApp) */}
        <LeadQualifier />

        {/* 10. Dúvidas Frequentes (FAQ) */}
        <FAQ />

        {/* 11. Contato & Rotas no Batel */}
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
