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
    sub: "Sem autonomia de gestão real, mas com jornadas diárias extenuantes não pagas",
  },
  {
    id: "burnout_assedio",
    label: "Burnout, Doença Ocupacional ou Assédio",
    sub: "Cobranças abusivas de metas, adoecimento psicológico ou físico pelo trabalho",
  },
  {
    id: "rescisao_justacausa",
    label: "Rescisão Incorreta ou Demissão Injusta",
    sub: "Valores não pagos, FGTS não recolhido ou justa causa aplicada de forma arbitrária",
  },
  {
    id: "equiparacao",
    label: "Equiparação Salarial ou Desvio de Função",
    sub: "Exercendo as mesmas funções que outros colegas mas recebendo remuneração menor",
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
    <section id="orientacao" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="rounded-3xl p-6 sm:p-10 card-elevated shadow-xl transition-all">
        
        {/* Header da Seção de Diagnóstico */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-[#a37a44] dark:text-[#dfcaa8] font-bold uppercase tracking-wider mb-2.5">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Diagnóstico Preliminar em 3 Passos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Descubra em segundos se você tem direitos a receber.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Disposição vertical rápida: selecione sua opção e receba a orientação no WhatsApp.
          </p>
        </div>

        {/* Indicador de Passos */}
        <div className="flex items-center justify-between max-w-xs mx-auto mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                  step === s
                    ? "bg-[#a37a44] dark:bg-[#c5a880] text-white dark:text-slate-950 ring-4 ring-[#c5a880]/20"
                    : step > s
                    ? "bg-[#25D366] text-white"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              <span className={`text-xs font-bold ${step === s ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
                Passo {s}
              </span>
              {s < 3 && <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-800 mx-1" />}
            </div>
          ))}
        </div>

        {/* ETAPA 1 - DISPOSIÇÃO VERTICAL FLUÍDA */}
        {step === 1 && (
          <div className="space-y-3 animate-fade-in max-w-2xl mx-auto">
            <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-3">
              1. Qual é o seu segmento profissional?
            </h3>
            <div className="flex flex-col gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelect("category", cat.label, 2)}
                  className="p-4 rounded-xl text-left bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#a37a44] dark:hover:border-[#c5a880] hover:bg-white dark:hover:bg-slate-900 transition-all group cursor-pointer"
                >
                  <p className="font-bold text-slate-900 dark:text-white group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] flex items-center justify-between text-sm sm:text-base">
                    <span>{cat.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{cat.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 2 */}
        {step === 2 && (
          <div className="space-y-3 animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                ← Voltar
              </button>
              <h3 className="text-base font-bold text-slate-900 dark:text-white text-center">
                2. Qual situação você mais enfrenta?
              </h3>
              <div className="w-8" />
            </div>
            <div className="flex flex-col gap-2.5">
              {SITUATIONS.map((sit) => (
                <button
                  key={sit.id}
                  onClick={() => handleSelect("situation", sit.label, 3)}
                  className="p-4 rounded-xl text-left bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#a37a44] dark:hover:border-[#c5a880] hover:bg-white dark:hover:bg-slate-900 transition-all group cursor-pointer"
                >
                  <p className="font-bold text-slate-900 dark:text-white group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] flex items-center justify-between text-sm sm:text-base">
                    <span>{sit.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{sit.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 3 */}
        {step === 3 && (
          <div className="space-y-3 animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                ← Voltar
              </button>
              <h3 className="text-base font-bold text-slate-900 dark:text-white text-center">
                3. Qual o seu vínculo atual?
              </h3>
              <div className="w-8" />
            </div>
            <div className="flex flex-col gap-2.5">
              {TIMINGS.map((tim) => (
                <button
                  key={tim.id}
                  onClick={() => handleSelect("timing", tim.label, 4)}
                  className="p-4 rounded-xl text-left bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#a37a44] dark:hover:border-[#c5a880] hover:bg-white dark:hover:bg-slate-900 transition-all group cursor-pointer"
                >
                  <p className="font-bold text-slate-900 dark:text-white group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] flex items-center justify-between text-sm sm:text-base">
                    <span>{tim.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{tim.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 4: Conversão Imediata */}
        {step === 4 && (
          <div className="text-center py-2 space-y-4 animate-fade-in max-w-md mx-auto">
            <div className="inline-flex p-3 rounded-full bg-[#25D366]/15 text-[#25D366]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Pronto para a avaliação sigilosa!
            </h3>

            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
              <p><strong>Área:</strong> {answers.category}</p>
              <p><strong>Situação:</strong> {answers.situation}</p>
              <p><strong>Momento:</strong> {answers.timing}</p>
            </div>

            <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#a37a44] dark:text-[#dfcaa8]" />
              Sigilo profissional irrestrito (Art. 7º da OAB).
            </p>

            <a
              href={whatsappQualifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar Diagnóstico para Dr. Marcelo</span>
            </a>

            <div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white underline"
              >
                Refazer respostas
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
