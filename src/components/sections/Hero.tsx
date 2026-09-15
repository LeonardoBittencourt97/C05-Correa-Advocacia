import Image from "next/image";
import { Shield, MessageCircle, Award, Scale, CheckCircle } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Imagem de Fundo Adaptativa (Desktop / Mobile) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/images/header-mobile.jpeg" />
          <source media="(min-width: 768px)" srcSet="/images/header-desktop.jpeg" />
          <Image
            src="/images/header-desktop.jpeg"
            alt="Corrêa Advocacia Especializada - Marcelo Miguel Corrêa Junior"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[75%_top] sm:object-center filter brightness-[0.78] contrast-[1.08] transform scale-105 transition-transform duration-10000 hover:scale-100"
          />
        </picture>

        {/* Camadas cinematográficas de degradê e vinheta */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/95 via-[#08090c]/85 to-[#08090c]/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#050608]/60" />
        <div className="absolute inset-0 bg-radial-gradient opacity-60" />
      </div>

      {/* Conteúdo do Hero com Card Flutuante e Alta Legibilidade */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
          {/* Badge de Autoridade com Glow Dourado */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1218]/90 backdrop-blur-md border border-[#c5a880]/40 text-xs text-[#dfcaa8] font-mono shadow-lg gold-glow">
            <Scale className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>ADVOCACIA ESPECIALIZADA EM DIREITO TRABALHISTA BANCÁRIO</span>
          </div>

          {/* Headline Imponente */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f4f5f7] leading-[1.18] sm:leading-[1.12] drop-shadow-md">
            Defesa firme e estratégica para quem construiu sua história sob{" "}
            <span className="gold-gradient-text">pressão e sobrejornada</span>.
          </h1>

          {/* Subtítulo Humanizado e Empático */}
          <p className="text-sm sm:text-lg text-[#d1d5db] leading-relaxed max-w-2xl drop-shadow">
            Atuação técnica e sigilosa na descaracterização de falsos cargos de confiança, recuperação das 7ª e 8ª horas, e reparação integral por Burnout, assédio moral e metas desumanas.
          </p>

          {/* Pilares de Segurança Imediata */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#f4f5f7] pt-1">
            <span className="flex items-center gap-2 bg-[#08090c]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1f2533]">
              <CheckCircle className="w-4 h-4 text-[#c5a880]" />
              12 Anos de Liderança
            </span>
            <span className="flex items-center gap-2 bg-[#08090c]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1f2533]">
              <Shield className="w-4 h-4 text-[#25D366]" />
              Sigilo Absoluto Garantido
            </span>
            <span className="flex items-center gap-2 bg-[#08090c]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1f2533]">
              <Award className="w-4 h-4 text-[#c5a880]" />
              Atendimento Nacional
            </span>
          </div>

          {/* Botões de Ação Imediata */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de uma orientação confidencial sobre a minha situação trabalhista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-2xl hover:bg-[#20ba59] active:scale-98 transition-all duration-300 whatsapp-glow group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Falar Diretamente com Dr. Marcelo</span>
            </a>

            <a
              href="#orientacao"
              className="flex items-center justify-center px-6 py-4 rounded-xl bg-[#0f1218]/80 backdrop-blur-md border border-[#c5a880]/50 hover:border-[#dfcaa8] text-[#dfcaa8] hover:text-white text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              Entenda Seus Direitos (Guia Rápido) →
            </a>
          </div>

          <p className="text-[11px] text-[#9ca3af]">
            * Consulta preliminar estritamente confidencial, sem nenhum contato com o seu empregador.
          </p>
        </div>
      </div>
    </section>
  );
}
