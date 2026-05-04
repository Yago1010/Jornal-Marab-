"use client";

import { FormEvent, useState } from "react";

import { BRAZIL_STATES, NAV_EDITORIAS, PARA_CITIES } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Enviando mensagem...");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (response.ok) {
      event.currentTarget.reset();
    }
    setStatus(data.message ?? "Não foi possível enviar sua mensagem.");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded border border-zinc-300 bg-white p-4">
      <div>
        <label className="mb-1 block font-semibold">Nome</label>
        <input name="name" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2" required />
        <p className="mt-1 text-xs text-zinc-500">* O campo acima é de preenchimento obrigatório</p>
      </div>

      <div>
        <label className="mb-1 block font-semibold">E-mail</label>
        <input name="email" type="email" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2" required />
        <p className="mt-1 text-xs text-zinc-500">* O campo acima é de preenchimento obrigatório</p>
      </div>

      <div>
        <label className="mb-1 block font-semibold">WhatsApp de contato</label>
        <input name="whatsapp" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2" />
      </div>

      <div>
        <label className="mb-1 block font-semibold">Municípios do Pará</label>
        <select name="city" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2">
          <option value="">Selecione</option>
          {PARA_CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-zinc-500">* O campo acima é de preenchimento obrigatório</p>
      </div>

      <div>
        <label className="mb-1 block font-semibold">Estados do Brasil</label>
        <select name="state" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2">
          <option value="">Selecione</option>
          {BRAZIL_STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-zinc-500">* O campo acima é de preenchimento obrigatório</p>
      </div>

      <div>
        <label className="mb-1 block font-semibold">Assunto</label>
        <select name="subject" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2" required>
          <option value="PUBLICIDADE">Publicidade</option>
          <option value="SUGERIR_PAUTAS">Sugerir Pautas</option>
          <option value="FAZER_DENUNCIA">Fazer Denúncia</option>
          <option value="ELOGIOS">Elogios</option>
        </select>
        <p className="mt-1 text-xs text-zinc-500">* O campo acima é de preenchimento obrigatório</p>
      </div>

      <div>
        <label className="mb-1 block font-semibold">Editoria</label>
        <select name="editorial" className="w-full rounded border border-zinc-300 bg-zinc-100 p-2">
          <option value="">Selecione</option>
          {NAV_EDITORIAS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block font-semibold">Mensagem</label>
        <textarea name="message" rows={5} className="w-full rounded border border-zinc-300 bg-zinc-100 p-2" required />
        <p className="mt-1 text-xs text-zinc-500">* O campo acima é de preenchimento obrigatório</p>
      </div>

      <button type="submit" className="rounded bg-green-700 px-4 py-2 font-semibold text-white">
        Enviar
      </button>

      {status ? <p className="text-sm text-zinc-700">{status}</p> : null}
    </form>
  );
}
