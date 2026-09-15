"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, MessageCircle } from "lucide-react";
import { buildLeadQualifiedWhatsAppUrl, LeadAnswers } from "@/lib/whatsapp";

interface Option {
  id: string;
  label: string;
  sub?: string;
}

const CATEGORIES: Option[] = [
  {
    id: "bancario",
    label: "Bancário ou Financiário",
    sub: "Agências, centrais de crédito, instituições financeiras públicas ou privadas",
  },
  {
    id: "outro_setor",
    label: "Outro Setor Trabalhista / CLT",
    sub: "Comércio, indústria, saúde, serviços ou empresas de tecnologia",
  },
  {
    id: "ex_colaborador",
    label: "Ex-Colaborador em Transição",
    sub: "Dúvidas sobre rescisão, valores retidos ou direitos pendentes",
  },
];

const SITUATIONS: Option[] = [
  {
    id: "horas_confianca",
    label: "7ª e 8ª horas / Falso Cargo de Confiança",
    sub: "Sem autonomia de gestão real, mas com jornadas diárias extenuantes",
  },
  {
    id: "burnout_assedio",
    label: "Burnout, Doença Ocupacional ou Assédio",
    sub: "Cobranças abusivas de metas, adoecimento psicológico ou físico",
  },
  {
    id: "rescisao_justacausa",
    label: "Rescisão Incorreta ou Demissão Injusta",
    sub: "Valores não pagos, FGTS não recolhido ou justa causa arbitrária",
  },
  {
    id: "equiparacao",
    label: "Equiparação Salarial ou Desvio de Função",
    sub: "Exercendo as mesmas funções que outros colegas mas recebendo menos",
  },
];

const TIMINGS: Option[] = [
  {
    id: "trabalhando",
    label: "Ainda trabalho na empresa",
    sub: "Orientação 100% discreta e sigilosa. Nada chega ao conhecimento do empregador",
  },
  {
    id: "menos_2_anos",
    label: "Fui desligado há menos de 2 anos",
    sub: "Período ideal e seguro para pleitear direitos retroativos dos últimos 5 anos",
  },
  {
    id: "mais_2_anos",
    label: "Fui desligado há mais de 2 anos",
    sub: "Análise técnica de possíveis suspensões de prazo prescricional",
  },
];

