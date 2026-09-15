"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Shield } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090c]/85 backdrop-blur-md border-b border-[#1f2533]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Marca / Identidade */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center text-[#dfcaa8] font-serif font-bold text-xl group-hover:scale-105 transition-all">
            C
          </div>
          <div>
            <span className="block text-base sm:text-lg font-serif font-bold text-[#f4f5f7] leading-tight">
              {company.shortName}
            </span>
            <span className="block text-[10px] sm:text-xs text-[#9ca3af] uppercase tracking-wider">
              Advocacia Especializada
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#9ca3af]">
          <Link href="/#especialidades" className="hover:text-[#dfcaa8] transition-colors">
            Especialidades
          </Link>
          <Link href="/#sobre" className="hover:text-[#dfcaa8] transition-colors">
            Sobre o Advogado
          </Link>
          <Link href="/#qualificador" className="hover:text-[#dfcaa8] transition-colors">
            Pré-Qualificação
          </Link>
          <Link href="/#faq" className="hover:text-[#dfcaa8] transition-colors">
            Dúvidas Frequentes
          </Link>
          <Link href="/#localizacao" className="hover:text-[#dfcaa8] transition-colors">
            Localização
          </Link>
        </nav>

        {/* CTA Principal WhatsApp (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20ba59] active:scale-95 transition-all whatsapp-glow"
          >
            <MessageCircle className="w-4 h-4" />
            Consulta no WhatsApp
          </a>
        </div>

        {/* Menu Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#25D366] text-white"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-[#1f2533] text-[#9ca3af] hover:text-[#f4f5f7]"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1218] border-b border-[#1f2533] px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/#especialidades"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Especialidades
          </Link>
          <Link
            href="/#sobre"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Sobre o Advogado
          </Link>
          <Link
            href="/#qualificador"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Pré-Qualificação de Caso
          </Link>
          <Link
            href="/#faq"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Dúvidas Frequentes
          </Link>
          <Link
            href="/#localizacao"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Localização & Rotas
          </Link>
          <Link
            href="/links"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm text-[#c5a880] font-medium"
          >
            Página de Links (Bio)
          </Link>
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Dr. Marcelo no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
