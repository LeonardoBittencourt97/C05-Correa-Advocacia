import Image from "next/image";
import { Shield, MessageCircle, Award, Scale, CheckCircle } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#08090c]">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna de Conteúdo / Copy de Conversão (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge de Autoridade */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs text-[#dfcaa8] font-mono">
              <Scale className="w-3.5 h-3.5 text-[#c5a880]" />
              ESPECIALISTA EM AÇÕES TRABALHISTAS BANCÁRIAS
            </div>

            {/* Headline Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f4f5f7] leading-tight sm:leading-[1.15]">
              Defesa intransigente dos seus <span className="gold-gradient-text">direitos trabalhistas</span> e bancários.
            </h1>

            {/* Subheadline com foco nas dores reais */}
            <p className="text-base sm:text-lg text-[#9ca3af] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Atuação jurídica de alta precisão contra fraudes de cargo de confiança, cobrança de 7ª e 8ª horas, metas abusivas, assédio moral e Doenças Ocupacionais (Burnout).
            </p>

            {/* Pilares de Confiança Rápida */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-[#f4f5f7] pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#c5a880]" />
                12 Anos de Experiência
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#25D366]" />
                Sigilo Absoluto Garantido
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#c5a880]" />
                Atendimento em Todo o Brasil
              </span>
            </div>

            {/* CTAs de Alta Conversão */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de conversar sobre o meu caso trabalhista.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Dr. Marcelo no WhatsApp
              </a>

              <a
                href="#qualificador"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-4 rounded-xl border border-[#1f2533] hover:border-[#c5a880] text-[#dfcaa8] hover:bg-[#0f1218] text-sm font-semibold transition-all"
              >
                Simular Meu Caso (3 Passos) →
              </a>
            </div>

            <p className="text-[11px] text-[#6b7280]">
              * Atendimento inicial confidencial, seguro e sem comunicação com o seu empregador atual.
            </p>
          </div>

          {/* Coluna da Imagem Oficial do Advogado (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Moldura / Card de Apresentação */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-card border border-[#c5a880]/30 shadow-2xl p-2 sm:p-3">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0f1218]">
                {/* Carregamento adaptativo Desktop / Mobile com CSS prioritário */}
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/header-mobile.jpeg" />
                  <source media="(min-width: 641px)" srcSet="/images/header-desktop.jpeg" />
                  <Image
                    src="/images/header-desktop.jpeg"
                    alt="Marcelo Miguel Corrêa Junior - Advogado Trabalhista Especialista em Bancários"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </picture>

                {/* Overlay inferior sutil para leitura de informações */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-transparent p-4 sm:p-6 text-left">
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#dfcaa8]">
                    Sócio Fundador
                  </span>
                  <span className="block text-base sm:text-lg font-serif font-bold text-[#f4f5f7]">
                    {company.founder}
                  </span>
                  <span className="block text-xs text-[#9ca3af]">
                    Pós-Graduado em Direito e Processo do Trabalho (UNICURITIBA)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