export function LeadQualifier() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [answers, setAnswers] = useState<LeadAnswers>({});

  const handleSelect = (field: keyof LeadAnswers, value: string, nextStep: 1 | 2 | 3 | 4) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const whatsappQualifiedUrl = buildLeadQualifiedWhatsAppUrl(answers);

  return (
    <section id="orientacao" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="relative rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#0f1218] border border-gray-200 dark:border-[#c5a880]/30 shadow-xl overflow-hidden transition-colors">
        
        {/* Header Acolhedor */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs text-[#b28a55] dark:text-[#dfcaa8] font-mono mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            DIAGNÓSTICO JURÍDICO ACOLHEDOR & CONFIDENCIAL
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-[#f4f5f7] leading-tight">
            Conte-nos seu momento para receber uma{" "}
            <span className="gold-gradient-text">orientação sob medida</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9ca3af] mt-2">
            Em apenas 3 passos rápidos, analisamos seu contexto com discrição total e empatia.
          </p>
        </div>

        {/* Indicador de Progresso Suave */}
        <div className="flex items-center justify-between max-w-sm mx-auto mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step === s
                    ? "bg-[#b28a55] dark:bg-[#c5a880] text-white dark:text-[#08090c] ring-4 ring-[#c5a880]/20 scale-105"
                    : step > s
                    ? "bg-[#25D366] text-white"
                    : "bg-gray-100 dark:bg-[#1f2533] text-slate-500 dark:text-[#9ca3af]"
                }`}
              >
                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              <span className={`text-xs font-medium ${step === s ? "text-[#b28a55] dark:text-[#dfcaa8]" : "text-slate-500 dark:text-[#9ca3af]"}`}>
                {s === 1 ? "Atuação" : s === 2 ? "Situação" : "Momento"}
              </span>
              {s < 3 && <div className="w-6 sm:w-12 h-0.5 bg-gray-200 dark:bg-[#1f2533] mx-1" />}
            </div>
          ))}
        </div>

        {/* ETAPA 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900 dark:text-[#f4f5f7] text-center mb-4">
              1. Qual é a sua área de atuação profissional?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelect("category", cat.label, 2)}
                  className="p-5 rounded-2xl text-left bg-slate-50 dark:bg-[#08090c] border border-gray-200 dark:border-[#1f2533] hover:border-[#c5a880] hover:bg-white dark:hover:bg-[#151a24] transition-all group cursor-pointer shadow-sm"
                >
                  <p className="font-serif font-bold text-slate-900 dark:text-[#f4f5f7] group-hover:text-[#b28a55] dark:group-hover:text-[#dfcaa8] flex items-center justify-between text-sm sm:text-base">
                    {cat.label}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-slate-500 dark:text-[#9ca3af] mt-2 leading-relaxed">{cat.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 dark:text-[#9ca3af] hover:text-slate-900 dark:hover:text-[#dfcaa8] transition-colors"
              >
                ← Voltar
              </button>
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900 dark:text-[#f4f5f7] text-center">
                2. Qual situação mais se aproxima do que você vivencia?
              </h3>
              <div className="w-10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SITUATIONS.map((sit) => (
                <button
                  key={sit.id}
                  onClick={() => handleSelect("situation", sit.label, 3)}
                  className="p-5 rounded-2xl text-left bg-slate-50 dark:bg-[#08090c] border border-gray-200 dark:border-[#1f2533] hover:border-[#c5a880] hover:bg-white dark:hover:bg-[#151a24] transition-all group cursor-pointer shadow-sm"
                >
                  <p className="font-serif font-bold text-slate-900 dark:text-[#f4f5f7] group-hover:text-[#b28a55] dark:group-hover:text-[#dfcaa8] flex items-center justify-between text-sm sm:text-base">
                    {sit.label}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-slate-500 dark:text-[#9ca3af] mt-2 leading-relaxed">{sit.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 3 */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-slate-500 dark:text-[#9ca3af] hover:text-slate-900 dark:hover:text-[#dfcaa8] transition-colors"
              >
                ← Voltar
              </button>
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900 dark:text-[#f4f5f7] text-center">
                3. Como está o seu momento atual na empresa?
              </h3>
              <div className="w-10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {TIMINGS.map((tim) => (
                <button
                  key={tim.id}
                  onClick={() => handleSelect("timing", tim.label, 4)}
                  className="p-5 rounded-2xl text-left bg-slate-50 dark:bg-[#08090c] border border-gray-200 dark:border-[#1f2533] hover:border-[#c5a880] hover:bg-white dark:hover:bg-[#151a24] transition-all group cursor-pointer shadow-sm"
                >
                  <p className="font-serif font-bold text-slate-900 dark:text-[#f4f5f7] group-hover:text-[#b28a55] dark:group-hover:text-[#dfcaa8] flex items-center justify-between text-sm sm:text-base">
                    {tim.label}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-slate-500 dark:text-[#9ca3af] mt-2 leading-relaxed">{tim.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 4: Conclusão */}
        {step === 4 && (
          <div className="text-center py-2 space-y-5 animate-fade-in max-w-lg mx-auto">
            <div className="inline-flex p-3 rounded-full bg-[#25D366]/15 text-[#25D366]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-[#f4f5f7]">
              Seu panorama preliminar está pronto!
            </h3>

            <div className="bg-slate-50 dark:bg-[#08090c] border border-gray-200 dark:border-[#c5a880]/30 rounded-2xl p-4 text-left text-xs sm:text-sm text-slate-700 dark:text-[#d1d5db] space-y-2">
              <p><strong className="text-[#b28a55] dark:text-[#dfcaa8]">Área:</strong> {answers.category}</p>
              <p><strong className="text-[#b28a55] dark:text-[#dfcaa8]">Situação:</strong> {answers.situation}</p>
              <p><strong className="text-[#b28a55] dark:text-[#dfcaa8]">Momento:</strong> {answers.timing}</p>
            </div>

            <p className="text-xs text-slate-500 dark:text-[#9ca3af] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#b28a55] dark:text-[#c5a880]" />
              Atendimento direto, estritamente sigiloso e individual.
            </p>

            <a
              href={whatsappQualifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Receber Orientação com Dr. Marcelo</span>
            </a>

            <div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 dark:text-[#9ca3af] hover:text-[#b28a55] underline"
              >
                Revisar respostas
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
