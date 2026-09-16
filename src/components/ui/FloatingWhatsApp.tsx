"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissedTooltip, setDismissedTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o botão após 150px de rolagem
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Exibe tooltip persuasivo ao atingir 40% da página
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0 && window.scrollY / scrollTotal > 0.35 && !dismissedTooltip) {
        setShowTooltip(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissedTooltip]);

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowTooltip(false);
    setDismissedTooltip(true);
  };

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Tooltip Persuasivo */}
      {showTooltip && (
        <div className="relative mr-3 hidden sm:flex items-center bg-[#0f1218] border border-[#c5a880]/30 text-xs text-[#f4f5f7] py-2.5 px-4 rounded-xl shadow-2xl animate-fade-in">
          <div className="flex flex-col">
            <span className="font-semibold text-[#dfcaa8]">Atendimento Direto & Sigiloso</span>
            <span className="text-[#9ca3af]">Tire dúvidas sobre seu caso com Dr. Marcelo</span>
          </div>
          <button
            onClick={handleCloseTooltip}
            className="ml-3 text-[#9ca3af] hover:text-[#f4f5f7] p-1 transition-colors"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Triângulo de encaixe visual */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-[#0f1218]" />
        </div>
      )}

      {/* Botão de WhatsApp Estático e Discreto (Compliance OAB) */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        aria-label="Iniciar conversa confidencial com o Dr. Marcelo Corrêa pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />
      </a>
    </aside>
  );
}
