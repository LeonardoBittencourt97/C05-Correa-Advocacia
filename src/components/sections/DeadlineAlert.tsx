import { AlertCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function DeadlineAlert() {
  return (
    <section id="prazo" className="py-16 bg-white dark:bg-[#07080b] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card de Urgência Ética e Jurídica */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 dark:from-slate-900/80 dark:via-[#0c1017] dark:to-slate-900/40 border border-amber-200/80 dark:border-[#a37a44]/30 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Bloco Numérico de Destaque '2 Anos' */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white dark:bg-[#08090c] border border-amber-200 dark:border-slate-800 shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950/60 text-[#a37a44] dark:text-[#dfcaa8] flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                2 Anos
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a37a44] dark:text-[#dfcaa8] mt-1">
                Prazo Máximo Para Agir
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Após a saída, o prazo prescricional corre sem pausas.
              </p>
            </div>

            {/* Explicação Constitucional e Alívio da Objeção 'Adiar para depois' */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-xs font-bold text-amber-900 dark:text-amber-200">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Atenção Crítica aos Prazos da Lei</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Você tem 2 anos após a saída da empresa para buscar a Justiça do Trabalho.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dentro desse prazo, é possível cobrar os direitos sonegados dos <strong>últimos 5 anos</strong> trabalhados, conforme o art. 7º, inciso XXIX, da Constituição Federal. 
              </p>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Passados 2 anos do encerramento do contrato, o direito prescreve e a dívida da empresa deixa de poder ser exigida judicialmente, mesmo que fosse elevada. Por isso, deixar para depois quase sempre custa caro.
              </p>

              {/* Botão de Verificação de Tempo */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de verificar se ainda estou dentro do prazo para entrar com ação trabalhista.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm hover:opacity-90 active:scale-98 transition-all shadow-md"
                >
                  <span>Ver Se Ainda Dá Tempo no Meu Caso</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  Análise gratuita e imediata do seu prazo.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
