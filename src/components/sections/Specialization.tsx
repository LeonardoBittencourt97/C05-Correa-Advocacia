import { services } from "@/lib/constants";
import { Check, MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Specialization() {
  return (
    <section id="especialidades" className="py-24 bg-[#08090c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Minimalista e Limpo */}
        <div className="max-w-2xl mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block mb-2">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4f5f7]">
            Foco cirúrgico em demandas de <span className="gold-gradient-text">alta complexidade</span>.
          </h2>
        </div>

        {/* Grid Minimalista com 3 Áreas Consolidadas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-[#1f2533] hover:border-[#c5a880]/50 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div>
                <span className="inline-block text-[11px] font-mono tracking-wide text-[#dfcaa8] mb-3">
                  {service.tag}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#f4f5f7] group-hover:text-[#dfcaa8] transition-colors mb-2.5">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 text-xs text-[#d1d5db]">
                  {service.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1f2533]">
                <a
                  href={buildWhatsAppUrl(`Olá, Dr. Marcelo! Gostaria de uma avaliação para a especialidade: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-semibold text-[#25D366] hover:text-[#20ba59] transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consultar direitos
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
