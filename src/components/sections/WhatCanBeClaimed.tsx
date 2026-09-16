import { 
  DollarSign, 
  Clock, 
  Palmtree, 
  Calendar, 
  Coins, 
  TrendingUp, 
  Moon, 
  AlertTriangle, 
  ShieldAlert, 
  HeartHandshake, 
  MessageCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const RECOVERY_ITEMS = [
  {
    icon: DollarSign,
    title: "Saldo de salário",
    desc: "Dias trabalhados no último mês que não entraram na conta ou foram descontados sem justificativa.",
  },
  {
    icon: Clock,
    title: "Aviso prévio proporcional",
    desc: "Trabalhado ou indenizado pela empresa. A lei garante 3 dias extras a cada ano completo de casa.",
  },
  {
    icon: Palmtree,
    title: "Férias vencidas e proporcionais + 1/3",
    desc: "Se a empresa não concedeu no prazo legal de 12 meses, você tem direito a receber tudo em dobro.",
  },
  {
    icon: Calendar,
    title: "13º salário proporcional",
    desc: "Cálculo exato de um doze avos por cada mês ou fração superior a 14 dias trabalhados no ano.",
  },
  {
    icon: Coins,
    title: "FGTS integral + Multa de 40%",
    desc: "Todos os depósitos que a empresa deixou de fazer durante os anos de contrato, mais a multa de 40%.",
  },
  {
    icon: TrendingUp,
    title: "Horas extras e reflexos em cascata",
    desc: "Hora extra nunca vem sozinha: ela gera reflexos diretos em férias, 13º, aviso prévio, FGTS e DSR.",
  },
  {
    icon: Moon,
    title: "Adicional noturno e hora reduzida",
    desc: "Trabalho entre 22h e 5h tem acréscimo legal de 20% e a hora é contada com 52 minutos e 30 segundos.",
  },
  {
    icon: AlertTriangle,
    title: "Insalubridade ou periculosidade",
    desc: "Adicional de 10% a 40% para quem atua exposto a agentes químicos, ruído excessivo, calor ou risco de vida.",
  },
  {
    icon: ShieldAlert,
    title: "Dano moral e assédio",
    desc: "Humilhações, cobranças desmedidas de metas, perseguições internas, isolamento ou ofensas no ambiente.",
  },
  {
    icon: HeartHandshake,
    title: "Doença ocupacional e estabilidade",
    desc: "Burnout, depressão e LER/DORT geram estabilidade de 12 meses após a alta do INSS e indenização civil.",
  },
];

export function WhatCanBeClaimed() {
  return (
    <section id="o-que-cobrar" className="py-20 bg-slate-50 dark:bg-[#07080b] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Curiosidade e Quebra de Objeção */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a37a44] dark:text-[#dfcaa8] block mb-2">
            Direitos Frequentemente Esquecidos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Quase nunca é só a rescisão.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Muita gente acredita que só perdeu o acerto final. Na prática da advocacia trabalhista, um contrato encerrado com irregularidades costuma deixar diversos valores para trás. Conheça os mais recorrentes:
          </p>
        </div>

        {/* Grid dos 10 Itens que Podem Ser Cobrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
          {RECOVERY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-elevated rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#a37a44] dark:text-[#dfcaa8] shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Box Acolhedor de Fechamento: 'Não sabe se tem direito?' */}
        <div className="mt-12 rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#0e121a] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#a37a44] dark:text-[#dfcaa8]" />
              <span>Não sabe exatamente ao que tem direito?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Você não precisa dominar a CLT. Conte em poucas palavras o que aconteceu e separe o que tiver em mãos: holerites, contrato, extrato do FGTS ou conversas de WhatsApp. Nossa equipe avalia detalhadamente o que a empresa deixou de pagar e o que é viável comprovar.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Olá, Dr. Marcelo! Li os itens que podem ser cobrados e gostaria de uma avaliação detalhada do meu contrato.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] active:scale-98 transition-all shadow-lg whatsapp-glow shrink-0 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Quero Avaliar Meu Caso</span>
          </a>
        </div>

      </div>
    </section>
  );
}
