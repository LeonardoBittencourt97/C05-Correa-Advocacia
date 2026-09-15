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
    sub: "Comércio, indústria, área médica, serviços ou empresas de tecnologia",
  },
  {
    id: "ex_colaborador",
    label: "Ex-Colaborador em Transição",
    sub: "Dúvidas sobre verbas rescisórias, valores retidos ou direitos pendentes",
  },
];

const SITUATIONS: Option[] = [
  {
    id: "horas_confianca",
    label: "7ª e 8ª horas / Falso Cargo de Confiança",
    sub: "Sem autonomia real ou poder de mando, mas com jornadas exaustivas não remuneradas",
  },
  {
    id: "burnout_assedio",
    label: "Burnout, Esgotamento ou Pressão Excessiva",
    sub: "Cobranças humilhantes de metas, ansiedade, depressão ou adoecimento no trabalho",
  },
  {
    id: "rescisao_justacausa",
    label: "Rescisão Incorreta ou Demissão Injusta",
    sub: "Valores não pagos, FGTS não recolhido ou justa causa aplicada de forma arbitrária",
  },
  {
    id: "equiparacao",
    label: "Equiparação Salarial ou Desvio de Função",
    sub: "Exercendo as mesmas responsabilidades de outros profissionais recebendo menos",
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
    <section id="orientacao" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Luz ambiente dourada de fundo */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative glass-card rounded-3xl p-6 sm:p-12 border border-[#c5a880]/30 shadow-2xl overflow-hidden">
        {/* Header Acolhedor e Humanizado */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs text-[#dfcaa8] font-mono mb-4">
            <HeartHandshake className="w-4 h-4 text-[#c5a880]" />
            DIAGNÓSTICO JURÍDICO ACOLHEDOR & CONFIDENCIAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#f4f5f7] leading-tight">
            Conte-nos seu momento para receber uma{" "}
            <span className="gold-gradient-text">orientação sob medida</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-3">
            Sabemos que enfrentar injustiças no trabalho gera angústia. Em apenas 3 passos rápidos, analisamos seu contexto com discrição total e empatia.
          </p>
        </div>

        {/* Indicador de Progresso Suave */}
        <div className="flex items-center justify-between max-w-md mx-auto mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                  step === s
                    ? "bg-[#c5a880] text-[#08090c] ring-4 ring-[#c5a880]/25 scale-110"
                    : step > s
                    ? "bg-[#25D366] text-white"
                    : "bg-[#1f2533] text-[#9ca3af]"
                }`}
              >
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              <span className={`text-xs font-medium ${step === s ? "text-[#dfcaa8]" : "text-[#9ca3af]"}`}>
                {s === 1 ? "Sua Atuação" : s === 2 ? "O Que Enfrenta" : "Momento Atual"}
              </span>
              {s < 3 && <div className="w-8 sm:w-16 h-0.5 bg-[#1f2533] mx-2" />}
            </div>
          ))}
        </div>

        {/* ETAPA 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-serif text-[#f4f5f7] text-center mb-6">
              1. Qual é a sua área de atuação profissional?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelect("category", cat.label, 2)}
                  className="p-6 rounded-2xl text-left bg-[#08090c]/80 border border-[#1f2533] hover:border-[#c5a880] hover:bg-[#0f1218] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer shadow-lg"
                >
                  <p className="font-serif font-bold text-[#f4f5f7] group-hover:text-[#dfcaa8] flex items-center justify-between text-base">
                    {cat.label}
                    <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#c5a880] group-hover:translate-x-1.5 transition-all" />
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-2.5 leading-relaxed">{cat.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#9ca3af] hover:text-[#dfcaa8] transition-colors"
              >
                ← Voltar
              </button>
              <h3 className="text-lg font-serif text-[#f4f5f7] text-center">
                2. Qual situação mais se aproxima do que você vivencia?
              </h3>
              <div className="w-12" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITUATIONS.map((sit) => (
                <button
                  key={sit.id}
                  onClick={() => handleSelect("situation", sit.label, 3)}
                  className="p-6 rounded-2xl text-left bg-[#08090c]/80 border border-[#1f2533] hover:border-[#c5a880] hover:bg-[#0f1218] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer shadow-lg"
                >
                  <p className="font-serif font-bold text-[#f4f5f7] group-hover:text-[#dfcaa8] flex items-center justify-between text-base">
                    {sit.label}
                    <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#c5a880] group-hover:translate-x-1.5 transition-all" />
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-2.5 leading-relaxed">{sit.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 3 */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-[#9ca3af] hover:text-[#dfcaa8] transition-colors"
              >
                ← Voltar
              </button>
              <h3 className="text-lg font-serif text-[#f4f5f7] text-center">
                3. Como está o seu vínculo de trabalho hoje?
              </h3>
              <div className="w-12" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TIMINGS.map((tim) => (
                <button
                  key={tim.id}
                  onClick={() => handleSelect("timing", tim.label, 4)}
                  className="p-6 rounded-2xl text-left bg-[#08090c]/80 border border-[#1f2533] hover:border-[#c5a880] hover:bg-[#0f1218] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer shadow-lg"
                >
                  <p className="font-serif font-bold text-[#f4f5f7] group-hover:text-[#dfcaa8] flex items-center justify-between text-base">
                    {tim.label}
                    <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#c5a880] group-hover:translate-x-1.5 transition-all" />
                  </p>
                  <p className="text-xs text-[#9ca3af] mt-2.5 leading-relaxed">{tim.sub}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 4: Conclusão Humanizada */}
        {step === 4 && (
          <div className="text-center py-4 space-y-6 animate-fade-in max-w-xl mx-auto">
            <div className="inline-flex p-4 rounded-full bg-[#25D366]/15 text-[#25D366] shadow-xl">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#f4f5f7]">
              Seu panorama está organizado!
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af]">
              Reunimos seus pontos principais para que o Dr. Marcelo possa compreender seu caso com a atenção e prioridade que ele merece:
            </p>

            <div className="bg-[#08090c]/90 border border-[#c5a880]/30 rounded-2xl p-5 text-left text-xs sm:text-sm text-[#d1d5db] space-y-2.5 shadow-inner">
              <p><strong className="text-[#dfcaa8]">Área de Atuação:</strong> {answers.category}</p>
              <p><strong className="text-[#dfcaa8]">Situação Vivenciada:</strong> {answers.situation}</p>
              <p><strong className="text-[#dfcaa8]">Condição Contratual:</strong> {answers.timing}</p>
            </div>

            <p className="text-xs text-[#9ca3af] flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              Atendimento seguro, individual e protegido pelo sigilo da advocacia.
            </p>

            <a
              href={whatsappQualifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base sm:text-lg shadow-2xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
            >
              <MessageCircle className="w-6 h-6" />
              Receber Orientação com Dr. Marcelo no WhatsApp
            </a>

            <div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#9ca3af] hover:text-[#dfcaa8] underline transition-colors"
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
