import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end sm:justify-center overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 pb-12 sm:pb-0">
      
      {/* Imagem de Fundo 100% Nítida Abrangendo Toda a Tela */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/images/header-mobile.jpeg" />
          <source media="(min-width: 768px)" srcSet="/images/header-desktop.jpeg" />
          <Image
            src="/images/header-desktop.jpeg"
            alt="Dr. Marcelo Miguel Corrêa Junior - Advogado Trabalhista"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[70%_top] sm:object-[left_center]"
          />
        </picture>

        {/* 
          Degradê invisível e natural integrado à foto:
          - No Mobile: sombra suave de baixo para cima na área inferior, onde o texto flutua abaixo da mesa.
          - No Desktop: sombra suave na extrema direita (estante), sem encobrir o rosto do advogado.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-slate-950/30 sm:to-slate-950/85" />
      </div>

      {/* 
        Texto Flutuante Sem Caixa/Borda:
        - Mobile: posicionado na parte inferior (abaixo do rosto/mesa).
        - Desktop: posicionado na extrema direita sobre a estante, com texto solto, elegante e flutuante.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-md text-left space-y-3 sm:space-y-4">
          
          {/* Título Flutuante com Sombra de Texto para Legibilidade */}
          <h1 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Você trabalhou além da conta e assumiu responsabilidades{" "}
            <span className="text-[#dfcaa8]">sem a remuneração devida?</span>
          </h1>

          {/* Subtítulo Flutuante */}
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Recupere horas extras sonegadas, anule falsos cargos de confiança e garanta suas indenizações com total sigilo.
          </p>

          {/* Botões Lado a Lado Flutuantes */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-1">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de entender meus direitos trabalhistas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-2xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Avaliar Meu Caso</span>
            </a>

            <a
              href="#orientacao"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-black/40 hover:bg-black/60 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all whitespace-nowrap drop-shadow"
            >
              <span>Verificar Direitos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-[11px] text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Atendimento preliminar estritamente sigiloso.
          </p>
        </div>
      </div>
    </section>
  );
}
