import { Link } from "react-router-dom";
import { PILLARS, LEVELS } from "@/data/content";

const STATUS_STYLES = {
  "coming-soon": { label: "Coming Soon", classes: "text-[#C6A66B] border-[#C6A66B]/40" },
  "in-development": { label: "In Development", classes: "text-[#5F6773] border-[#5F6773]/50" },
};

export const CourseCard = ({ course, dark = true }) => {
  const pillar = PILLARS[course.pillar];
  const level = LEVELS[course.level];
  const status = STATUS_STYLES[course.status] || STATUS_STYLES["coming-soon"];

  const shell = dark
    ? "bg-[#202832] border-[#5F6773]/30"
    : "bg-white border-[#5F6773]/20 shadow-sm";
  const titleColor = dark ? "text-white" : "text-[#101B2B]";
  const bodyColor = dark ? "text-[#F7F4EE]/70" : "text-[#5F6773]";
  const footerBorder = dark ? "border-[#101B2B]" : "border-[#F7F4EE]";
  const footerColor = "text-[#5F6773]";

  return (
    <Link
      to={`/courses/${course.id}`}
      className={`block p-6 rounded-sm border transition-transform duration-300 hover:-translate-y-1 ${shell}`}
      data-testid={`course-card-${course.id}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4 gap-2">
          <span
            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
            style={{
              backgroundColor: `${pillar.color}${dark ? "4D" : "1A"}`,
              color: dark ? pillar.onDarkText : pillar.color,
            }}
            data-testid={`course-tag-${course.id}`}
          >
            {level.name} • {pillar.name}
          </span>
          <span
            className={`text-[10px] font-mono uppercase border px-1.5 py-0.5 rounded ${status.classes}`}
            data-testid={`course-status-${course.id}`}
          >
            {status.label}
          </span>
        </div>
        <h4 className={`font-display text-lg ${titleColor} mb-2 font-medium leading-snug`}>
          {course.title}
        </h4>
        <p className={`text-xs ${bodyColor} leading-relaxed`}>{course.focus}</p>
      </div>
      <div
        className={`mt-6 pt-4 border-t ${footerBorder} text-[11px] ${footerColor} uppercase tracking-wider flex items-center justify-between`}
      >
        <span>{level.audience}</span>
        <span>{course.kind === "course" ? "Core Course" : "Experience"}</span>
      </div>
    </Link>
  );
};
