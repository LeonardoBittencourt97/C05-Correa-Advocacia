import Image from "next/image";
import { MessageCircle, Shield, Award } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[86vh] sm:min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Imagem de Fundo Fotográfica Adaptativa com Iluminação de Cinema */}
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
            className="object-cover object-[78%_top] sm:object-center filter brightness-[0.70] contrast-[1.05]"
          />
        </picture>

        {/* Degradê Minimalista e Suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-[#08090c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#08090c]/40" />
      </div>

      {/* Conteúdo Enxuto, Direto e de Alto Impacto */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-6 text-left">
          {/* Tag Minimalista */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08090c]/80 border border-[#c5a880]/30 text-xs text-[#dfcaa8] font-mono">
            <span>DIREITO TRABALHISTA BANCÁRIO</span>
          </div>

          {/* Título Limpo & Forte */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f4f5f7] leading-[1.14]">
            Defesa estratégica para quem construiu sua carreira sob{" "}
            <span className="gold-gradient-text">sobrejornada e pressão</span>.
          </h1>

          {/* Subtítulo Sucinto */}
          <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed max-w-xl">
            Atuação especializada na descaracterização de falsos cargos de confiança, horas extras integrais e reparação por Burnout e metas abusivas.
          </p>

          {/* Credenciais Rápidas em Linha */}
          <div className="flex items-center gap-5 text-xs text-[#9ca3af] pt-1">
            <span className="flex items-center gap-1.5 text-[#f4f5f7]">
              <Award className="w-3.5 h-3.5 text-[#c5a880]" />
              12 Anos de Experiência
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c5a880]/40" />
            <span className="flex items-center gap-1.5 text-[#f4f5f7]">
              <Shield className="w-3.5 h-3.5 text-[#25D366]" />
              Sigilo Absoluto
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c5a880]/40" />
            <span>Batel, Curitiba / Nacional</span>
          </div>

          {/* CTA Principal de Alta Conversão */}
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de uma orientação confidencial sobre a minha situação trabalhista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-2xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Falar Diretamente com Dr. Marcelo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
