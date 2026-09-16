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
    <section id="faq" className="py-20 bg-white dark:bg-[#0a0c10] relative border-t border-gray-200 dark:border-[#1f2533] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#b28a55] dark:text-[#c5a880] mb-2">
            <HelpCircle className="w-4 h-4" />
            Transparência Desde o Início
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-[#f4f5f7]">
            Dúvidas mais comuns antes de <span className="gold-gradient-text">começar</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#9ca3af] max-w-2xl mx-auto">
            O que quase todo mundo pergunta antes de iniciar a análise de seus direitos trabalhistas.
          </p>
        </div>

        {/* Lista de Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-[#1f2533] bg-slate-50/60 dark:bg-[#0f1218]/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-slate-900 dark:text-[#f4f5f7] hover:text-[#b28a55] dark:hover:text-[#dfcaa8] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#b28a55] dark:text-[#c5a880] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-[#9ca3af] leading-relaxed border-t border-gray-200/60 dark:border-[#1f2533]/50 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco de Ajuda Personalizada */}
        <div className="mt-10 text-center p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#0f1218]/60 border border-gray-200 dark:border-[#c5a880]/30">
          <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-[#f4f5f7] mb-1.5">
            Sua dúvida é específica sobre seu contrato ou banco?
          </h3>
          <p className="text-xs text-slate-600 dark:text-[#9ca3af] mb-5">
            Envie sua pergunta diretamente ao Dr. Marcelo pelo WhatsApp com sigilo absoluto.
          </p>
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Li o FAQ no site e gostaria de esclarecer uma dúvida sobre meu caso:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20ba59] transition-all whatsapp-glow shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
