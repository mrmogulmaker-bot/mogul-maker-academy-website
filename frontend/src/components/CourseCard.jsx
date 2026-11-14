import { Link } from "react-router-dom";
import { PILLARS, LEVELS } from "@/data/content";

const PILLAR_COLORS = {
  make: { base: "#115754", onDark: "#7FD4C8" },
  manage: { base: "#C29949", onDark: "#E4C87F" },
  multiply: { base: "#142635", onDark: "#9FB8C8" },
};

const STATUS_STYLES = {
  "coming-soon": { label: "Coming Soon", classes: "text-[#C29949] border-[#C29949]/50" },
  "in-development": { label: "In Development", classes: "text-[#5F6773] border-[#5F6773]/50" },
};

export const CourseCard = ({ course, dark = false }) => {
  const pillar = PILLARS[course.pillar];
  const level = LEVELS[course.level];
  const status = STATUS_STYLES[course.status] || STATUS_STYLES["coming-soon"];
  const colors = PILLAR_COLORS[course.pillar] || PILLAR_COLORS.make;

  const shell = dark
    ? "bg-[#0E1D29] border-[#115754]/40"
    : "bg-white border-[#142635]/15 shadow-sm";
  const titleColor = dark ? "text-white" : "text-[#142635]";
  const bodyColor = dark ? "text-[#FBF6EB]/70" : "text-[#142635]/65";
  const footerBorder = dark ? "border-[#142635]" : "border-[#FBF6EB]";

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
              backgroundColor: `${colors.base}${dark ? "4D" : "1A"}`,
              color: dark ? colors.onDark : colors.base,
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
        className={`mt-6 pt-4 border-t ${footerBorder} text-[11px] text-[#5F6773] uppercase tracking-wider flex items-center justify-between`}
      >
        <span>{level.audience}</span>
        <span>{course.kind === "course" ? "Core Course" : "Experience"}</span>
      </div>
    </Link>
  );
};
