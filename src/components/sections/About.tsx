import Image from "next/image";
import { Award, GraduationCap, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { lawyerProfile, company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0c10] relative overflow-hidden border-t border-[#1f2533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Foto de Perfil do Dr. Marcelo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-card border border-[#c5a880]/30 shadow-2xl p-2.5">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#08090c]">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/perfil-marcelo-mobile.jpeg" />
                  <source media="(min-width: 641px)" srcSet="/images/perfil-marcelo-desktop.jpeg" />
                  <Image
                    src="/images/perfil-marcelo-desktop.jpeg"
                    alt="Marcelo Miguel Corrêa Junior - Perfil Profissional"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </picture>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/80 to-transparent p-6 text-center">
                  <span className="text-xs font-mono uppercase text-[#dfcaa8] tracking-wider block">
                    Advocacia Trabalhista Especializada
                  </span>
                  <p className="text-lg font-serif font-bold text-[#f4f5f7]">
                    {lawyerProfile.name}
                  </p>
                  <p className="text-xs text-[#9ca3af]">{company.oab}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biografia & Credenciais de Autoridade (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs text-[#dfcaa8] font-mono">
              <Award className="w-3.5 h-3.5 text-[#c5a880]" />
              SÓCIO FUNDADOR & EXPERIÊNCIA
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#f4f5f7] leading-tight">
              Mais de uma década defendendo quem move a <span className="gold-gradient-text">economia do país</span>.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
              {lawyerProfile.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Formação Acadêmica & Destaques */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#dfcaa8] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#c5a880]" />
                Qualificação Acadêmica & Técnica
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#f4f5f7]">
                {lawyerProfile.academic.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Garantia de Sigilo & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de uma avaliação confidencial com o senhor sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
              >
                <MessageCircle className="w-4 h-4" />
                Falar Diretamente com Dr. Marcelo
              </a>

              <span className="text-xs text-[#9ca3af] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                Sigilo absoluto em cada etapa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
