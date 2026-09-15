import Image from "next/image";
import { Award, GraduationCap, Scale, ShieldCheck } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FirmSection() {
  return (
    <section id="escritorio" className="py-20 bg-slate-50/70 dark:bg-[#08090c] relative border-t border-gray-200 dark:border-[#1f2533]/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARD ESPECIAL COM LOGO EM FUNDO BRANCO */}
        <div className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#0f1218] dark:to-[#0b0d12] border border-gray-200 dark:border-[#c5a880]/30 shadow-xl overflow-hidden p-6 sm:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Bloco Visual com a Logo Oficial de Fundo Branco */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-white shadow-xl p-8 flex items-center justify-center border-2 border-gray-100 dark:border-[#c5a880]/20 transform hover:scale-[1.02] transition-transform duration-500">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/logo-white-bg.png"
                    alt="Logo Oficial Corrêa Advocacia Especializada"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 350px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono tracking-widest text-[#b28a55] dark:text-[#dfcaa8] uppercase">
                  Sede Própria no Batel • Curitiba/PR
                </span>
              </div>
            </div>

            {/* Conteúdo Institucional Minimalista e de Alto Valor */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#b28a55] dark:text-[#c5a880]">
                <Scale className="w-4 h-4" />
                <span>O Escritório & Filosofia</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-[#f4f5f7] leading-tight">
                Técnica jurídica, estratégia processual e{" "}
                <span className="gold-gradient-text">compromisso com resultados</span>.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-[#9ca3af] leading-relaxed">
                Fundado em outubro de 2014, o escritório Corrêa Advocacia Especializada consolidou-se como referência na defesa intransigente dos direitos de bancários e trabalhadores. Nossa atuação combina rigor técnico na análise documental com uma postura combativa e ética perante a Justiça do Trabalho.
              </p>

              {/* Pilares Estratégicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08090c] border border-gray-200 dark:border-[#1f2533]">
                  <div className="flex items-center gap-2.5 text-[#b28a55] dark:text-[#dfcaa8] font-serif font-bold text-sm mb-1">
                    <Award className="w-4 h-4 text-[#b28a55] dark:text-[#c5a880]" />
                    <span>12 Anos de História</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#9ca3af]">
                    Mais de uma década de prática ininterrupta e processos conduzidos com êxito.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08090c] border border-gray-200 dark:border-[#1f2533]">
                  <div className="flex items-center gap-2.5 text-[#b28a55] dark:text-[#dfcaa8] font-serif font-bold text-sm mb-1">
                    <GraduationCap className="w-4 h-4 text-[#b28a55] dark:text-[#c5a880]" />
                    <span>Especialização UNICURITIBA</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#9ca3af]">
                    Pós-graduação em Direito e Processo do Trabalho voltada à alta complexidade.
                  </p>
                </div>
              </div>

              {/* Assinatura & Ação */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 dark:border-[#1f2533]/80">
                <div>
                  <p className="text-sm font-serif font-bold text-slate-900 dark:text-[#f4f5f7]">
                    {company.founder}
                  </p>
                  <p className="text-xs text-[#b28a55] dark:text-[#dfcaa8]">
                    Advogado Titular • {company.oab}
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl("Olá, Dr. Marcelo! Conheci a história do escritório no site e gostaria de agendar uma consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-[#20ba59] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Agendar Consulta Reservada →</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
