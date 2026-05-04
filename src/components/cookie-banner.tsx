"use client";

import { useState } from "react";

export function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="border-y border-blue-300 bg-blue-50 py-2 text-center text-xs text-zinc-700">
      Utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência no portal personalizando publicidades, recomendando conteúdos e oferecendo serviços. Saiba a respeito consultando a nossa página de Política de Privacidade.
      <button
        type="button"
        onClick={() => setAccepted(true)}
        className="ml-3 rounded bg-blue-600 px-2 py-1 text-[10px] font-bold text-white"
      >
        OK. PROSSEGUIR!!
      </button>
    </div>
  );
}
