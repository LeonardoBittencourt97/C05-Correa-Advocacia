import { MapPin, Navigation, Phone, Clock, Shield } from "lucide-react";
import { company } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function MapSection() {
  return (
    <section id="localizacao" className="relative py-24 bg-[#08090c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono text-[#c5a880] tracking-wider uppercase mb-2">
            Sede em Curitiba / Atendimento Nacional
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#f4f5f7]">
            Localização Estratégica no <span className="gold-gradient-text">Batel</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9ca3af]">
            Estrutura discreta e segura para atendimentos presenciais com agendamento prévio, além de suporte 100% digital em todo o Brasil.
          </p>
        </div>

        {/* Container do Mapa com Card de Informações e Botão de Rotas */}
        <div className="relative rounded-3xl overflow-hidden border border-[#1f2533] shadow-2xl min-h-[520px] flex items-center justify-center sm:justify-start">
          {/* Mapa do Google Maps como Fundo */}
          <iframe
            src={company.mapsEmbedUrl}
            title="Localização Corrêa Advocacia no Batel Curitiba"
            className="absolute inset-0 w-full h-full border-0 filter grayscale invert contrast-125 opacity-70 hover:opacity-90 transition-opacity duration-300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa do Google Maps com localização do escritório"
          />

          {/* Overlay gradiente suave para contraste e elegância */}
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#08090c] via-[#08090c]/80 to-transparent pointer-events-none" />

          {/* Card Flutuante de Localização & Ação de Rota */}
          <div className="relative z-10 m-4 sm:m-8 max-w-md w-full glass-card rounded-2xl p-6 sm:p-8 border border-[#c5a880]/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#c5a880]/10 text-[#c5a880]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#f4f5f7]">{company.name}</h3>
                <p className="text-xs text-[#9ca3af]">Marcelo Miguel Corrêa Junior</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#9ca3af] my-6 divide-y divide-[#1f2533]">
              <div className="pt-2">
                <span className="block text-[#dfcaa8] font-medium mb-0.5">Endereço:</span>
                <span>{company.address}</span>
              </div>
              <div className="pt-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c5a880]" />
                <span>Atendimento presencial com agendamento prévio</span>
              </div>
              <div className="pt-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c5a880]" />
                <span>Ambiente reservado e estacionamento próximo</span>
              </div>
            </div>

            {/* BOTÃO GRANDE DE ROTAS */}
            <div className="space-y-3">
              <a
                href={company.mapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-[#c5a880] text-[#08090c] font-bold text-sm sm:text-base hover:bg-[#dfcaa8] active:scale-98 transition-all shadow-lg gold-glow"
              >
                <Navigation className="w-5 h-5 fill-current" />
                Veja as Rotas para Chegar ao Local
              </a>

              <a
                href={buildWhatsAppUrl("Olá, Dr. Marcelo! Gostaria de agendar uma reunião presencial no escritório do Batel.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                Agendar Horário via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
