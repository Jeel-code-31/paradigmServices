"use client";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { articles } from "@/lib/articles";

export default function ArticlesPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedYear]);

  // Extract unique years from articles
  const availableYears = useMemo(() => {
    const years = articles.map(article => {
      const year = article.date.split(", ")[1];
      return year;
    });
    return Array.from(new Set(years)).sort((a, b) => parseInt(b) - parseInt(a));
  }, []);

  // Filter articles based on selected year
  const filteredArticles = useMemo(() => {
    if (selectedYear === "all") {
      return articles;
    }
    return articles.filter(article => article.date.includes(selectedYear));
  }, [selectedYear]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#1A3013] py-20">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-black/70 mb-4">Insights & Articles</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">Blog</h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-black/70 font-afaca leading-relaxed">
            Explore in-depth guidance, process improvements, and practical ideas that align with Paradigm's theme of precision, compliance, and measurable impact.
          </p>
        </div>
      </section>

      {/* Year Filter Buttons */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-bold text-[#1A3013] uppercase tracking-[0.2em]">Filter by Year:</span>
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                selectedYear === "all"
                      ? "bg-black text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
            >
              All Years
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                  selectedYear === year
                    ? "bg-[#1A3013] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-[#BAC291] hover:text-[#1A3013]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} {selectedYear !== "all" ? `from ${selectedYear}` : ''}
          </div>
        </div>
      </section>

      <section className="max-w-full mx-auto px-6 py-16">
        {filteredArticles.length > 0 ? (
          <>
            <div className="grid gap-10 lg:grid-cols-3">
              {visibleArticles.map((article) => (
                <article key={article.slug} className="group rounded-[2rem] bg-white shadow-2xl border border-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 to-black/10 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-black text-[#1A3013] leading-tight mb-4">{article.title}</h2>
                    <p className="text-gray-700 font-afaca leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center justify-between gap-4 text-sm text-gray-500">
                      <span>{article.date}</span>
                      <Link href={`/articles/${article.slug}`} className="inline-flex items-center rounded-full border border-[#1A3013] px-4 py-2 text-[#1A3013] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-[#1A3013] hover:text-white">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredArticles.length))}
                  className="px-10 py-4 rounded-full bg-[#1A3013] text-white font-bold uppercase tracking-[0.2em] hover:bg-[#BAC291] hover:text-[#1A3013] transition-all duration-200"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-black text-[#1A3013] mb-4">No articles found</h3>
            <p className="text-gray-600 font-afaca mb-8">No articles are available for the selected year.</p>
            <button
              onClick={() => setSelectedYear("all")}
              className="px-8 py-4 bg-[#1A3013] text-white rounded-full font-bold uppercase tracking-[0.2em] hover:bg-[#BAC291] hover:text-[#1A3013] transition-all duration-200"
            >
              View All Articles
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
