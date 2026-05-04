import { ArticleCard } from "@/components/article-card";
import { CookieBanner } from "@/components/cookie-banner";
import { ContactForm } from "@/components/contact-form";
import { PollForm } from "@/components/poll-form";
import { SiteHeader } from "@/components/site-header";
import { HOME_ARTICLES } from "@/lib/content";
import { FALE_CONOSCO_TEXT, POLITICA_PRIVACIDADE_TEXT, QUEM_SOMOS_TEXT } from "@/lib/landing-texts";

export default function Home() {
  return (
    <div id="topo" className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <CookieBanner />

      <main className="mx-auto max-w-6xl px-4 py-4">
        <section className="mb-8 h-52 border border-zinc-300 bg-zinc-200 text-center text-4xl font-bold text-zinc-100 grid place-items-center">
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
          <h2 className="mb-4 text-3xl font-bold text-green-700">Quem Somos</h2>
          <div className="space-y-4 text-zinc-800" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            {QUEM_SOMOS_TEXT.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="font-semibold">Depende de NÓS. Carlos Santos - Diretor Fundador</p>
          </div>
        </section>

        <section id="fale-conosco" className="mt-10 rounded border border-zinc-300 bg-white p-6">
          <h2 className="mb-2 text-3xl font-bold text-green-700">Fale Conosco</h2>
          {FALE_CONOSCO_TEXT.map((text) => (
            <p key={text} className="mb-2 text-zinc-700">
              {text}
            </p>
          ))}
          <p className="mb-6 text-zinc-700" />
          <ContactForm />
        </section>

        <section id="politica-de-privacidade" className="mt-10 rounded border border-zinc-300 bg-white p-6">
          <h2 className="mb-4 text-3xl font-bold text-green-700">Política de Privacidade</h2>
          <div className="space-y-4 text-zinc-800" style={{ fontFamily: "Tahoma, Arial, sans-serif" }}>
            {POLITICA_PRIVACIDADE_TEXT.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
