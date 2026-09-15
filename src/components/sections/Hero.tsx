import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 pb-12 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
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
            className="object-cover object-[left_top] sm:object-[left_center]"
          />
        </picture>

        {/* Degradê Direcionado à Direita para garantir contraste com o texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-slate-950/60 sm:to-slate-950/90" />
      </div>

      {/* Conteúdo Enxuto, Elegante e Menor Posicionado no Lado Direito */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
        <div className="w-full max-w-lg lg:max-w-xl text-left space-y-4 sm:space-y-5 pt-8 sm:pt-0">
          
          {/* H1 Menor, Elegante e Objetivo */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            Você trabalhou além da conta e assumiu responsabilidades{" "}
            <span className="text-[#dfcaa8]">sem a remuneração devida?</span>
          </h1>

          {/* Subtítulo Sucinto de 1 a 2 Linhas no Máximo */}
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow font-normal">
            Recupere horas extras sonegadas, anule falsos cargos de confiança e garanta suas reparações com total sigilo.
          </p>

          {/* Os 2 Botões Lado a Lado / Compactos para Sempre Caberem na Tela */}
          <div className="flex flex-row items-center gap-3 pt-2">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de entender meus direitos trabalhistas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Avaliar Meu Caso</span>
            </a>

            <a
              href="#orientacao"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/30 hover:border-white/60 text-white font-semibold text-xs sm:text-sm hover:bg-black/60 transition-all shadow-md whitespace-nowrap"
            >
              <span>Verificar Direitos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-[11px] text-slate-300 drop-shadow">
            Atendimento preliminar confidencial, sem contato com o empregador.
          </p>
        </div>
      </div>
    </section>
  );
}
