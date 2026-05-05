import { InstitutionalTitle, QuemSomosText } from "@/components/institutional-content";
import { SiteHeader } from "@/components/site-header";

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <InstitutionalTitle before="Quem" after="Somos" />
        <QuemSomosText />
      </main>
    </div>
  );
}
