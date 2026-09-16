"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "trabalhou além da conta?",
  "assumiu responsabilidades sem a remuneração devida?",
  "teve horas extras sonegadas?",
  "foi colocado em cargo de confiança fraudulento?",
  "sofreu com metas abusivas e esgotamento?",
];

export function TypewriterHeading() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    
    // Velocidades de digitação, pausa e apagamento
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseBeforeDelete = 2400; // Tempo de leitura após digitar toda a frase

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      // Pausa com a frase completa visível para leitura
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayedText === "") {
      // Passa para a próxima frase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    } else {
      // Digitando ou apagando letra por letra
      timer = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentPhrase.substring(0, prev.length - 1);
          } else {
            return currentPhrase.substring(0, prev.length + 1);
          }
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
      <span className="block text-slate-100 font-bold mb-1">Você</span>
      <span className="text-[#dfcaa8] min-h-[3.2em] sm:min-h-[2.8em] block">
        {displayedText}
        <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-9 bg-[#c5a880] ml-1 animate-pulse align-middle" />
      </span>
    </h1>
  );
}
