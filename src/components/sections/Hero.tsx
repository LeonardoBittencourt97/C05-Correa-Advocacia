import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 pb-10 sm:pb-16 lg:pb-20">
      
      {/* Imagem de Fundo 100% Nítida */}
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
            className="object-cover object-center sm:object-[center_20%]"
          />
        </picture>

        {/* 
          Degradê inteligente de base e lateral:
          - No Mobile: degradê forte apenas no terço inferior (onde o texto fica abaixo dos braços/mesa).
          - No Desktop: degradê concentrado na extrema direita para preservar 100% o advogado e a placa de vidro à esquerda.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-slate-950/95" />
      </div>

      {/* 
        Posicionamento do Conteúdo:
        - Mobile: flex-col no fundo da tela (justify-end), bem abaixo do rosto do Dr. Marcelo.
        - Desktop: na extrema direita (right-0), com margem lateral para não encostar na cabeça/corpo do advogado.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col sm:flex-row justify-end items-end">
        <div className="w-full sm:max-w-md lg:max-w-lg xl:max-w-xl text-left space-y-3.5 bg-black/40 sm:bg-black/50 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-white/15 shadow-2xl">
          
          {/* H1 Conciso e Elegante */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug tracking-tight">
            Você trabalhou além da conta e assumiu responsabilidades{" "}
            <span className="text-[#dfcaa8]">sem a remuneração devida?</span>
          </h1>

          {/* Subtítulo Sucinto */}
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            Recupere horas extras sonegadas, anule falsos cargos de confiança e garanta suas indenizações com total sigilo.
          </p>

          {/* Botões Lado a Lado Compactos */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-1">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de entender meus direitos trabalhistas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Avaliar Meu Caso</span>
            </a>

            <a
              href="#orientacao"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs sm:text-sm transition-all whitespace-nowrap"
            >
              <span>Verificar Direitos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-[11px] text-slate-300">
            Atendimento preliminar estritamente sigiloso.
          </p>
        </div>
      </div>
    </section>
  );
}
