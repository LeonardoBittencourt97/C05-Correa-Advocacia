import Link from "next/link";
import { MessageCircle, MapPin, Shield } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] border-t border-[#1f2533] pt-16 pb-12 text-[#9ca3af] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Apresentação */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center text-[#dfcaa8] font-serif font-bold text-xl">
                C
              </div>
              <span className="text-lg font-serif font-bold text-[#f4f5f7]">
                {company.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-md">
              {company.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0f1218] border border-[#1f2533] hover:border-[#c5a880] text-[#9ca3af] hover:text-[#dfcaa8] transition-all"
                aria-label="Acompanhe o Dr. Marcelo no Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0f1218] border border-[#1f2533] hover:border-[#c5a880] text-[#9ca3af] hover:text-[#dfcaa8] transition-all"
                aria-label="Conecte-se no LinkedIn com Dr. Marcelo"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#dfcaa8] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#especialidades" className="hover:text-[#f4f5f7] transition-colors">
                  Ações Trabalhistas Bancárias
                </Link>
              </li>
              <li>
                <Link href="/#especialidades" className="hover:text-[#f4f5f7] transition-colors">
                  Doenças Ocupacionais & Burnout
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-[#f4f5f7] transition-colors">
                  Dr. Marcelo Miguel Corrêa Junior
                </Link>
              </li>
              <li>
                <Link href="/#qualificador" className="hover:text-[#f4f5f7] transition-colors">
                  Simulador de Direitos
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-[#f4f5f7] transition-colors">
                  Página de Links / Bio
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Localização */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#dfcaa8] mb-4">
              Atendimento Direto
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {company.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </p>
              <div className="pt-2">
                <a
                  href={company.mapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-[#dfcaa8] underline hover:text-white"
                >
                  Abrir rota no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Nota de Responsabilidade OAB */}
        <div className="border-t border-[#1f2533] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
          <p>
            © {currentYear} {company.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
            Atendimento em estrita conformidade com o Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
