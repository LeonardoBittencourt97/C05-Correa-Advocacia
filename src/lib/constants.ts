export const company = {
  name: "Corrêa Advocacia Especializada",
  shortName: "Corrêa Advocacia",
  founder: "Marcelo Miguel Corrêa Junior",
  role: "Advogado Trabalhista | Especialista em Ações Trabalhistas Bancárias",
  oab: "OAB/PR",
  experienceYears: 12,
  description:
    "Advocacia trabalhista especializada com atuação estratégica na defesa de bancários e trabalhadores de todo o Brasil. Foco em cargos de confiança fraudulentos, 7ª e 8ª horas, assédio moral e doenças ocupacionais.",
  domain: "correaadvocacia.com.br",
  phone: "(41) 99919-4144",
  phoneRaw: "5541999194144",
  address: "R. Francisco Rocha, 198 - Batel, Curitiba - PR, 80420-130",
  neighborhood: "Batel",
  city: "Curitiba",
  state: "PR",
  cep: "80420-130",
  mapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Francisco+Rocha,+198+-+Batel,+Curitiba+-+PR,+80420-130",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.208753229615!2d-49.29056252378808!3d-25.431267432929948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4091e843c9b%3A0xe5aefea424c529a8!2sR.%20Francisco%20Rocha%2C%20198%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080420-130!5e0!3m2!1spt-BR!2sbr!4v1710500000000!5m2!1spt-BR!2sbr",
  social: {
    instagram: "https://www.instagram.com/marcelomcorrea.adv/",
    linkedin:
      "https://www.linkedin.com/in/marcelo-miguel-corr%C3%AAa-junior-2a3092b6/",
  },
} as const;

export const defaultWhatsAppMessage =
  "Olá, Dr. Marcelo! Vim pelo site da Corrêa Advocacia e gostaria de solicitar uma análise confidencial para o meu caso trabalhista.";

export const services = [
  {
    id: "bancarios",
    title: "Ações Trabalhistas Bancárias",
    tag: "Especialidade Principal",
    description:
      "Atuação focada na recuperação de direitos sonegados a bancários e financiários: 7ª e 8ª horas extras, quebra de caixa e gratificações.",
    highlights: [
      "Fraude no enquadramento de cargo de confiança (Art. 224, § 2º da CLT)",
      "Recuperação das 7ª e 8ª horas diárias trabalhadas",
      "Integração de PLR e gratificações suprimidas",
      "Diferenças salariais por substituições e transferências",
    ],
  },
  {
    id: "cargo-de-confianca",
    title: "Descaracterização de Cargo de Confiança",
    tag: "Direito Trabalhista",
    description:
      "Muitos profissionais são nomeados 'gerentes' ou 'coordenadores' apenas no papel, sem poder de mando real, exclusivamente para afastar o pagamento de horas extras legítimas.",
    highlights: [
      "Comprovação de ausência de poderes de gestão efetivos",
      "Cobrança de horas extras integrais com reflexos em FGTS, 13º e férias",
      "Proteção e respaldo em caso de sobrejornada contínua",
    ],
  },
  {
    id: "doencas-ocupacionais",
    title: "Doenças Ocupacionais & Burnout",
    tag: "Saúde do Trabalhador",
    description:
      "Defesa de trabalhadores acometidos por esgotamento profissional decorrente de metas abusivas, cobranças desmedidas ou assédio.",
    highlights: [
      "Síndrome de Burnout, transtornos de ansiedade e depressão",
      "LER/DORT causadas por esforços repetitivos e ergonomia inadequada",
      "Indenizações por danos morais, materiais e pensão vitalícia",
      "Estabilidade provisória acidentária no emprego",
    ],
  },
  {
    id: "assedio-moral",
    title: "Assédio Moral & Metas Abusivas",
    tag: "Integridade Profissional",
    description:
      "Combate judicial contra situações humilhantes, perseguições internas, rankings vexatórios de metas e isolamento de funcionários.",
    highlights: [
      "Pedido de rescisão indireta (demissão forçada do empregador)",
      "Recebimento de todas as verbas rescisórias como demissão sem justa causa",
      "Indenizações exemplares por danos morais",
    ],
  },
  {
    id: "equiparacao-salarial",
    title: "Equiparação Salarial & Desvio de Função",
    tag: "Justiça Remuneratória",
    description:
      "Exercer a mesma função de colegas recebendo remuneração inferior é ilegal. Reivindicamos as diferenças salariais retroativas devidas.",
    highlights: [
      "Identificação de paradigmas que exerciam o mesmo trabalho",
      "Diferenças salariais com reflexos em todas as verbas trabalhistas",
      "Reenquadramento de função",
    ],
  },
  {
    id: "rescisao-verbas",
    title: "Verbas Rescisórias & Justa Causa Injusta",
    tag: "Segurança Financeira",
    description:
      "Análise minuciosa de rescisões contratuais para apuração de valores não pagos e reversão de demissões por justa causa indevidas.",
    highlights: [
      "Reversão de justa causa com liberação imediata do FGTS + 40%",
      "Acesso ao seguro-desemprego e pagamento de aviso prévio",
      "Multa dos artigos 467 e 477 da CLT por atraso rescisório",
    ],
  },
] as const;

