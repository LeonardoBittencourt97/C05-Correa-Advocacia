import Image from "next/image";
import { MessageCircle, ShieldCheck, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center pt-24 pb-16 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Imagem de Fundo de Alta Resolução */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/images/header-mobile.jpeg" />
          <source media="(min-width: 768px)" srcSet="/images/header-desktop.jpeg" />
          <Image
            src="/images/header-desktop.jpeg"
            alt="Corrêa Advocacia Especializada - Marcelo Miguel Corrêa Junior"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[78%_top] sm:object-center filter brightness-[0.72] contrast-[1.05]"
          />
        </picture>

        {/* Degradê cinematográfico refinado para leitura instantânea */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 sm:via-slate-900/75 to-slate-900/30 dark:from-[#07080b] dark:via-[#07080b]/85 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60 dark:from-[#07080b] dark:via-transparent dark:to-[#07080b]/50" />
      </div>

      {/* Conteúdo Focado na Tríade: Oferta de Valor + Autoridade + Curiosidade */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl text-left space-y-6">
          
          {/* Badge de Oferta e Autoridade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#c5a880]/50 text-xs text-[#dfcaa8] font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>ADVOCACIA ESPECIALIZADA EM BANCÁRIOS & TRABALHADORES</span>
          </div>

          {/* ÚNICO H1 IMPACTANTE (Oferta + Curiosidade) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md">
            Você trabalhou além da conta e assumiu responsabilidades{" "}
            <span className="text-[#dfcaa8] underline decoration-[#c5a880]/60 decoration-4 underline-offset-4">
              sem a devida remuneração?
            </span>
          </h1>

          {/* Subtítulo Claro (Benefício Tangível & O que é necessário) */}
          <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow">
            Descaracterizamos falsos cargos de confiança, recuperamos a 7ª e 8ª horas extras e buscamos indenizações justas por Burnout e metas abusivas — com sigilo absoluto.
          </p>

          {/* Gatilhos de Confiança Rápidos em Tópicos */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200 pt-1">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              12 Anos de Atuação
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              Sigilo Total Garantido
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="font-medium">Curitiba & Todo o Brasil</span>
          </div>

          {/* CTA Principal de Conversão Imediata (Above the Fold) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de entender se tenho direitos a receber em relação ao meu contrato de trabalho.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Avaliar Meu Caso no WhatsApp</span>
            </a>

            <a
              href="#orientacao"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold text-sm hover:bg-white/15 transition-all"
            >
              <span>Verificar Meus Direitos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[11px] text-slate-300/80">
            * Consulta preliminar segura e sem nenhum contato com seu empregador.
          </p>
        </div>
      </div>
    </section>
  );
}
