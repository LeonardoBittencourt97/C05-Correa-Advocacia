import { services } from "@/lib/constants";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Specialization() {
  return (
    <section id="especialidades" className="py-20 bg-slate-50 dark:bg-[#07080b] relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Argumentação da Landing Page */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a37a44] dark:text-[#dfcaa8] block mb-2">
            Áreas de Foco Estratégico
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Em qual destas situações você se reconhece?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Identificamos com precisão se os seus direitos contratuais foram respeitados ou sonegados.
          </p>
        </div>

        {/* 3 Cards de Alto Contraste e Escaneabilidade em Tópicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="card-elevated rounded-2xl p-7 flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-slate-100 dark:bg-slate-800 text-[#a37a44] dark:text-[#dfcaa8]">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] transition-colors mb-2.5">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Recursos e Benefícios em Tópicos */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                  {service.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de Chamada para Ação */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={buildWhatsAppUrl(`Olá, Dr. Marcelo! Me identifiquei com a situação de: ${service.title}. Gostaria de entender meus direitos.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-[#25D366] hover:text-[#20ba59] transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    Consultar este caso
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
