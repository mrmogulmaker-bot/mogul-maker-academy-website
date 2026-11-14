import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, ClipboardList, Target } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { COURSES, PILLARS, LEVELS } from "@/data/content";
import { V2_PILLARS } from "@/data/v2";

const STATUS_LABELS = {
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) return <Navigate to="/learn" replace />;

  const pillar = PILLARS[course.pillar];
  const v2pillar = V2_PILLARS[course.pillar];
  const level = LEVELS[course.level];
  const related = COURSES.filter((c) => c.id !== course.id && c.pillar === course.pillar).slice(0, 3);

  return (
    <main className="bg-[#FBF6EB]" data-testid={`course-detail-${course.id}`}>
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-16 lg:py-24 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/learn"
            data-testid="course-back-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#FBF6EB]/60 hover:text-[#C29949] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Learn — The Academy
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
              style={{ backgroundColor: `${v2pillar.color}4D`, color: v2pillar.onDark }}
              data-testid="course-detail-pillar-tag"
            >
              {pillar.name} Pillar
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#C29949]/15 text-[#C29949]" data-testid="course-detail-level-tag">
              {level.name} — {level.audience}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#C29949]/40 text-[#C29949]" data-testid="course-detail-status">
              {STATUS_LABELS[course.status]}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#FBF6EB]/20 text-[#FBF6EB]/60">
              {course.kind === "course" ? "Core Course" : "Experience & Resource"}
            </span>
          </div>
          <h1 className="font-display text-[clamp(30px,4.2vw,56px)] font-bold text-white tracking-[-0.02em] leading-tight max-w-4xl">
            {course.title}
          </h1>
          <p className="mt-5 text-sm md:text-base text-[#FBF6EB]/75 max-w-2xl font-light leading-relaxed">
            {course.focus}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.18em] font-bold mb-4" style={{ color: v2pillar.color }}>
                About This {course.kind === "course" ? "Course" : "Experience"}
              </div>
              {course.description ? (
                <div className="space-y-4">
                  {course.description.map((p, i) => (
                    <p key={i} className="text-sm text-[#142635]/70 leading-relaxed">{p}</p>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-white border border-[#142635]/12 rounded-sm" data-testid="course-description-pending">
                  <p className="text-sm text-[#142635]/65 leading-relaxed">
                    The full description, lesson breakdown, and learning outcomes for this module
                    are being finalized as part of the approved 2027 catalog. Only Academy-approved
                    material is published here — nothing is presented before it is ready.
                  </p>
                </div>
              )}
            </Reveal>

            {course.lessons && course.lessons.length > 0 && (
              <Reveal>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold mb-4" style={{ color: v2pillar.color }}>
                  <BookOpen className="w-4 h-4" aria-hidden="true" /> Lessons
                </div>
                <ol className="space-y-3">
                  {course.lessons.map((l, i) => (
                    <li key={i} className="flex items-start gap-4 bg-white border border-[#142635]/12 rounded-sm p-4" data-testid={`course-lesson-${i}`}>
                      <span className="font-mono text-[10px] mt-0.5" style={{ color: v2pillar.color }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-[#142635]">{l}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}

            {course.outcomes && course.outcomes.length > 0 && (
              <Reveal>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold mb-4" style={{ color: v2pillar.color }}>
                  <Target className="w-4 h-4" aria-hidden="true" /> What You'll Be Able To Do
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#142635]/70 bg-white border border-[#142635]/12 rounded-sm p-4" data-testid={`course-outcome-${i}`}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: v2pillar.color }} />
                      {o}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {(!course.lessons || course.lessons.length === 0) && (
              <Reveal>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold mb-4" style={{ color: v2pillar.color }}>
                  <ClipboardList className="w-4 h-4" aria-hidden="true" /> Syllabus
                </div>
                <p className="text-sm text-[#142635]/65 leading-relaxed max-w-2xl">
                  The approved syllabus publishes here when this module's development completes.
                  Contact the Academy and we'll notify you when it opens.
                </p>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="bg-[#142635] text-[#FBF6EB] rounded-sm p-8 mma-grain" data-testid="course-sidebar-classification">
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-4">
                  Classification
                </div>
                <dl className="space-y-4 text-xs">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#9FB8C8] uppercase tracking-wider">3M Pillar</dt>
                    <dd className="font-semibold text-right" style={{ color: v2pillar.onDark }}>
                      {pillar.name}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#9FB8C8] uppercase tracking-wider">Level</dt>
                    <dd className="font-semibold text-white text-right">{level.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#9FB8C8] uppercase tracking-wider">Audience</dt>
                    <dd className="text-[#FBF6EB]/80 text-right">{level.audience}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#9FB8C8] uppercase tracking-wider">Status</dt>
                    <dd className="text-[#C29949] font-mono uppercase">{STATUS_LABELS[course.status]}</dd>
                  </div>
                </dl>
                <p className="mt-6 pt-5 border-t border-[#115754]/40 text-[11px] text-[#FBF6EB]/60 leading-relaxed">
                  Part of the approved 2027 catalog. This module is not yet published —
                  availability, instructors, and release details are announced only when approved.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <Link
                to="/contact"
                data-testid="course-notify-link"
                className="block p-6 bg-[#115754] text-[#FBF6EB] rounded-sm hover:bg-[#17716c] transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1 text-[#7FD4C8]">
                  Availability Notification
                </div>
                <div className="font-display text-lg font-semibold flex items-center justify-between">
                  Request to be notified when this opens
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-10">
            <div className="text-xs uppercase tracking-[0.18em] font-bold mb-2" style={{ color: v2pillar.color }}>
              Same Pillar
            </div>
            <h2 className="font-display text-[clamp(22px,2.8vw,36px)] font-bold text-[#142635] tracking-tight">
              More {pillar.name} Modules
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((c) => (
              <CourseCard key={c.id} course={c} dark={false} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetailPage;
