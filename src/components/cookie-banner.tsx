"use client";

import { useState } from "react";

const CONSENT_KEY = "jornal_maraba_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(CONSENT_KEY);
  });

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div className="w-full max-w-xl rounded-lg border border-zinc-300 bg-white p-4 shadow-xl">
        <h3 className="text-lg font-bold text-zinc-900">Política de Privacidade e Cookies</h3>
        <p className="mt-2 text-sm text-zinc-700">
          Utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência no portal personalizando
          publicidades, recomendando conteúdos e oferecendo serviços. Saiba a respeito consultando a nossa página de Política de
          Privacidade.
        </p>
        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Aceitar e prosseguir
          </button>
        </div>
      </div>
    </div>
  );
}
