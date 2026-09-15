import { services } from "@/lib/constants";
import { Check, MessageCircle, Landmark, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Specialization() {
  return (
    <section id="especialidades" className="py-24 bg-[#08090c] relative overflow-hidden">
      {/* Luz ambiente de fundo sutil */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c5a880] mb-3">
            <Landmark className="w-4 h-4" />
            Especialidades de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f4f5f7]">
            Defesa Técnica com <span className="gold-gradient-text">Estratégia Comprovada</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9ca3af] leading-relaxed">
            Processos trabalhistas complexos exigem conhecimento aprofundado da rotina bancária e corporativa. Atuamos com foco técnico e apuração matemática precisa dos valores devidos.
          </p>
        </div>

        {/* Grid de Cards com Efeitos Hover Vivos e Micro-Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-[#1f2533] hover:border-[#c5a880]/60 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 group shadow-xl relative overflow-hidden"
            >
              {/* Brilho decorativo no topo do card ao passar o mouse */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5a880]/0 to-transparent group-hover:via-[#c5a880]/60 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wide bg-[#c5a880]/10 text-[#dfcaa8] border border-[#c5a880]/20">
                    {service.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#08090c] border border-[#1f2533] flex items-center justify-center text-[#9ca3af] group-hover:text-[#dfcaa8] group-hover:border-[#c5a880] transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#f4f5f7] group-hover:text-[#dfcaa8] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Lista de destaques */}
                <ul className="space-y-2.5 mb-6 text-xs text-[#d1d5db]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de Análise Direta no WhatsApp para o Serviço */}
              <div className="pt-4 border-t border-[#1f2533]">
                <a
                  href={buildWhatsAppUrl(`Olá, Dr. Marcelo! Gostaria de consultar sobre meus direitos em relação a: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-semibold text-[#25D366] hover:text-[#20ba59] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Consultar esta especialidade
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
