"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
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

        {/* NAVEGAÇÃO: PADRÃO, COMPLETA E COM SUBMENUS — TEXTO SEMPRE ESCURO */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-semibold text-slate-900">
          {/* Item 1: O Escritório com Submenu incluindo Dr. Marcelo */}
          <div className="relative group py-2">
            <button
              className="flex items-center gap-1 focus:outline-none cursor-pointer hover:text-[#a37a44] transition-colors"
            >
              <span>O Escritório</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu Escritório */}
            <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-gray-100 text-slate-800 space-y-1">
                <Link
                  href="/#escritorio"
                  className="block px-3 py-2 rounded-xl text-xs font-medium hover:bg-amber-50 hover:text-[#a37a44] transition-colors"
                >
                  <span className="font-bold block text-slate-900">Sobre o Escritório</span>
                  <span className="text-[11px] text-slate-500">12 anos de história e sede no Batel</span>
                </Link>
                <Link
                  href="/#advogado"
                  className="block px-3 py-2 rounded-xl text-xs font-medium hover:bg-amber-50 hover:text-[#a37a44] transition-colors"
                >
                  <span className="font-bold block text-slate-900">Dr. Marcelo Miguel Corrêa Junior</span>
                  <span className="text-[11px] text-slate-500">Advogado titular e sócio-fundador</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Item 2: Casos e Direitos com Submenu */}
          <div className="relative group py-2">
            <button
              className="flex items-center gap-1 focus:outline-none cursor-pointer hover:text-[#a37a44] transition-colors"
            >
              <span>Seus Direitos</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu Seus Direitos */}
            <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-gray-100 text-slate-800 space-y-1">
                <Link
                  href="/#especialidades"
                  className="block px-3 py-2 rounded-xl text-xs font-medium hover:bg-amber-50 hover:text-[#a37a44] transition-colors"
                >
                  <span className="font-bold block text-slate-900">Casos Estratégicos</span>
                  <span className="text-[11px] text-slate-500">Horas extras, Burnout, cargos de confiança</span>
                </Link>
                <Link
                  href="/#o-que-cobrar"
                  className="block px-3 py-2 rounded-xl text-xs font-medium hover:bg-amber-50 hover:text-[#a37a44] transition-colors"
                >
                  <span className="font-bold block text-slate-900">O Que Pode Ser Cobrado</span>
                  <span className="text-[11px] text-slate-500">10 verbas além da rescisão simples</span>
                </Link>
                <Link
                  href="/#prazo"
                  className="block px-3 py-2 rounded-xl text-xs font-medium hover:bg-amber-50 hover:text-[#a37a44] transition-colors"
                >
                  <span className="font-bold block text-slate-900">Atenção ao Prazo</span>
                  <span className="text-[11px] text-slate-500">2 anos para agir (Art. 7º da CF)</span>
                </Link>
                <Link
                  href="/#como-funciona"
                  className="block px-3 py-2 rounded-xl text-xs font-medium hover:bg-amber-50 hover:text-[#a37a44] transition-colors"
                >
                  <span className="font-bold block text-slate-900">Como Funciona o Processo</span>
                  <span className="text-[11px] text-slate-500">Do primeiro contato até a sentença</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Item 3: Avaliações */}
          <Link
            href="/#avaliacoes"
            className="hover:text-[#a37a44] transition-colors"
          >
            Avaliações
          </Link>

          {/* Item 4: Dúvidas (FAQ) */}
          <Link
            href="/#faq"
            className="hover:text-[#a37a44] transition-colors"
          >
            Dúvidas
          </Link>

          {/* Item 5: Orientação Jurídica */}
          <Link
            href="/#orientacao"
            className="text-[#a37a44] hover:opacity-80 transition-opacity font-bold"
          >
            Orientação Jurídica
          </Link>

          {/* Item 6: Contato & Sede */}
          <Link
            href="/#contato"
            className="hover:text-[#a37a44] transition-colors"
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
            className="p-2 rounded-lg border border-gray-200 text-slate-800 bg-white transition-colors"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE EXPANDIDO - FUNDO BRANCO FIXO COM TODAS AS SEÇÕES */}
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
            href="/#advogado"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Dr. Marcelo Miguel Corrêa Junior
          </Link>
          <Link
            href="/#especialidades"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Casos Estratégicos
          </Link>
          <Link
            href="/#o-que-cobrar"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            O Que Pode Ser Cobrado
          </Link>
          <Link
            href="/#prazo"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Atenção ao Prazo (2 Anos)
          </Link>
          <Link
            href="/#como-funciona"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Como Funciona na Prática
          </Link>
          <Link
            href="/#avaliacoes"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Avaliações de Clientes
          </Link>
          <Link
            href="/#faq"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Dúvidas Frequentes
          </Link>
          <Link
            href="/#orientacao"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-[#a37a44]"
          >
            Orientação Jurídica
          </Link>
          <Link
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#a37a44]"
          >
            Contato e Localização
          </Link>

          <div className="pt-3 border-t border-gray-100">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
