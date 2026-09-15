import Image from "next/image";
import { Award, GraduationCap, Scale, ShieldCheck, ArrowRight } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FirmSection() {
  return (
    <section id="escritorio" className="py-20 bg-white dark:bg-[#07080b] relative border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARD ESPECIAL COM LOGO EM FUNDO BRANCO E AUTORIDADE EM SISTEMA */}
        <div className="rounded-3xl card-elevated p-6 sm:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Bloco Visual com a Logo Oficial de Fundo Branco */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-white shadow-lg p-8 flex items-center justify-center border border-slate-200 dark:border-slate-700 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/logo-white-bg.png"
                    alt="Logo Oficial Corrêa Advocacia Especializada"
                    fill
                    priority
                    sizes="(max-width: 768px) 260px, 320px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs font-semibold tracking-wider text-[#a37a44] dark:text-[#dfcaa8] uppercase">
                  Sede Própria no Batel • Curitiba/PR
                </span>
              </div>
            </div>

            {/* Argumentação & Autoridade Comprovada */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a37a44] dark:text-[#dfcaa8]">
                <Scale className="w-4 h-4 text-[#a37a44] dark:text-[#dfcaa8]" />
                <span>Credibilidade & Histórico de Sucesso</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Mais de 12 anos dedicados à defesa técnica de quem move o país.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Fundado em outubro de 2014, o escritório Corrêa Advocacia Especializada é liderado pelo Dr. Marcelo Miguel Corrêa Junior. Unimos conhecimento prático da rotina corporativa e bancária a uma apuração matemática precisa dos valores sonegados.
              </p>

              {/* Prova Social & Diferenciais em Tópicos Claros */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-1">
                    <Award className="w-4 h-4 text-[#a37a44] dark:text-[#dfcaa8]" />
                    <span>Experiência Comprovada</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Mais de uma década de processos trabalhistas conduzidos com estratégia firme.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-1">
                    <GraduationCap className="w-4 h-4 text-[#a37a44] dark:text-[#dfcaa8]" />
                    <span>Especialista UNICURITIBA</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Pós-graduação em Direito e Processo do Trabalho voltada a casos complexos.
                  </p>
                </div>
              </div>

              {/* Chamada para Ação no Fim da Seção */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {company.founder}
                  </p>
                  <p className="text-xs text-[#a37a44] dark:text-[#dfcaa8] font-medium">
                    Advogado Sócio-Fundador • {company.oab}
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl("Olá, Dr. Marcelo! Li sobre a história do escritório e gostaria de solicitar uma análise para o meu caso.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-all shadow-md"
                >
                  <span>Falar com o Especialista</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
