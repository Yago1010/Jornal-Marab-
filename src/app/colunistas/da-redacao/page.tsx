import { SiteHeader } from "@/components/site-header";

export default function DaRedacaoPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700">Da Redação</h1>
        <h2 className="mt-2 text-xl font-semibold text-zinc-900">
          Novos veículos de comunicação são acolhidos pelo Poder Executivo e Legislativo
        </h2>
        <p className="mt-2 text-sm text-zinc-600">Por: Victor Hugo</p>

        <article className="mt-6 space-y-4 rounded border border-zinc-300 bg-white p-6 text-zinc-800">
          <p>
            Nas comemorações dos 113 anos da emancipação sociopolítica de Marabá, o lançamento do impresso Jornal da Cidade
            Marabá e do portal Jornal Marabá foi recebido por representantes do Executivo e Legislativo municipal.
          </p>
          <p>
            O posicionamento das autoridades destaca a importância de um jornalismo responsável, voltado à cidadania, ao
            comércio e às notícias de interesse coletivo.
          </p>
          <p>
            A linha editorial do portal prioriza conteúdos com utilidade pública, desenvolvimento social e empreendedorismo
            local, em sintonia com as necessidades da população marabaense.
          </p>
        </article>
      </main>
    </div>
  );
}
