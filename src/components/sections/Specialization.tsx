import { services } from "@/lib/constants";
import { Check, MessageCircle, Landmark } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Specialization() {
  return (
    <section id="especialidades" className="py-24 bg-[#08090c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c5a880] mb-3">
            <Landmark className="w-4 h-4" />
            Especialidades Jurídicas de Foco
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#f4f5f7]">
            Áreas de Atuação com <span className="gold-gradient-text">Estratégia Comprovada</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9ca3af] leading-relaxed">
            Processos trabalhistas complexos exigem conhecimento aprofundado da rotina bancária e corporativa. Atuamos com foco técnico e apuração matemática precisa dos valores devidos.
          </p>
        </div>

        {/* Grid de Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#1f2533] hover:border-[#c5a880]/50 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wide bg-[#c5a880]/10 text-[#dfcaa8] border border-[#c5a880]/20 mb-4">
                  {service.tag}
                </span>
                <h3 className="text-xl font-serif text-[#f4f5f7] group-hover:text-[#dfcaa8] transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Lista de destaques */}
                <ul className="space-y-2.5 mb-6 text-xs text-[#d1d5db]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
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
                  className="flex items-center justify-between text-xs font-semibold text-[#25D366] hover:text-[#20ba59] group-hover:translate-x-1 transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    Consultar esta especialidade
                  </span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