export const lawyerProfile = {
  name: "Marcelo Miguel Corrêa Junior",
  headline: "Advogado Trabalhista Especializado | Fundador",
  academic: [
    "Pós-Graduado em Direito do Trabalho e Processual do Trabalho pela UNICURITIBA",
    "Bacharel em Direito pelas Faculdades Opet",
    "Mais de 12 anos de atuação ininterrupta em litígios trabalhistas complexos",
    "Fluente em Português e Espanhol",
  ],
  bio: [
    "Sócio fundador da Corrêa Advocacia Especializada, Marcelo Miguel Corrêa Junior construiu sua carreira pautado pela defesa técnica, estratégica e intransigente dos direitos dos trabalhadores.",
    "Com expressiva atuação na condução de processos envolvendo bancários e financiários de instituições públicas e privadas em todo o território nacional, o escritório se destaca pela excelência na descaracterização de falsos cargos de confiança e na reparação de danos decorrentes de doenças ocupacionais e assédio moral.",
    "Todo atendimento é pautado pelo rigor técnico, sigilo profissional irrestrito e uma abordagem humanizada voltada para resultados sólidos.",
  ],
} as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Contato Sigiloso via WhatsApp",
    description:
      "Você inicia a conversa de forma 100% segura e privada. Nenhuma informação compartilhada sai do escritório.",
  },
  {
    number: "02",
    title: "Análise Técnica Documental",
    description:
      "Avaliamos seus holerites, contratos, registros de ponto e histórico funcional para identificar fraudes e valores sonegados.",
  },
  {
    number: "03",
    title: "Definição da Estratégia Jurídica",
    description:
      "Apresentamos um plano de ação claro, com estimativa realista de direitos pleiteados e estratégia probatória personalizada.",
  },
  {
    number: "04",
    title: "Acompanhamento Ágil & Transparente",
    description:
      "Você acompanha cada andamento com relatórios claros e comunicação direta com quem conduz o seu caso.",
  },
] as const;

export const faqs = [
  {
    question: "A empresa onde ainda trabalho vai saber que consultei um advogado?",
    answer:
      "Não. O sigilo entre advogado e cliente é protegido por lei (Art. 7º, XIX do Estatuto da Advocacia). Nossa análise inicial é totalmente confidencial, sem nenhum contato com o seu empregador atual.",
  },
  {
    question: "Qual é o prazo legal para entrar com uma ação trabalhista?",
    answer:
      "Pela CLT e Constituição, o trabalhador tem até 2 (dois) anos após a extinção do contrato de trabalho para propor a ação, podendo cobrar os direitos sonegados dos últimos 5 (cinco) anos contados da data de distribuição do processo.",
  },
  {
    question: "Como funciona o atendimento para quem não reside em Curitiba?",
    answer:
      "Nosso escritório realiza atendimentos 100% digitais com plena validade jurídica em todo o Brasil. As reuniões acontecem via videoconferência segura, e os documentos são enviados e assinados digitalmente com comodidade.",
  },
  {
    question: "Sou bancário e recebo gratificação de função. Tenho direito a 7ª e 8ª horas?",
    answer:
      "Se você não possui poder de mando, gestão real, equipe subordinada com poder de punição/admissão ou procuração do banco com amplos poderes, o enquadramento no art. 224, § 2º da CLT é frequentemente fraudulento. Nesses casos, a jornada legal é de 6 horas, e você tem direito a receber as horas excedentes como extras com acréscimo legal.",
  },
  {
    question: "Tive Síndrome de Burnout por causa de metas abusivas. Quais são os meus direitos?",
    answer:
      "O Burnout é reconhecido pela OMS e pelos tribunais trabalhistas como doença ocupacional equiparada a acidente de trabalho. Você pode ter direito à estabilidade no emprego por 12 meses após a alta do INSS, indenização por danos morais, ressarcimento de despesas médicas e até pensão mensal em casos de incapacidade.",
  },
] as const;
