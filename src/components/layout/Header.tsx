"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090c]/90 backdrop-blur-md border-b border-[#1f2533]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO OFICIAL COM LINK PARA PÁGINA INICIAL */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none transition-transform hover:opacity-90"
          aria-label="Ir para a página inicial - Corrêa Advocacia Especializada"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src="/images/logo-transparent.png"
              alt="Logo Corrêa Advocacia Especializada"
              fill
              priority
              sizes="56px"
              className="object-contain filter brightness-110 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-base font-serif font-bold text-[#f4f5f7] tracking-tight leading-none">
              {company.shortName}
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-[#dfcaa8] uppercase mt-1">
              Advocacia Especializada
            </span>
          </div>
        </Link>

        {/* NAVEGAÇÃO MINIMALISTA & DIRETA */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-[#9ca3af]">
          <Link href="/#escritorio" className="hover:text-[#dfcaa8] transition-colors">
            O Escritório
          </Link>
          <Link href="/#especialidades" className="hover:text-[#dfcaa8] transition-colors">
            Atuação
          </Link>
          <Link href="/#orientacao" className="text-[#dfcaa8] hover:text-white transition-colors">
            Orientação Confidencial
          </Link>
          <Link href="/#localizacao" className="hover:text-[#dfcaa8] transition-colors">
            Batel / Rotas
          </Link>
        </nav>

        {/* CTA WHATSAPP MINIMALISTA & ELEGANTE */}
        <div className="hidden md:flex items-center">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#20ba59] active:scale-95 transition-all shadow-lg whatsapp-glow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#25D366] text-white shadow-md"
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

      {/* MENU MOBILE MINIMALISTA */}
      {isOpen && (
        <div className="md:hidden bg-[#08090c] border-b border-[#1f2533] px-6 py-6 space-y-4 animate-fade-in">
          <Link
            href="/#escritorio"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            O Escritório
          </Link>
          <Link
            href="/#especialidades"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Atuação em Direito Trabalhista
          </Link>
          <Link
            href="/#orientacao"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-[#dfcaa8] font-medium"
          >
            Orientação Confidencial
          </Link>
          <Link
            href="/#localizacao"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-[#f4f5f7] hover:text-[#dfcaa8]"
          >
            Localização & Rotas no Batel
          </Link>
          <Link
            href="/links"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-[#c5a880] font-medium"
          >
            Canais de Atendimento (Bio)
          </Link>
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com Dr. Marcelo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
