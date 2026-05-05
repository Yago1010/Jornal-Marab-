import { ArticleCard } from "@/components/article-card";
import { ContactForm } from "@/components/contact-form";
import { CookieBanner } from "@/components/cookie-banner";
import {
  FaleConoscoText,
  InstitutionalTitle,
  PoliticaPrivacidadeText,
  QuemSomosText,
} from "@/components/institutional-content";
import { PollForm } from "@/components/poll-form";
import { SiteHeader } from "@/components/site-header";
import { HOME_ARTICLES } from "@/lib/content";

export default function Home() {
  return (
    <div id="topo" className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <CookieBanner />

      <main className="mx-auto max-w-6xl px-4 py-4">
        <section className="mb-8 grid h-52 place-items-center border border-zinc-300 bg-zinc-200 text-center text-4xl font-bold text-zinc-100">
          Espaço para propaganda do banner do topo
        </section>

        <PollForm />

        <section id="materias" className="mt-10 border-y border-green-700 py-8">
          <h2 className="mb-4 text-2xl font-bold text-green-700">Destaques</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {HOME_ARTICLES.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </section>

        <section id="quem-somos" className="mt-10 rounded border border-zinc-300 bg-white p-6">
          <InstitutionalTitle before="Quem" after="Somos" />
          <QuemSomosText framed={false} />
        </section>

        <section id="fale-conosco" className="mt-10 rounded border border-zinc-300 bg-white p-6">
          <InstitutionalTitle before="Fale" after="Conosco" />
          <FaleConoscoText />
          <ContactForm />
        </section>

        <section id="politica-de-privacidade" className="mt-10">
          <InstitutionalTitle before="Política de" after="Privacidade" />
          <PoliticaPrivacidadeText />
        </section>
      </main>
    </div>
  );
}
