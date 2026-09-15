import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Globe, Sparkles, Navigation, Shield } from "lucide-react";
import { company, lawyerProfile } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: `Links Oficiais | ${company.name} - Marcelo Miguel Corrêa Junior`,
  description: `Acesse os canais diretos e agende sua análise trabalhista com o Dr. Marcelo Miguel Corrêa Junior.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#f4f5f7] py-12 px-4 flex flex-col items-center justify-between relative overflow-hidden">
      {/* Glow de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-96 bg-radial-gradient pointer-events-none" />

      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center space-y-6">
        {/* Foto de Perfil Redonda */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#c5a880] shadow-2xl p-1 bg-[#0f1218] gold-glow">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/perfil-marcelo-mobile.jpeg"
              alt={lawyerProfile.name}
              fill
              priority
              sizes="120px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Informações Principais */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-serif font-bold text-[#f4f5f7]">
            {lawyerProfile.name}
          </h1>
          <p className="text-xs text-[#dfcaa8] font-mono">
            {company.role}
          </p>
          <p className="text-[11px] text-[#9ca3af] max-w-xs mx-auto">
            Defesa estratégica para bancários e trabalhadores em todo o Brasil.
          </p>
        </div>

        {/* LISTA DE BOTÕES DE ALTA CONVERSÃO */}
        <div className="w-full space-y-3 pt-2">
          {/* BOTÃO 1: WhatsApp Direto Pulsante */}
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Vim pelo Instagram e gostaria de uma análise para o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full py-4 px-5 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar Diretamente com Dr. Marcelo</span>
          </a>

          {/* BOTÃO 2: Pré-qualificador de direitos */}
          <Link
            href="/#qualificador"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl bg-[#0f1218] border border-[#c5a880]/40 text-[#dfcaa8] hover:bg-[#151a24] text-xs sm:text-sm font-semibold transition-all shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#c5a880]" />
            <span>Simulador Trabalhista em 3 Cliques</span>
          </Link>

          {/* BOTÃO 3: Rotas no Google Maps */}
          <a
            href={company.mapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl bg-[#0f1218] border border-[#1f2533] hover:border-[#c5a880]/30 text-[#f4f5f7] hover:bg-[#151a24] text-xs sm:text-sm font-medium transition-all"
          >
            <Navigation className="w-4 h-4 text-[#c5a880]" />
            <span>Ver Rotas para o Escritório no Batel</span>
          </a>

          {/* BOTÃO 4: Visitar o Site Completo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl bg-[#0f1218] border border-[#1f2533] hover:border-[#c5a880]/30 text-[#9ca3af] hover:text-[#f4f5f7] text-xs transition-all"
          >
            <Globe className="w-4 h-4 text-[#9ca3af]" />
            <span>Acessar Site Institucional Completo</span>
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#0f1218] border border-[#1f2533] text-[#9ca3af] hover:text-[#dfcaa8] transition-all"
            aria-label="Instagram do Dr. Marcelo"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={company.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#0f1218] border border-[#1f2533] text-[#9ca3af] hover:text-[#dfcaa8] transition-all"
            aria-label="LinkedIn do Dr. Marcelo"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Rodapé Bio */}
      <footer className="w-full text-center text-[10px] text-[#6b7280] pt-8 flex items-center justify-center gap-1">
        <Shield className="w-3 h-3 text-[#c5a880]" />
        <span>{company.name} • {company.address}</span>
      </footer>
    </main>
  );
}
