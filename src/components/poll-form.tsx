"use client";

import { FormEvent, useState } from "react";

import { COUNCILORS } from "@/lib/content";

type PollPerformance = "BOM" | "RAZOAVEL" | "RUIM";

export function PollForm() {
  const [performance, setPerformance] = useState<PollPerformance>("BOM");
  const [selectedCouncilors, setSelectedCouncilors] = useState<string[]>([]);
  const [topCouncilor, setTopCouncilor] = useState("");
  const [status, setStatus] = useState<string>("");

  const toggleCouncilor = (name: string) => {
    setSelectedCouncilors((current) => {
      if (current.includes(name)) return current.filter((item) => item !== name);
      if (current.length >= 5) return current;
      return [...current, name];
    });
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("Enviando voto...");

    const response = await fetch("/api/poll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ performance, selectedCouncilors, topCouncilor }),
    });

    const payload = await response.json();
    setStatus(payload.message ?? "Não foi possível registrar seu voto.");
  };

  return (
    <form id="enquete" onSubmit={onSubmit} className="mx-auto mt-8 w-full max-w-2xl border-y-2 border-green-700 px-4 py-6">
      <h2 className="mx-auto w-fit bg-black px-3 py-1 text-center text-lg font-black text-yellow-300">Enquete Popular</h2>
      <p className="mt-4 text-center text-sm font-semibold">O desempenho da Câmara Municipal de Marabá em 2025 foi:</p>

      <div className="mt-3 flex justify-center gap-5 text-sm font-semibold">
        <label><input type="radio" name="performance" checked={performance === "BOM"} onChange={() => setPerformance("BOM")} /> BOM</label>
        <label><input type="radio" name="performance" checked={performance === "RAZOAVEL"} onChange={() => setPerformance("RAZOAVEL")} /> RAZOÁVEL</label>
        <label><input type="radio" name="performance" checked={performance === "RUIM"} onChange={() => setPerformance("RUIM")} /> <span className="text-red-600">RUIM</span></label>
      </div>

      <p className="mt-4 text-center text-sm font-semibold">Indique de 1 até 5 vereadores de bons projetos em 2025:</p>
      <div className="mt-3 grid max-h-48 grid-cols-1 gap-1 overflow-y-auto rounded border border-zinc-300 p-2 text-sm md:grid-cols-2">
        {COUNCILORS.map((name) => (
          <label key={name}>
            <input type="checkbox" checked={selectedCouncilors.includes(name)} onChange={() => toggleCouncilor(name)} /> {name}
          </label>
        ))}
      </div>

      <p className="mt-4 text-center text-sm font-semibold">Qual o maior destaque na excelência do mandato em 2025?</p>
      <select
        className="mt-2 w-full rounded border border-zinc-300 p-2 text-sm"
        value={topCouncilor}
        onChange={(e) => setTopCouncilor(e.target.value)}
      >
        <option value="">Selecione...</option>
        {COUNCILORS.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button type="submit" className="bg-black px-4 py-1 text-lg font-black text-yellow-300">Votar</button>
        <span className="bg-black px-4 py-1 text-lg font-black text-yellow-300">Resultado</span>
      </div>

      {status ? <p className="mt-3 text-center text-sm text-zinc-700">{status}</p> : null}
    </form>
  );
}
