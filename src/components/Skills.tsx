import { useState, type ReactNode } from "react";
import { user, localize } from "../data/user";
import { BlurText, FadeContent } from "../animations/ReactBits";
import { useLanguage } from "../context/LanguageContext";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiFigma,
  SiLinux,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrain, TbDatabase, TbCode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const iconMap: Record<string, ReactNode> = {
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
  SQL: <TbDatabase />,
  Java: <FaJava />,
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  Django: <SiDjango />,
  Docker: <SiDocker />,
  "CI/CD": <SiGithubactions />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Git: <SiGit />,
  "VS Code": <VscCode />,
  "Claude Code": <TbBrain />,
  Figma: <SiFigma />,
  Linux: <SiLinux />,
};

// Split skills into 3 rows for the marquee
function splitIntoRows<T>(arr: T[], numRows: number): T[][] {
  const rows: T[][] = Array.from({ length: numRows }, () => []);
  arr.forEach((item, i) => rows[i % numRows].push(item));
  return rows;
}

type Skill = (typeof user.skills)[number];

export function Skills() {
  const { locale, t } = useLanguage();
  const rows = splitIntoRows(user.skills, 3);
  const [active, setActive] = useState<Skill | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <span className="section-label">02</span>
          <BlurText text={t.skills.title} className="section-title" delay={100} />
        </div>

        <FadeContent delay={200} blur>
          <div className="marquee-track">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`marquee-row ${rowIdx % 2 === 1 ? "marquee-row--reverse" : ""}`}
              >
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="marquee-row__inner"
                    aria-hidden={copy === 1 ? "true" : undefined}
                  >
                    {row.map((skill) => (
                      <div
                        key={`${copy}-${skill.name}`}
                        className={`marquee-icon${active?.name === skill.name ? " marquee-icon--active" : ""}`}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltipPos({
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                          setActive(skill);
                        }}
                        onMouseLeave={() => setActive(null)}
                      >
                        {iconMap[skill.name] || <TbCode />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeContent>

        {/* Tooltip */}
        {active && (
          <div
            className="marquee-tooltip"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            <span className="marquee-tooltip__name">{active.name}</span>
            <span className="marquee-tooltip__type">{localize(active.type, locale)}</span>
            <p className="marquee-tooltip__desc">{localize(active.desc, locale)}</p>
          </div>
        )}
      </div>
    </section>
  );
}
