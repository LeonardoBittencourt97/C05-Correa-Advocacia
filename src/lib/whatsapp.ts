import { company, defaultWhatsAppMessage } from "./constants";

export interface LeadAnswers {
  category?: string;
  situation?: string;
  timing?: string;
}

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || defaultWhatsAppMessage;
  return `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function buildLeadQualifiedWhatsAppUrl(answers: LeadAnswers): string {
  const parts: string[] = [
    "Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e fiz a pré-qualificação do meu caso trabalhista:",
  ];

  if (answers.category) {
    parts.push(`• Minha Categoria: ${answers.category}`);
  }
  if (answers.situation) {
    parts.push(`• Situação Principal: ${answers.situation}`);
  }
  if (answers.timing) {
    parts.push(`• Situação Contratual: ${answers.timing}`);
  }

  parts.push("Gostaria de uma análise confidencial para verificar os meus direitos. Como podemos proceder?");

  return buildWhatsAppUrl(parts.join("\n"));
}
