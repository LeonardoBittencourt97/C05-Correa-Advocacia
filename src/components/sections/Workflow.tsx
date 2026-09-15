import { workflowSteps } from "@/lib/constants";
import { MessageCircle, Shield } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Workflow() {
  return (
    <section className="py-24 bg-[#08090c] relative border-t border-[#1f2533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c5a880] mb-3">
            <Shield className="w-4 h-4" />
            Transparência do Começo ao Fim
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#f4f5f7]">
            Como Funciona o <span className="gold-gradient-text">Nosso Atendimento</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9ca3af]">
            Processo ágil, discreto e sem burocracia desnecessária. Você tem contato direto com quem compreende as nuances do direito trabalhista.
          </p>
        </div>

        {/* 4 Passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-[#1f2533] flex flex-col justify-between relative hover:border-[#c5a880]/40 transition-all duration-300"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#c5a880]/30 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-serif text-[#f4f5f7] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1f2533]/60 flex items-center justify-between text-xs text-[#dfcaa8]">
                <span>Etapa {step.number}</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Ação Rápida */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass-card p-4 sm:p-6 rounded-2xl border border-[#c5a880]/30">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base font-serif font-bold text-[#f4f5f7]">
                Deseja iniciar a Etapa 1 agora mesmo?
              </p>
              <p className="text-xs text-[#9ca3af]">
                Envie uma mensagem direta e receba retorno em poucos minutos.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl("Olá! Quero iniciar a análise técnica do meu caso com Dr. Marcelo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20ba59] transition-all whatsapp-glow whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Iniciar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
