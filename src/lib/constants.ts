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
    id: "rescisao-nao-paga",
    number: "01",
    title: "Rescisão não paga",
    description: "O acerto tem prazo de 10 dias. Passou disso, virou dívida da empresa com multa.",
  },
  {
    id: "hora-extra-nao-paga",
    number: "02",
    title: "Hora extra não paga",
    description: "Você ficava além do horário e o holerite continuava igual, sem o pagamento devido.",
  },
  {
    id: "sem-carteira-assinada",
    number: "03",
    title: "Sem carteira assinada",
    description: "Com horário, ordem e salário existe vínculo de emprego, mesmo sem registro formal.",
  },
  {
    id: "justa-causa-injusta",
    number: "04",
    title: "Justa causa injusta",
    description: "Sem motivo grave e provado, ela cai na justiça e todas as suas verbas rescisórias voltam.",
  },
  {
    id: "assedio-humilhacao",
    number: "05",
    title: "Assédio e humilhação",
    description: "Gritar, humilhar na frente dos outros e ameaçar gera indenização por dano moral.",
  },
  {
    id: "acidente-trabalho",
    number: "06",
    title: "Acidente e Doença de Trabalho",
    description: "No serviço, no trajeto, LER/DORT, Burnout, depressão ou problema de coluna e audição.",
  },
  {
    id: "fgts-nao-depositado",
    number: "07",
    title: "FGTS não depositado",
    description: "O depósito é obrigação de todo mês. Dá para cobrar judicialmente tudo o que faltou.",
  },
  {
    id: "risco-sem-adicional",
    number: "08",
    title: "Risco sem adicional",
    description: "Insalubridade ou periculosidade: produto químico, ruído alto, calor, energia ou moto.",
  },
  {
    id: "salario-atrasado",
    number: "09",
    title: "Salário atrasado",
    description: "Salário atrasado tem saída legal: a rescisão indireta com recebimento integral de direitos.",
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

export const testimonials = [
  {
    author: "Leticia Correa",
    role: "Cliente",
    date: "há 4 meses",
    text: "Fui muito bem atendida, com profissionalismo, clareza e atenção em cada detalhe. Um trabalho sério, conduzido com responsabilidade e respeito, transmitindo segurança durante todo o processo. Recomendo com confiança para quem busca um advogado competente e comprometido.",
    rating: 5,
  },
  {
    author: "Renato Pinheiro",
    role: "Local Guide",
    date: "há 4 meses",
    text: "Um profissional excepcional. Além da competência técnica, o Dr. Marcelo mostrou empatia, paciência e transparência em cada etapa do processo. Sempre disponível para esclarecer dúvidas, conduziu tudo com segurança e profissionalismo. Sou muito grato pelo resultado alcançado.",
    rating: 5,
  },
  {
    author: "Francielly Pecuch",
    role: "Cliente",
    date: "há 4 meses",
    text: "Excelente advogado, competente e dedicado. Demonstra grande conhecimento jurídico e muita responsabilidade em cada caso, sempre transmitindo segurança e confiança.",
    rating: 5,
  },
  {
    author: "Joao Victor",
    role: "Cliente",
    date: "há 4 meses",
    text: "Dr. Marcelo é um excelentíssimo advogado, um baita profissional. Muito atencioso, proativo e inteligentíssimo. Recomendo demais! Muito obrigado por tudo, Dr. Marcelo!",
    rating: 5,
  },
  {
    author: "Marilda da Conceição Campelli",
    role: "Cliente",
    date: "há 4 meses",
    text: "Recomendo com certeza! Excelente profissional! Ético e comprometido em resolver a situação com seriedade.",
    rating: 5,
  },
  {
    author: "Fabiany Carvinho",
    role: "Cliente",
    date: "há 4 meses",
    text: "Atencioso e exatamente competente em toda a condução processual.",
    rating: 5,
  },
] as const;
