import Link from "next/link";
import { MessageCircle, MapPin, Shield } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-[#050608] dark:text-[#9ca3af] border-t border-slate-800 dark:border-[#1f2533] pt-14 pb-10 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Apresentação */}
          <div className="space-y-3">
            <span className="text-base font-serif font-bold text-white dark:text-[#f4f5f7] block">
              {company.name}
            </span>
            <p className="text-xs leading-relaxed max-w-sm">
              {company.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 dark:bg-[#0f1218] border border-slate-700 dark:border-[#1f2533] hover:text-[#c5a880] transition-colors"
                aria-label="Instagram Dr. Marcelo"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 dark:bg-[#0f1218] border border-slate-700 dark:border-[#1f2533] hover:text-[#c5a880] transition-colors"
                aria-label="LinkedIn Dr. Marcelo"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-[#dfcaa8] mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#escritorio" className="hover:text-white transition-colors">
                  O Escritório
                </Link>
              </li>
              <li>
                <Link href="/#especialidades" className="hover:text-white transition-colors">
                  Ações Trabalhistas Bancárias
                </Link>
              </li>
              <li>
                <Link href="/#orientacao" className="hover:text-white transition-colors">
                  Orientação Confidencial
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-white transition-colors">
                  Contato & Localização
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-white transition-colors">
                  Canais de Atendimento (Bio)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato Direto */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-[#dfcaa8] mb-3">
              Atendimento
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {company.phone}
              </a>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </p>
              <div className="pt-1">
                <a
                  href={company.mapsRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 dark:text-[#dfcaa8] underline hover:text-white"
                >
                  Abrir rota no Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Final */}
        <div className="border-t border-slate-800 dark:border-[#1f2533] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {currentYear} {company.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
            Em conformidade com o Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}
