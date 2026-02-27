import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { user } from "../data/user";
import { BlurText, FadeContent } from "../animations/ReactBits";
import { useTheme } from "../context/ThemeContext";
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

// ---- Icon map ----
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

// ---- Flatten all skills ----
interface SkillItem {
  name: string;
  level: number;
  category: string;
}

function getAllSkills(): SkillItem[] {
  const all: SkillItem[] = [];
  for (const [category, skills] of Object.entries(user.skills)) {
    for (const skill of skills) {
      all.push({ ...skill, category });
    }
  }
  return all;
}

// ---- Spiral math ----
const SPIRAL_TURNS = 3;
const MAX_THETA = SPIRAL_TURNS * 2 * Math.PI;

function spiralPoint(t: number, cx: number, cy: number, maxRadius: number) {
  const theta = t * MAX_THETA;
  const r = t * maxRadius;
  return {
    x: cx + r * Math.cos(theta),
    y: cy + r * Math.sin(theta),
  };
}

// ---- Draw spiral path on canvas ----
function drawSpiral(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  maxRadius: number,
  dpr: number,
  spiralLineColor: string,
  spiralDotColor: string,
) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Spiral line
  ctx.beginPath();
  const steps = 600;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const { x, y } = spiralPoint(t, cx, cy, maxRadius);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = spiralLineColor;
  ctx.lineWidth = 1 * dpr;
  ctx.stroke();

  // Subtle dots for texture
  for (let i = 0; i <= 80; i++) {
    const t = i / 80;
    const { x, y } = spiralPoint(t, cx, cy, maxRadius);
    ctx.beginPath();
    ctx.arc(x, y, 0.8 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = spiralDotColor;
    ctx.fill();
  }
}

// ---- Speed presets ----
const SPEED_MIN = 0.00003;
const SPEED_MAX = 0.0006;
const SPEED_DEFAULT = 0.00010;

// ---- Main component ----
export function Skills() {
  const allSkills = getAllSkills();
  const count = allSkills.length;
  const { theme } = useTheme();
  const { t } = useLanguage();

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const speedRef = useRef(SPEED_DEFAULT);
  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState<{ x: number; y: number; opacity: number }[]>([]);
  const [tooltip, setTooltip] = useState<{
    skill: SkillItem | null;
    x: number;
    y: number;
  }>({ skill: null, x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [speed, setSpeed] = useState(SPEED_DEFAULT);

  // Keep ref in sync
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.getBoundingClientRect().width;
        setDimensions({ width: w, height: w });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Draw canvas spiral
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = (dimensions.width * dpr) / 2;
    const cy = (dimensions.height * dpr) / 2;
    // Leave room for node radius (24px) so nothing overflows
    const maxRadius = (Math.min(dimensions.width, dimensions.height) * dpr) / 2 - 28 * dpr;

    // Read theme-aware colors from CSS variables
    const styles = getComputedStyle(document.documentElement);
    const spiralLineColor = styles.getPropertyValue("--canvas-spiral-line").trim();
    const spiralDotColor = styles.getPropertyValue("--canvas-spiral-dot").trim();

    drawSpiral(ctx, cx, cy, maxRadius, dpr, spiralLineColor, spiralDotColor);
  }, [dimensions, theme]);

  // Animation loop — uses ref for speed so no re-mount on slider change
  const animate = useCallback(() => {
    if (dimensions.width === 0) return;

    const cx = dimensions.width / 2;
    const cy = dimensions.height / 2;
    const maxRadius = Math.min(dimensions.width, dimensions.height) / 2 - 28;

    timeRef.current += speedRef.current;

    const newPositions = allSkills.map((_, i) => {
      const spacing = 1 / count;
      const t = (timeRef.current + i * spacing) % 1;

      // Fade in near center, fade out near edge
      let opacity = 1;
      if (t < 0.04) opacity = t / 0.04;
      if (t > 0.93) opacity = (1 - t) / 0.07;

      const { x, y } = spiralPoint(t, cx, cy, maxRadius);
      return { x, y, opacity };
    });

    setPositions(newPositions);
    animRef.current = requestAnimationFrame(animate);
  }, [dimensions, allSkills, count]);

  useEffect(() => {
    if (!isVisible) return;
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isVisible, animate]);

  // Speed slider percentage for display
  const speedPct = Math.round(
    ((speed - SPEED_MIN) / (SPEED_MAX - SPEED_MIN)) * 100
  );

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <span className="section-label">02</span>
          <BlurText text={t.skills.title} className="section-title" delay={100} />
        </div>

        <FadeContent delay={200}>
          <div
            ref={containerRef}
            className={`spiral-container ${isVisible ? "spiral-container--visible" : ""}`}
            style={{
              height: dimensions.width ? `${dimensions.width}px` : undefined,
              aspectRatio: dimensions.width ? undefined : "1",
            }}
          >
            {/* Canvas spiral path */}
            <canvas ref={canvasRef} className="spiral-canvas" />

            {/* Center dot */}
            <div className="spiral-center" />

            {/* Skill nodes */}
            {positions.map((pos, i) => {
              const skill = allSkills[i];
              return (
                <div
                  key={skill.name}
                  className="spiral-node"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
                    opacity: pos.opacity,
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltip({
                      skill,
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                    });
                  }}
                  onMouseLeave={() => setTooltip({ skill: null, x: 0, y: 0 })}
                >
                  <div className="spiral-node__icon">
                    {iconMap[skill.name] || <TbCode />}
                  </div>
                </div>
              );
            })}

            {/* Tooltip */}
            {tooltip.skill && (
              <div
                className="spiral-tooltip"
                style={{ left: tooltip.x, top: tooltip.y }}
              >
                <span className="spiral-tooltip__name">{tooltip.skill.name}</span>
                <span className="spiral-tooltip__category">
                  {t.skills.categories[tooltip.skill.category]}
                </span>
                <div className="spiral-tooltip__bar">
                  <div
                    className="spiral-tooltip__fill"
                    style={{ width: `${tooltip.skill.level}%` }}
                  />
                </div>
                <span className="spiral-tooltip__level">{tooltip.skill.level}%</span>
              </div>
            )}
          </div>
        </FadeContent>

        {/* Speed control */}
        <FadeContent delay={350}>
          <div className="spiral-speed">
            <label className="spiral-speed__label" htmlFor="spiral-speed">
              {t.skills.speed}
            </label>
            <input
              id="spiral-speed"
              type="range"
              className="spiral-speed__slider"
              min={SPEED_MIN}
              max={SPEED_MAX}
              step={0.00001}
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
            />
            <span className="spiral-speed__value">{speedPct}%</span>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
