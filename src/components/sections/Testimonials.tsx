"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Transição automática a cada 5 segundos
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="avaliacoes"
      className="py-20 bg-white dark:bg-[#07080b] border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Prova Social com Selo Google 5 Estrelas */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          
          {/* Badge Oficial Google Reviews */}
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
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Veja o que dizem os trabalhadores que tiveram suas demandas conduzidas com técnica e empatia.
          </p>
        </div>

        {/* Carrossel Interativo de Depoimentos */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Card do Depoimento Atual */}
          <div className="card-elevated rounded-3xl p-7 sm:p-10 shadow-lg min-h-[220px] flex flex-col justify-between transition-all duration-300">
            <div>
              {/* 5 Estrelas Douradas */}
              <div className="flex items-center gap-1 mb-4 text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Texto do Depoimento Real */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic font-normal">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            {/* Autor e Data */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].date} no Google
                </p>
              </div>

              {/* Botões de Navegação Anterior / Próximo */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicadores de Pontinhos (Dots) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-[#a37a44] dark:bg-[#dfcaa8]"
                    : "w-2 bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>

          {/* CTA Imediato de Confiança */}
          <div className="mt-8 text-center">
            <a
              href={buildWhatsAppUrl("Olá, Dr. Marcelo! Li as avaliações no site e gostaria de solicitar uma consulta para o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] active:scale-98 transition-all shadow-md whatsapp-glow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Avaliar Meu Caso com Segurança</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
