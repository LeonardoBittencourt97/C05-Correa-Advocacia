import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { TypewriterHeading } from "@/components/ui/TypewriterHeading";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 pt-24 sm:pt-28 pb-12 sm:pb-14">
      
      {/* Imagem de Fundo 100% Nítida Abrangendo Toda a Tela */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/images/headermobile.jpeg" />
          <source media="(min-width: 768px)" srcSet="/images/headerdesktop.jpeg" />
          <Image
            src="/images/headerdesktop.jpeg"
            alt="Dr. Marcelo Miguel Corrêa Junior - Advogado Trabalhista"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[70%_top] sm:object-[left_center]"
          />
        </picture>

        {/* 
          Degradê suave e integrado à foto:
          - No Mobile: sombra suave na base para manter os botões legíveis.
          - No Desktop: sombra suave na lateral direita para dar contraste de leitura nas frases e botões.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-slate-950/30 sm:to-slate-950/85" />
      </div>

      {/* 
        1. CONTAINER DO H1 ÚNICO E SOZINHO NO CANTO SUPERIOR DIREITO (DESKTOP)
        - Fica no topo direito sobre a estante, com fonte grande e animação de digitação/apagamento
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl text-left">
          <TypewriterHeading />
        </div>
      </div>

      {/* 
        2. SUBTÍTULO, BOTÕES E AVISO NO LUGAR ATUAL (SEM MEXER NA POSIÇÃO INFERIOR)
        - No mobile fica na base, no desktop permanece abaixo à direita
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-md text-left space-y-3 sm:space-y-4">
          
          {/* Subtítulo Sucinto Flutuante */}
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
