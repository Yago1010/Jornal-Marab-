import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  editorial: string;
  href: string;
};

export function ArticleCard({ title, excerpt, editorial, href }: Props) {
  return (
    <article className="rounded border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-green-700">{editorial}</p>
      <h3 className="mb-2 text-lg font-bold text-zinc-900">{title}</h3>
      <p className="mb-4 text-sm text-zinc-700">{excerpt}</p>
      <Link href={href} className="text-sm font-semibold text-blue-700 hover:underline">
        Ler matéria
      </Link>
    </article>
  );
}
