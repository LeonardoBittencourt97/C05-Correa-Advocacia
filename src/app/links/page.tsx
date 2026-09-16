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
    <main className="min-h-screen bg-[#08090c] text-[#f4f5f7] py-8 md:py-12 px-4 sm:px-8 flex flex-col justify-between relative overflow-hidden">
      {/* Imagem de Fundo Nítida Responsiva (Desktop e Mobile) - Sem blur e sem opacidade */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Desktop: Imagem horizontal nítida */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/images/header-desktop.jpeg"
            alt="Fundo Corrêa Advocacia Especializada"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Mobile: Imagem vertical nítida */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/images/header-mobile.jpeg"
            alt="Fundo Corrêa Advocacia Especializada"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* BLOCO DE CONTEÚDO: No Desktop fica no canto esquerdo; No Mobile fica centralizado */}
      <div className="w-full max-w-sm mx-auto md:mx-0 md:ml-8 lg:ml-16 xl:ml-24 relative z-10 flex flex-col items-center space-y-6 my-auto bg-slate-950/85 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-[#c5a880]/30 shadow-2xl">
        
        {/* LOGO OFICIAL TRANSPARENTE COM LINK PARA HOME */}
        <Link
          href="/"
          className="relative w-24 h-24 group focus:outline-none transition-transform hover:scale-105"
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="Logo Corrêa Advocacia"
            fill
            priority
            sizes="96px"
            className="object-contain filter brightness-110 drop-shadow-lg"
          />
        </Link>

        {/* Título e Subtítulo Minimalista */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-serif font-bold text-[#f4f5f7]">
            {company.name}
          </h1>
          <p className="text-xs text-[#dfcaa8] font-mono">
            {lawyerProfile.name} • {company.oab}
          </p>
          <p className="text-[11px] text-[#d1d5db] max-w-xs mx-auto pt-1">
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
            className="flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com Dr. Marcelo no WhatsApp</span>
          </a>

          {/* 2. Orientação Passo a Passo */}
          <Link
            href="/#orientacao"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-xl bg-[#0f1218] border border-[#c5a880]/40 text-[#dfcaa8] hover:bg-[#151a24] text-xs font-semibold transition-all shadow-md"
          >
            <HeartHandshake className="w-4 h-4 text-[#c5a880]" />
            <span>Entenda Seus Direitos (3 Passos)</span>
          </Link>

          {/* 3. Rotas Maps */}
          <a
            href={company.mapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-xl bg-[#0f1218] border border-[#1f2533] hover:border-[#c5a880]/40 text-[#f4f5f7] hover:bg-[#151a24] text-xs font-medium transition-all"
          >
            <Navigation className="w-4 h-4 text-[#c5a880]" />
            <span>Ver Rotas para o Escritório (Batel)</span>
          </a>

          {/* 4. Site Completo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 w-full py-2.5 px-5 rounded-xl bg-[#08090c] border border-[#1f2533] text-[#9ca3af] hover:text-[#f4f5f7] text-xs transition-all"
          >
            <Globe className="w-4 h-4 text-[#9ca3af]" />
            <span>Acessar Site Institucional</span>
          </Link>
        </div>

        {/* Redes Sociais Discretas */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#0f1218] border border-[#1f2533] text-[#9ca3af] hover:text-[#dfcaa8] transition-all"
            aria-label="Instagram do Dr. Marcelo"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={company.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#0f1218] border border-[#1f2533] text-[#9ca3af] hover:text-[#dfcaa8] transition-all"
            aria-label="LinkedIn do Dr. Marcelo"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Rodapé Minimalista: alinhado à esquerda no desktop e centralizado no mobile */}
      <footer className="w-full text-center md:text-left md:ml-8 lg:ml-16 xl:ml-24 text-[10px] text-white/90 pt-4 relative z-10 flex items-center justify-center md:justify-start gap-1.5 drop-shadow">
        <Shield className="w-3 h-3 text-[#c5a880]" />
        <span>Batel, Curitiba/PR • Atendimento em Todo o Brasil</span>
      </footer>
    </main>
  );
}
