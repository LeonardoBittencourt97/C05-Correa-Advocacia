import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Globe, HeartHandshake, Navigation, Shield } from "lucide-react";
import { company, lawyerProfile } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: `Canais de Atendimento | ${company.name} - Marcelo Miguel Corrêa Junior`,
  description: `Canal direto e acolhedor para orientação em Direito Trabalhista e Bancário com Dr. Marcelo Miguel Corrêa Junior.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#f4f5f7] py-12 px-4 flex flex-col items-center justify-between relative overflow-hidden">
      {/* Imagem de Fundo Atmosférica Suave */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20 filter blur-sm">
        <Image
          src="/images/perfil-marcelo-desktop.jpeg"
          alt="Ambiente Corrêa Advocacia"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090c]/90 via-[#08090c] to-[#08090c]" />
      </div>

      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center space-y-6">
        {/* Foto de Perfil com Anel Dourado e Efeito de Destaque */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#c5a880] shadow-2xl p-1 bg-[#0f1218] gold-glow transform hover:scale-105 transition-transform duration-500">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/perfil-marcelo-mobile.jpeg"
              alt={lawyerProfile.name}
              fill
              priority
              sizes="130px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Informações Principais Humanizadas */}
        <div className="text-center space-y-1.5">
          <h1 className="text-2xl font-serif font-bold text-[#f4f5f7] tracking-wide">
            {lawyerProfile.name}
          </h1>
          <p className="text-xs text-[#dfcaa8] font-mono font-medium tracking-wider">
            {company.role}
          </p>
          <p className="text-xs text-[#9ca3af] max-w-xs mx-auto leading-relaxed pt-1">
            Atendimento próximo, transparente e dedicado à proteção integral dos seus direitos trabalhistas.
          </p>
        </div>

        {/* LISTA DE BOTÕES DE ALTA CONVERSÃO COM MICRO-INTERAÇÕES */}
        <div className="w-full space-y-3.5 pt-2">
          {/* BOTÃO 1: WhatsApp Direto Acolhedor */}
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Encontrei seu canal oficial e gostaria de conversar de forma confidencial sobre minha situação profissional.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full py-4 px-5 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-2xl hover:bg-[#20ba59] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whatsapp-glow"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Falar Diretamente com Dr. Marcelo</span>
          </a>

          {/* BOTÃO 2: Diagnóstico e Orientação Humanizada */}
          <Link
            href="/#orientacao"
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl bg-[#0f1218]/90 backdrop-blur-md border border-[#c5a880]/50 text-[#dfcaa8] hover:bg-[#151a24] hover:border-[#dfcaa8] hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg"
          >
            <HeartHandshake className="w-4 h-4 text-[#c5a880] group-hover:scale-110 transition-transform" />
            <span>Entenda Seus Direitos (Passo a Passo)</span>
          </Link>

          {/* BOTÃO 3: Rotas no Google Maps */}
          <a
            href={company.mapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl bg-[#0f1218]/90 backdrop-blur-md border border-[#1f2533] hover:border-[#c5a880]/40 text-[#f4f5f7] hover:bg-[#151a24] hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm font-medium transition-all duration-300"
          >
            <Navigation className="w-4 h-4 text-[#c5a880] group-hover:translate-x-0.5 transition-transform" />
            <span>Traçar Rota para o Escritório (Batel)</span>
          </a>

          {/* BOTÃO 4: Visitar o Site Completo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-2xl bg-[#08090c]/80 border border-[#1f2533]/80 hover:border-[#c5a880]/30 text-[#9ca3af] hover:text-[#f4f5f7] hover:scale-[1.01] active:scale-[0.99] text-xs transition-all duration-300"
          >
            <Globe className="w-4 h-4 text-[#9ca3af]" />
            <span>Conhecer o Escritório & Casos de Sucesso</span>
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="flex items-center justify-center gap-4 pt-3">
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#0f1218] border border-[#1f2533] text-[#9ca3af] hover:text-[#dfcaa8] hover:border-[#c5a880] hover:scale-110 transition-all duration-300"
            aria-label="Instagram do Dr. Marcelo"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={company.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#0f1218] border border-[#1f2533] text-[#9ca3af] hover:text-[#dfcaa8] hover:border-[#c5a880] hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn do Dr. Marcelo"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Rodapé Bio */}
      <footer className="w-full text-center text-[10px] text-[#6b7280] pt-8 flex items-center justify-center gap-1.5">
        <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
        <span>{company.name} • Batel, Curitiba/PR • Atuação Nacional</span>
      </footer>
    </main>
  );
}
