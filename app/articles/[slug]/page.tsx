import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = articles.find((item) => item.slug === resolvedParams.slug);
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F9FAF7]">
      <section className="bg-[#BAC291] py-20">
        <div className="max-w-5xl mx-auto px-6 text-[#1A3013]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1A3013]/70 mb-4">{article.category}</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{article.title}</h1>
          <div className="flex flex-col gap-3 text-sm md:text-base text-[#1A3013]/80">
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      <section className="max-w-auto mx-auto px-6 py-16">
        <div className=" p-10">
            <div className="space-y-6 text-gray-700 leading-relaxed font-afaca text-xl md:text-2xl">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8">
              <Link href="/articles" className="text-[#1A3013] font-bold uppercase tracking-[0.25em] hover:text-[#556a3b]">
                ← Back to Articles
              </Link>
              <div className="text-sm text-gray-500">Explore more expert content for food safety and process improvement.</div>
            </div>
          </div>
      </section>
    </main>
  );
}
