import { InstitutionalTitle, PoliticaPrivacidadeText } from "@/components/institutional-content";
import { SiteHeader } from "@/components/site-header";

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <InstitutionalTitle before="Política de" after="Privacidade" />
        <PoliticaPrivacidadeText />
      </main>
    </div>
  );
}
