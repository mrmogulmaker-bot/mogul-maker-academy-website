import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/data/articles";
import { PILLARS, COURSES } from "@/data/content";
import { CourseCard } from "@/components/CourseCard";

const formatDate = (iso) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const ArticlePage = () => {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/journal" replace />;

  const pillar = PILLARS[article.pillar];
  const relatedCourses = COURSES.filter((c) => c.pillar === article.pillar).slice(0, 3);
  const moreArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <main className="bg-[#F7F4EE]" data-testid={`article-page-${article.slug}`}>
      {/* Article header */}
      <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-16 lg:py-24 border-b border-[#202832] mma-grain">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/journal"
            data-testid="article-back-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#F7F4EE]/60 hover:text-[#C6A66B] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Insights Journal
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
              style={{ backgroundColor: `${pillar.color}4D`, color: pillar.onDarkText }}
              data-testid="article-pillar-tag"
            >
              {pillar.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6773]">
              {article.format} • {article.readingTime} • {formatDate(article.date)}
            </span>
          </div>
          <h1 className="font-display text-[clamp(30px,4.2vw,56px)] font-medium text-white tracking-[-0.02em] leading-tight">
            {article.title}
          </h1>
          <p className="mt-5 font-display italic text-lg text-[#F7F4EE]/75 leading-relaxed">
            {article.dek}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          {article.sections.map((s, i) => (
            <Reveal key={i} className="mb-12" as="section">
              <h2 className="font-display text-2xl font-medium text-[#101B2B] tracking-tight mb-4">
                {s.heading}
              </h2>
              <p className="text-base text-[#5F6773] leading-relaxed">{s.body}</p>
            </Reveal>
          ))}

          <Reveal className="mt-6 p-6 bg-white border border-[#5F6773]/20 rounded-sm">
            <p className="text-[11px] text-[#5F6773] leading-relaxed">
              Mogul Maker Academy provides entrepreneurial and financial education. Nothing in this
              journal promises or implies guaranteed wealth, investment returns, or funding
              outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related education */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-10">
            <div
              className="text-xs uppercase tracking-[0.18em] font-bold mb-2"
              style={{ color: pillar.color }}
            >
              Continue in the {pillar.name} Pillar
            </div>
            <h2 className="font-display text-[clamp(22px,2.8vw,36px)] font-medium text-[#101B2B] tracking-tight">
              Related 2027 Catalog Modules
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map((c) => (
              <CourseCard key={c.id} course={c} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* More essays */}
      {moreArticles.length > 0 && (
        <section className="bg-[#101B2B] px-6 lg:px-12 py-16 mma-grain">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-8">
              More from the Journal
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moreArticles.map((a) => {
                const p = PILLARS[a.pillar];
                return (
                  <Link
                    key={a.slug}
                    to={`/journal/${a.slug}`}
                    data-testid={`article-more-${a.slug}`}
                    className="group block bg-[#202832] border border-[#5F6773]/30 rounded-sm p-8 transition-colors hover:border-[#C6A66B]/40"
                  >
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider"
                      style={{ color: p.onDarkText }}
                    >
                      {p.name} • {a.format}
                    </span>
                    <h3 className="font-display text-xl font-medium text-white mt-3 mb-2 leading-snug">
                      {a.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#C6A66B]">
                      Read{" "}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ArticlePage;
