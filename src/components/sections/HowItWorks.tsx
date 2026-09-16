import { MessageCircle, FileSearch, CheckCircle2, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const STEPS = [
  {
    number: "01",
    title: "Você conta o que aconteceu",
    desc: "Em uma conversa direta no WhatsApp, com suas próprias palavras. Sem jargões jurídicos confusos ou questionários intermináveis.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Seus documentos são analisados",
    desc: "Avaliamos holerites, contrato, cartão de ponto e conversas. É nessa etapa que identificamos o que a empresa deixou de pagar e o que é viável provar.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Você recebe uma resposta clara e honesta",
    desc: "Apresentamos o que pode ser cobrado, as chances reais do caso, o tempo médio estimado e os honorários acordados. Se não houver caso viável, você também saberá de imediato.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "O processo é ajuizado com acompanhamento contínuo",
    desc: "A ação é distribuída, você é preparado com antecedência para cada ato ou audiência e recebe relatórios periódicos. Você nunca fica sem saber o andamento.",
    icon: ShieldCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07080b] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a37a44] dark:text-[#dfcaa8] block mb-2">
            Transparência Sem Enrolação
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Como funciona na prática.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Do primeiro contato até a sentença final, você entende e acompanha cada passo com clareza.
          </p>
        </div>

        {/* 4 Passos Estruturados em Cards Horizontais/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="card-elevated rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-mono font-extrabold text-[#a37a44]/30 dark:text-[#dfcaa8]/30">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#a37a44] dark:text-[#dfcaa8]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-[#a37a44] dark:text-[#dfcaa8]">
                  <span>Etapa {step.number}</span>
                  <span>✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Imediato da Seção */}
        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de dar o primeiro passo e contar o que aconteceu no meu trabalho.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-xl hover:bg-[#20ba59] active:scale-98 transition-all whatsapp-glow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Quero Começar o Meu Caso</span>
          </a>
        </div>

      </div>
    </section>
  );
}
