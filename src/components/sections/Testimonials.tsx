"use client";

import { useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  // Duplicação para permitir loop contínuo infinito
  const loopedReviews = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  // Rotação contínua automática garantida via requestAnimationFrame (não depende de CSS que possa falhar)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.75; // pixels por frame

    const step = () => {
      if (!isHovered.current && el) {
        el.scrollLeft += speed;
        // Quando rolar metade do conteúdo, reseta suavemente para o início sem o usuário perceber
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="avaliacoes"
      className="py-20 bg-white dark:bg-[#07080b] border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Prova Social */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            {/* Badge Oficial Google */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 mb-3 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Avaliações Verificadas no Google • Nota 5.0</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Quem confiou no nosso trabalho, <span className="text-[#a37a44] dark:text-[#dfcaa8]">recomenda</span>.
            </h2>
          </div>

          {/* Botões Manuais de Navegação */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => handleManualScroll("left")}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Ver avaliações anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Ver próximas avaliações"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carrossel com Scroll Automático Infinito JS */}
        <div
          className="relative"
          onMouseEnter={() => {
            isHovered.current = true;
          }}
          onMouseLeave={() => {
            isHovered.current = false;
          }}
          onTouchStart={() => {
            isHovered.current = true;
          }}
          onTouchEnd={() => {
            isHovered.current = false;
          }}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
          >
            {loopedReviews.map((review, idx) => (
              <div
                key={idx}
                className="w-[310px] sm:w-[370px] shrink-0 card-elevated rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 select-none"
              >
                <div>
                  {/* 5 Estrelas Douradas */}
                  <div className="flex items-center gap-1 mb-3 text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Texto Real da Avaliação */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic font-normal">
                    "{review.text}"
                  </p>
                </div>

                {/* Nome do Autor e Selo Google */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {review.author}
                  </h4>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Imediato no Fim da Seção */}
        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Li as avaliações no site e gostaria de solicitar uma consulta para o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] active:scale-98 transition-all shadow-md whatsapp-glow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Escritório no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
