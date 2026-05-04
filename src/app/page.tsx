import { ArticleCard } from "@/components/article-card";
import { CookieBanner } from "@/components/cookie-banner";
import { PollForm } from "@/components/poll-form";
import { SiteHeader } from "@/components/site-header";
import { HOME_ARTICLES } from "@/lib/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <CookieBanner />

      <main className="mx-auto max-w-6xl px-4 py-4">
        <section className="mb-8 h-52 border border-zinc-300 bg-zinc-200 text-center text-4xl font-bold text-zinc-100 grid place-items-center">
          Espaço para propaganda do banner do topo
        </section>

        <PollForm />

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-green-700">Destaques</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {HOME_ARTICLES.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
