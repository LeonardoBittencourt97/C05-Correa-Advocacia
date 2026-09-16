import { services } from "@/lib/constants";
import { 
  Banknote, 
  Clock, 
  FileText, 
  FileX, 
  MessageSquareWarning, 
  ShieldAlert, 
  Coins, 
  AlertTriangle, 
  CalendarClock,
  ArrowRight
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Ícones correspondentes a cada um dos 9 casos do print
const ICONS = [
  Banknote,
  Clock,
  FileText,
  FileX,
  MessageSquareWarning,
  ShieldAlert,
  Coins,
  AlertTriangle,
  CalendarClock,
];

export function Specialization() {
  return (
    <section id="especialidades" className="py-20 bg-slate-50 dark:bg-[#07080b] relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a37a44] dark:text-[#dfcaa8] block mb-2">
            Áreas de Foco Estratégico
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Em qual destas situações você se reconhece?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Análise técnica detalhada das condições contratuais e conformidade com a legislação trabalhista.
          </p>
        </div>

        {/* Grid dos 9 Casos Idêntico ao Layout do Print */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={service.id}
                className="relative bg-white dark:bg-[#0e121a] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#a37a44]/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Detalhe Dourado no Canto Superior Direito como no Print */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                  <div className="absolute transform rotate-45 bg-[#c5a880]/30 -top-4 -right-4 w-8 h-8" />
                </div>

                <div>
                  {/* Topo do Card: Ícone Dourado e Número */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[#a37a44] dark:text-[#dfcaa8]">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  {/* Título do Caso */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#a37a44] dark:group-hover:text-[#dfcaa8] transition-colors">
                    {service.title}
                  </h3>

                  {/* Descrição Curta e Direta */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Botão de Ação: 'MEU CASO →' */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={buildWhatsAppUrl(`Olá, Dr. Marcelo! Me identifiquei com o caso [${service.number} - ${service.title}]. Gostaria de entender meus direitos.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#a37a44] dark:text-[#dfcaa8] hover:text-[#785223] dark:hover:text-white uppercase tracking-wider transition-colors"
                  >
                    <span>MEU CASO</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
