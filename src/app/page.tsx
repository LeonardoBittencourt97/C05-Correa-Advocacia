import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { LeadQualifier } from "@/components/sections/LeadQualifier";
import { Specialization } from "@/components/sections/Specialization";
import { About } from "@/components/sections/About";
import { Workflow } from "@/components/sections/Workflow";
import { FAQ } from "@/components/sections/FAQ";
import { MapSection } from "@/components/sections/MapSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#08090c] text-[#f4f5f7]">
      <Header />
      <main className="flex-1">
        <Hero />
        <LeadQualifier />
        <Specialization />
        <About />
        <Workflow />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
