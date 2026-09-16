import Image from "next/image";
import { Scale, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function LawyerSection() {
  return (
    <section id="advogado" className="py-20 bg-slate-50 dark:bg-[#0a0d14] relative border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl card-elevated p-6 sm:p-12 bg-white dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Imagem do Advogado: Desktop e Mobile */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#a37a44]/30 group">
                <picture className="w-full h-full block">
                  <source media="(max-width: 767px)" srcSet="/images/header-mobile.jpeg" />
                  <source media="(min-width: 768px)" srcSet="/images/header-desktop.jpeg" />
                  <Image
                    src="/images/header-desktop.jpeg"
                    alt="Dr. Marcelo Miguel Corrêa Junior - Advogado Trabalhista"
                    fill
                    sizes="(max-width: 768px) 340px, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>

                {/* Badge Flutuante de OAB */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white text-center shadow-lg">
                  <p className="text-xs font-bold tracking-wide text-amber-300">
                    {company.founder}
                  </p>
                  <p className="text-[11px] text-slate-300">
                    OAB/PR 74.372 • Especialista em Direito e Processo do Trabalho
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo Institucional e Autoridade do Dr. Marcelo */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-xs font-bold text-amber-900 dark:text-amber-200">
                <Scale className="w-3.5 h-3.5 text-[#a37a44] dark:text-[#dfcaa8]" />
                <span>Advocacia Trabalhista Especializada</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Dr. Marcelo Miguel Corrêa Junior
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Com mais de 12 anos de atuação incisiva no Direito do Trabalho, o Dr. Marcelo dedica-se pessoalmente ao estudo minucioso de cada caso, garantindo que bancários e trabalhadores tenham atendimento próximo, combativo e sem intermediários.
              </p>

              {/* Pilares Profissionais */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong>Atendimento Direto:</strong> Do primeiro contato à audiência, você conversa e é assessorado pessoalmente pelo titular do escritório.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong>Cálculos Precisos:</strong> Identificação cirúrgica de reflexos salariais, horas extras integrais, equiparações e verbas omitidas.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong>Sigilo Absoluto:</strong> Proteção irrestrita à sua privacidade e reputação profissional durante todo o processo.
                  </p>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de conversar diretamente sobre o meu caso trabalhista.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] active:scale-95 transition-all shadow-lg whatsapp-glow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar com o Dr. Marcelo</span>
                </a>

                <a
                  href="#orientacao"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>Avaliar Direitos</span>
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
