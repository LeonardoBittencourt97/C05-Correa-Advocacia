import { Shield, Clock, Award, Users } from "lucide-react";

export function BenefitsBar() {
  const benefits = [
    {
      icon: Shield,
      title: "Sigilo Profissional Total",
      description: "Protegido por lei. Nada chega ao seu empregador.",
    },
    {
      icon: Clock,
      title: "Análise Prévia Rápida",
      description: "Triagem documental sem burocracia no WhatsApp.",
    },
    {
      icon: Award,
      title: "12 Anos de Excelência",
      description: "Foco especializado em bancários e horas extras.",
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Acompanhamento direto e transparente com o advogado titular.",
    },
  ];

  return (
    <section className="py-10 bg-slate-100/80 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#a37a44] dark:text-[#dfcaa8] shadow-sm shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
