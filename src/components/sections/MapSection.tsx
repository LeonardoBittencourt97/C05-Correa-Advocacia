import { MapPin, Navigation, Phone, Clock, Shield } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function MapSection() {
  return (
    <section id="contato" className="relative py-24 bg-slate-50 dark:bg-[#08090c] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Contato Minimalista */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-mono text-[#b28a55] dark:text-[#c5a880] tracking-wider uppercase mb-2">
            Canais de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-[#f4f5f7]">
            Contato & <span className="gold-gradient-text">Localização</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#9ca3af]">
            Atendimento presencial no Batel com hora marcada ou 100% digital em todo o Brasil.
          </p>
        </div>

        {/* Container do Mapa com Card de Contato */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-[#1f2533] shadow-2xl min-h-[500px] flex items-center justify-center sm:justify-start">
          
          {/* Iframe do Google Maps */}
          <iframe
            src={company.mapsEmbedUrl}
            title="Localização Corrêa Advocacia no Batel Curitiba"
            className="absolute inset-0 w-full h-full border-0 filter grayscale contrast-125 opacity-70 hover:opacity-90 transition-opacity duration-300 dark:invert"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa do Google Maps com localização do escritório"
          />

          {/* Overlay gradiente suave para leitura */}
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:from-[#08090c] dark:via-[#08090c]/85 dark:to-transparent pointer-events-none" />

          {/* Card Flutuante de Informações de Contato & Rotas */}
          <div className="relative z-10 m-4 sm:m-8 max-w-md w-full glass-card rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-[#c5a880]/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#c5a880]/15 text-[#b28a55] dark:text-[#c5a880]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-[#f4f5f7]">{company.name}</h3>
                <p className="text-xs text-slate-500 dark:text-[#9ca3af]">Dr. {company.founder}</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-[#9ca3af] my-6 divide-y divide-gray-200 dark:divide-[#1f2533]">
              <div className="pt-2">
                <span className="block text-[#b28a55] dark:text-[#dfcaa8] font-semibold mb-0.5">Endereço:</span>
                <span>{company.address}</span>
              </div>
              <div className="pt-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#b28a55] dark:text-[#c5a880]" />
                <span>Atendimento de Segunda a Sexta, das 09h às 18h</span>
              </div>
              <div className="pt-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#b28a55] dark:text-[#c5a880]" />
                <span>Sigilo e privacidade garantidos</span>
              </div>
            </div>

            {/* BOTÃO GRANDE DE ROTAS */}
            <div className="space-y-3">
              <a
                href={company.mapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#b28a55] dark:bg-[#c5a880] text-white dark:text-[#08090c] font-bold text-sm hover:opacity-90 active:scale-98 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Veja as Rotas para Chegar ao Local</span>
              </a>

              <a
                href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de falar sobre o meu caso pelo canal de contato do site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Contato Imediato via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
