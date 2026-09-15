"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se rolou mais de 30px, ativa o fundo branco do menu
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-gray-200 shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO OFICIAL - IMAGEM PRESERVADA */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none transition-transform hover:opacity-90"
          aria-label="Ir para a página inicial"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <Image
              src="/images/logo-transparent.png"
              alt="Logo Corrêa Advocacia Especializada"
              fill
              priority
              sizes="64px"
              className="object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* NAVEGAÇÃO: CORRIGIDA PARA MODO ROLADO COM FUNDO BRANCO E TOPO SOBRE A FOTO */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs sm:text-sm font-semibold transition-colors ${
            isScrolled
              ? "text-slate-800"
              : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          }`}
        >
          <Link
            href="/#escritorio"
            className={isScrolled ? "hover:text-[#a37a44] transition-colors" : "hover:text-[#dfcaa8] transition-colors"}
          >
            O Escritório
          </Link>
          <Link
            href="/#especialidades"
            className={isScrolled ? "hover:text-[#a37a44] transition-colors" : "hover:text-[#dfcaa8] transition-colors"}
          >
            Atuação
          </Link>
          <Link
            href="/#orientacao"
            className={isScrolled ? "text-[#a37a44] hover:opacity-80 transition-opacity" : "text-[#dfcaa8] hover:text-white transition-colors"}
          >
            Orientação Confidencial
          </Link>
          <Link
            href="/#contato"
            className={isScrolled ? "hover:text-[#a37a44] transition-colors" : "hover:text-[#dfcaa8] transition-colors"}
          >
            Contato
          </Link>
        </nav>

        {/* AÇÕES NO TOPO: TEMA E BOTÃO DE WHATSAPP */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] active:scale-95 transition-all shadow-lg whatsapp-glow"
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
            className="p-2 rounded-full bg-[#25D366] text-white shadow-lg"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border transition-colors ${
              isScrolled
                ? "border-gray-200 text-slate-800 bg-white"
                : "border-white/30 text-white bg-black/40 backdrop-blur-sm"
            }`}
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE EXPANDIDO - FUNDO BRANCO FIXO */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <Link
            href="/#escritorio"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            O Escritório
          </Link>
          <Link
            href="/#especialidades"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Atuação
          </Link>
          <Link
            href="/#orientacao"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-[#a37a44]"
          >
            Orientação Confidencial
          </Link>
          <Link
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Contato
          </Link>
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg"
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
