"use client";

import { useState } from "react";
import { faqs } from "@/lib/constants";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0c10] relative border-t border-[#1f2533]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c5a880] mb-3">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#f4f5f7]">
            Dúvidas Frequentes sobre <span className="gold-gradient-text">Ações Trabalhistas</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9ca3af]">
            Confira as principais dúvidas de bancários e trabalhadores antes de ingressar com uma ação judicial.
          </p>
        </div>

        {/* Lista de Accordions Acessíveis */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-[#1f2533] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#f4f5f7] hover:text-[#dfcaa8] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c5a880] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#9ca3af] leading-relaxed border-t border-[#1f2533]/50 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco de Ajuda Personalizada */}
        <div className="mt-12 text-center p-8 rounded-2xl glass-card border border-[#c5a880]/30">
          <h3 className="text-lg font-serif text-[#f4f5f7] mb-2">
            Sua dúvida não está listada aqui?
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mb-6">
            Cada caso trabalhista possui particularidades únicas. Envie sua pergunta diretamente ao Dr. Marcelo no WhatsApp.
          </p>
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Li o FAQ no site, mas tenho uma dúvida específica sobre a minha situação:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20ba59] transition-all whatsapp-glow"
          >
            <MessageCircle className="w-4 h-4" />
            Tirar Dúvida Pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
