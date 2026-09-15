"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
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
    sub: "Agências, centrais de crédito, instituições financeiras",
  },
  {
    id: "outro_setor",
    label: "Outro Setor Trabalhista / CLT",
    sub: "Comércio, indústria, serviços ou tecnologia",
  },
  {
    id: "ex_colaborador",
    label: "Ex-Funcionário com pendências",
    sub: "Dúvidas sobre verbas rescisórias ou direitos não pagos",
  },
];

const SITUATIONS: Option[] = [
  {
    id: "horas_confianca",
    label: "7ª e 8ª horas / Cargo de Confiança fraudulento",
    sub: "Trabalhava além da jornada legal sem autonomia real",
  },
  {
    id: "burnout_assedio",
    label: "Burnout, Doença Ocupacional ou Assédio",
    sub: "Cobranças abusivas de metas, adoecimento psicológico ou físico",
  },
  {
    id: "rescisao_justacausa",
    label: "Rescisão incorreta ou Justa Causa indevida",
    sub: "Valores não pagos, FGTS retido ou demissão arbitrária",
  },
  {
    id: "equiparacao",
    label: "Equiparação Salarial ou Desvio de Função",
    sub: "Mesmas atribuições que colegas mas recebendo menos",
  },
];

const TIMINGS: Option[] = [
  {
    id: "trabalhando",
    label: "Ainda trabalho na empresa",
    sub: "Consulta 100% sigilosa, sem contato com o empregador",
  },
  {
    id: "menos_2_anos",
    label: "Fui desligado há menos de 2 anos",
    sub: "Dentro do prazo legal constitucional para propositura de ação",
  },
  {
    id: "mais_2_anos",
    label: "Fui desligado há mais de 2 anos",
    sub: "Requer análise detalhada de possíveis causas suspensivas",
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
    <section id="qualificador" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative glass-card rounded-2xl p-6 sm:p-10 border border-[#1f2533] shadow-2xl">
        {/* Header do Módulo */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs text-[#dfcaa8] font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            PRÉ-QUALIFICAÇÃO EM 3 CLIQUES
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#f4f5f7]">
            Descubra se você tem <span className="gold-gradient-text">direitos a reivindicar</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-2">
            Responda as etapas rápidas abaixo para enviar seu caso estruturado diretamente ao WhatsApp do Dr. Marcelo Corrêa.
          </p>
        </div>

        {/* Barra de Progresso */}
        <div className="flex items-center justify-between max-w-md mx-auto mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step === s
                    ? "bg-[#c5a880] text-[#08090c] ring-4 ring-[#c5a880]/20"
                    : step > s
                    ? "bg-[#25D366] text-white"
                    : "bg-[#1f2533] text-[#9ca3af]"
                }`}
              >
                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              <span className={`text-xs ${step === s ? "text-[#dfcaa8] font-medium" : "text-[#9ca3af]"}`}>
                {s === 1 ? "Categoria" : s === 2 ? "Situação" : "Prazo"}
              </span>
              {s < 3 && <div className="w-10 sm:w-16 h-0.5 bg-[#1f2533] mx-2" />}
            </div>
          ))}
        </div>

        {/* ETAPA 1: Categoria */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-medium text-[#f4f5f7] text-center mb-4">
              Passo 1: Qual é o seu segmento de atuação profissional?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelect("category", cat.label, 2)}
                  className="p-5 rounded-xl text-left bg-[#08090c]/70 border border-[#1f2533] hover:border-[#c5a880] hover:bg-[#0f1218] transition-all group cursor-pointer"
                >
                  <p className="font-semibold text-[#f4f5f7] group-hover:text-[#dfcaa8] flex items-center justify-between">
                    {cat.label}
                    <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-2">{cat.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 2: Situação Principal */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#9ca3af] hover:text-[#f4f5f7] underline"
              >
                ← Voltar
              </button>
              <h3 className="text-lg font-medium text-[#f4f5f7] text-center">
                Passo 2: Qual a principal irregularidade enfrentada?
              </h3>
              <div className="w-12" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITUATIONS.map((sit) => (
                <button
                  key={sit.id}
                  onClick={() => handleSelect("situation", sit.label, 3)}
                  className="p-5 rounded-xl text-left bg-[#08090c]/70 border border-[#1f2533] hover:border-[#c5a880] hover:bg-[#0f1218] transition-all group cursor-pointer"
                >
                  <p className="font-semibold text-[#f4f5f7] group-hover:text-[#dfcaa8] flex items-center justify-between">
                    {sit.label}
                    <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-2">{sit.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 3: Prazo / Vínculo Atual */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-[#9ca3af] hover:text-[#f4f5f7] underline"
              >
                ← Voltar
              </button>
              <h3 className="text-lg font-medium text-[#f4f5f7] text-center">
                Passo 3: Qual é o seu momento atual na empresa?
              </h3>
              <div className="w-12" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TIMINGS.map((tim) => (
                <button
                  key={tim.id}
                  onClick={() => handleSelect("timing", tim.label, 4)}
                  className="p-5 rounded-xl text-left bg-[#08090c]/70 border border-[#1f2533] hover:border-[#c5a880] hover:bg-[#0f1218] transition-all group cursor-pointer"
                >
                  <p className="font-semibold text-[#f4f5f7] group-hover:text-[#dfcaa8] flex items-center justify-between">
                    {tim.label}
                    <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-2">{tim.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 4: Conclusão & CTA para WhatsApp */}
        {step === 4 && (
          <div className="text-center py-4 space-y-6 animate-fade-in max-w-xl mx-auto">
            <div className="inline-flex p-3 rounded-full bg-[#25D366]/10 text-[#25D366]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif text-[#f4f5f7]">
              Seu resumo prévio está pronto!
            </h3>
            <div className="bg-[#08090c]/80 border border-[#1f2533] rounded-xl p-4 text-left text-xs sm:text-sm text-[#9ca3af] space-y-2">
              <p><strong className="text-[#f4f5f7]">Categoria:</strong> {answers.category}</p>
              <p><strong className="text-[#f4f5f7]">Situação:</strong> {answers.situation}</p>
              <p><strong className="text-[#f4f5f7]">Vínculo:</strong> {answers.timing}</p>
            </div>

            <p className="text-xs text-[#9ca3af] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              Atendimento direto, estritamente sigiloso e sem compromisso.
            </p>

            <a
              href={whatsappQualifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base sm:text-lg shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
            >
              <MessageCircle className="w-6 h-6" />
              Enviar Caso para o Dr. Marcelo no WhatsApp
            </a>

            <div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#9ca3af] hover:text-[#f4f5f7] underline"
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
