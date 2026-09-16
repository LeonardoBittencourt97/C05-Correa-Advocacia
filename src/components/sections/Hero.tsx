import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { TypewriterHeading } from "@/components/ui/TypewriterHeading";

export function Hero() {
  return (
    <section className="relative h-screen min-h-screen flex items-end sm:items-center overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 pb-6 sm:pb-0 pt-20 sm:pt-24">
      
      {/* Imagem de Fundo Abrangendo Toda a Tela por Inteiro */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/images/heroatualizadomobile.jpeg" />
          <source media="(min-width: 768px)" srcSet="/images/headerdesktop.jpeg" />
          <Image
            src="/images/headerdesktop.jpeg"
            alt="Dr. Marcelo Miguel Corrêa Junior - Advogado Trabalhista"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[75%_top] sm:object-center"
          />
        </picture>

        {/* 
          Overlay suave apenas para garantir leitura dos textos sem tapar ou criar faixas brancas na imagem:
          - No Mobile: sombra sutil na base
          - No Desktop: gradiente lateral suave translúcido
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-white/70 sm:via-white/30 sm:to-transparent sm:dark:from-[#07080b]/80 sm:dark:via-[#07080b]/40 sm:dark:to-transparent" />
      </div>

      {/* 
        CONTAINER ÚNICO: TEXTOS E BOTÕES JUNTOS NA LATERAL ESQUERDA (ALINHADOS NO MEIO)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="w-full max-w-xl text-left space-y-5 sm:space-y-6">
          
          {/* H1 Institucional em Destaque */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
            <span className="text-[#a37a44] font-black">CORRÊA ADVOCACIA</span>
            <span className="hidden sm:inline">
              <span className="text-[#a37a44] font-black"> • </span>
              <span className="text-slate-900 dark:text-slate-100">Atuação trabalhista estratégica em todo o Brasil</span>
            </span>
          </h1>

          {/* H1 com Efeito Typewriter */}
          <div>
            <TypewriterHeading />
          </div>

          {/* Subtítulo Sucinto */}
          <p className="text-xs sm:text-base text-slate-200 sm:text-slate-700 sm:dark:text-slate-300 leading-relaxed font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] sm:drop-shadow-none max-w-lg">
            Assessoria jurídica especializada dedicada ao exame de contratos de trabalho, jornada extraordinária e cargos de confiança, com condução técnica e sigilosa.
          </p>

          {/* Botões de Conversão Lado a Lado no Mobile */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-nowrap sm:items-center sm:gap-3 pt-1 w-full sm:w-auto">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de entender meus direitos trabalhistas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-2 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-[11px] sm:text-sm shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Consultar Advogado</span>
            </a>

            <a
              href="#orientacao"
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-slate-900/80 sm:bg-slate-100 hover:bg-slate-900 sm:hover:bg-slate-200 border border-white/20 sm:border-slate-300 text-white sm:text-slate-800 dark:sm:bg-slate-800 dark:sm:text-white dark:sm:border-slate-700 font-semibold text-[11px] sm:text-sm transition-all shadow-sm text-center"
            >
              <span>Conhecer <span className="hidden sm:inline">seus </span>Direitos</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            </a>
          </div>

          <p className="hidden sm:block text-[11px] sm:text-xs text-slate-300 sm:text-slate-500 sm:dark:text-slate-400">
            Atendimento preliminar estritamente sigiloso e direto com o advogado.
          </p>
        </div>
      </div>
    </section>
  );
}
