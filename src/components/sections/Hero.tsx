import Image from "next/image";
import { MessageCircle, ShieldCheck, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Imagem de Fundo 100% Nítida (Sem Blur) Abrangendo Toda a Tela */}
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

        {/* 
          No Desktop: o advogado está posicionado à esquerda.
          Portanto, o degradê sutil é aplicado à DIREITA para dar legibilidade máxima ao texto sem encobrir o rosto.
          No Mobile: degradê suave de baixo para cima.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-slate-950/60 sm:to-slate-950/90" />
      </div>

      {/* Conteúdo Posicionado Estrategicamente no Lado Direito no Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-end">
        <div className="w-full max-w-xl lg:max-w-2xl text-left space-y-6 pt-12 sm:pt-0">
          
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#c5a880]/50 text-xs text-[#dfcaa8] font-bold tracking-wide">
            <Award className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>ADVOCACIA ESPECIALIZADA EM DIREITO TRABALHISTA BANCÁRIO</span>
          </div>

          {/* Único H1 Persuasivo (Sem travessões e sem clichês de IA) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.15] tracking-tight drop-shadow-lg">
            Você trabalhou além da conta e assumiu responsabilidades{" "}
            <span className="text-[#dfcaa8] underline decoration-[#c5a880]/70 decoration-4 underline-offset-4">
              sem a devida remuneração?
            </span>
          </h1>

          {/* Subtítulo Claro e Humanizado */}
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-lg font-normal drop-shadow-md">
            Identificamos fraudes em cargos de confiança, cobramos horas extras integrais e garantimos reparações legítimas por Burnout e metas abusivas, com proteção e discrição absoluta.
          </p>

          {/* Selos de Confiança Rápidos */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-100 pt-1">
            <span className="flex items-center gap-1.5 font-semibold drop-shadow">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              12 Anos de Prática
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="flex items-center gap-1.5 font-semibold drop-shadow">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              Sigilo Absoluto Garantido
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="font-semibold drop-shadow">Batel, Curitiba e Todo o Brasil</span>
          </div>

          {/* Ações de Conversão */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de entender meus direitos trabalhistas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-2xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Avaliar Meu Caso no WhatsApp</span>
            </a>

            <a
              href="#orientacao"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/30 hover:border-white/60 text-white font-semibold text-sm hover:bg-black/60 transition-all shadow-md"
            >
              <span>Verificar Meus Direitos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-slate-200/90 font-medium drop-shadow">
            Atendimento preliminar confidencial, sem nenhum contato com o seu empregador.
          </p>
        </div>
      </div>
    </section>
  );
}
