"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#08090c]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#1f2533]/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO OFICIAL - APENAS A LOGO, SEM O TEXTO AO LADO CONFORME SOLICITADO */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none transition-transform hover:opacity-90"
          aria-label="Ir para a página inicial - Corrêa Advocacia Especializada"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <Image
              src="/images/logo-transparent.png"
              alt="Logo Corrêa Advocacia Especializada"
              fill
              priority
              sizes="64px"
              className="object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* NAVEGAÇÃO MINIMALISTA COM 'CONTATO' EM VEZ DE 'BATEL/ROTAS' */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-slate-600 dark:text-[#9ca3af]">
          <Link href="/#escritorio" className="hover:text-[#b28a55] dark:hover:text-[#dfcaa8] transition-colors">
            O Escritório
          </Link>
          <Link href="/#especialidades" className="hover:text-[#b28a55] dark:hover:text-[#dfcaa8] transition-colors">
            Atuação
          </Link>
          <Link href="/#orientacao" className="text-[#b28a55] dark:text-[#dfcaa8] font-semibold hover:opacity-80 transition-opacity">
            Orientação Confidencial
          </Link>
          <Link href="/#contato" className="hover:text-[#b28a55] dark:hover:text-[#dfcaa8] transition-colors">
            Contato
          </Link>
        </nav>

        {/* AÇÕES NO TOPO: BOTÃO CLARO/ESCURO + WHATSAPP */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
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
        <div className="flex md:hidden items-center gap-2.5">
          <ThemeToggle />
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
            className="p-2 rounded-lg border border-gray-200 dark:border-[#1f2533] text-slate-700 dark:text-[#9ca3af] hover:bg-gray-100 dark:hover:bg-[#151a24]"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE MINIMALISTA */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#08090c] border-b border-gray-200 dark:border-[#1f2533] px-6 py-6 space-y-4 animate-fade-in shadow-xl">
          <Link
            href="/#escritorio"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-slate-800 dark:text-[#f4f5f7] hover:text-[#b28a55]"
          >
            O Escritório
          </Link>
          <Link
            href="/#especialidades"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-slate-800 dark:text-[#f4f5f7] hover:text-[#b28a55]"
          >
            Atuação
          </Link>
          <Link
            href="/#orientacao"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-[#b28a55] dark:text-[#dfcaa8] font-semibold"
          >
            Orientação Confidencial
          </Link>
          <Link
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-slate-800 dark:text-[#f4f5f7] hover:text-[#b28a55]"
          >
            Contato
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
