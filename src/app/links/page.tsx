import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Globe, HeartHandshake, Navigation, Shield } from "lucide-react";
import { company, lawyerProfile } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: `Canais Oficiais | ${company.name}`,
  description: `Canal direto para orientação em Direito Trabalhista e Bancário com Dr. Marcelo Miguel Corrêa Junior.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#f4f5f7] py-12 px-4 sm:px-8 flex flex-col justify-between relative overflow-hidden">
      {/* 1. FUNDO MOBILE: Imagem vertical com overlay e blur originais */}
      <div className="block md:hidden absolute inset-0 z-0 select-none pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/header-mobile.jpeg"
            alt="Fundo Corrêa Advocacia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
      </div>

      {/* 2. FUNDO DESKTOP: Imagem horizontal 100% NÍTIDA, sem blur e sem opacidade */}
      <div className="hidden md:block absolute inset-0 z-0 select-none pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/header-desktop.jpeg"
            alt="Fundo Corrêa Advocacia Especializada"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* CARD DE CONTEÚDO (FUNDO BRANCO TANTO NO MOBILE QUANTO NO DESKTOP):
          - No Mobile: Centralizado (mx-auto).
          - No Desktop: Alinhado no lado direito da tela. */}
      <div className="w-full max-w-sm mx-auto md:mx-0 md:ml-auto md:mr-8 lg:mr-16 xl:mr-24 relative z-10 flex flex-col items-center space-y-6 my-auto bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-2xl">
        
        {/* LOGO OFICIAL TRANSPARENTE COM LINK PARA HOME */}
        <Link
          href="/"
          className="relative w-24 h-24 sm:w-28 sm:h-28 group focus:outline-none transition-transform hover:scale-105"
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="Logo Corrêa Advocacia"
            fill
            priority
            sizes="112px"
            className="object-contain filter drop-shadow-sm"
          />
        </Link>

        {/* Título e Subtítulo */}
        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            {company.name}
          </h1>
          <p className="text-xs text-[#99733e] font-semibold font-mono">
            {lawyerProfile.name} • {company.oab}
          </p>
          <p className="text-xs text-slate-600 max-w-xs mx-auto pt-1">
            Atendimento sigiloso em Direito Trabalhista e Bancário.
          </p>
        </div>

        {/* LISTA DE BOTÕES ESSENCIAIS & LIMPOS */}
        <div className="w-full space-y-3 pt-1">
          {/* 1. WhatsApp Direto */}
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Acessei os canais oficiais pelo Instagram e gostaria de uma orientação confidencial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] active:scale-98 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com Dr. Marcelo no WhatsApp</span>
          </a>

          {/* 2. Orientação Passo a Passo */}
          <Link
            href="/#orientacao"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-xl bg-slate-900 border border-slate-800 text-[#dfcaa8] hover:bg-slate-800 text-xs font-semibold shadow-md transition-all"
          >
            <HeartHandshake className="w-4 h-4 text-[#c5a880]" />
            <span>Entenda Seus Direitos (3 Passos)</span>
          </Link>

          {/* 3. Rotas Maps */}
          <a
            href={company.mapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-[#a37a44] hover:bg-slate-50 text-xs font-semibold shadow-sm transition-all"
          >
            <Navigation className="w-4 h-4 text-[#a37a44]" />
            <span>Ver Rotas para o Escritório (Batel)</span>
          </a>

          {/* 4. Site Completo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 w-full py-2.5 px-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100 text-xs font-medium transition-all"
          >
            <Globe className="w-4 h-4 text-slate-500" />
            <span>Acessar Site Institucional</span>
          </Link>
        </div>

        {/* Redes Sociais Discretas */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#a37a44] hover:border-[#a37a44] hover:bg-white transition-all shadow-sm"
            aria-label="Instagram do Dr. Marcelo"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={company.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#a37a44] hover:border-[#a37a44] hover:bg-white transition-all shadow-sm"
            aria-label="LinkedIn do Dr. Marcelo"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Rodapé:
          - No Mobile: Centralizado.
          - No Desktop: Alinhado à direita acompanhando o card. */}
      <footer className="w-full text-center md:text-right md:ml-auto md:mr-8 lg:mr-16 xl:mr-24 text-[10px] text-white pt-6 relative z-10 flex items-center justify-center md:justify-end gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-medium">
        <Shield className="w-3 h-3 text-[#dfcaa8]" />
        <span>Batel, Curitiba/PR • Atendimento em Todo o Brasil</span>
      </footer>
    </main>
  );
}
