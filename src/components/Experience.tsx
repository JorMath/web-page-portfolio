import { user, localize } from "../data/user";
import { BlurText, FadeContent } from "../animations/ReactBits";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function SLBLogo({ size = 32 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1350 950" width={size} height={size} fill="currentColor">
      <path d="M647,635c-191.38-153.23-271.22-350-472-350v350h472Z"/>
      <path d="M1054.03,279.75c-39.08,0-74.02,17-94.28,41.96V175h-47.25v350h38.9l4.99-36.79c13.72,18.37,41.67,42.04,95.37,42.04,72.14,0,123.25-51.57,123.25-124.67s-49.04-125.83-120.97-125.83Zm-12.94,206.66c-52.04,0-83.11-30.98-83.11-81.34s31.83-81.34,83.11-81.34,83.11,30.98,83.11,81.34-31.83,81.34-83.11,81.34Z"/>
      <rect x="830.25" y="175" width="47.25" height="350"/>
      <path d="M696.69,489.45c-34.46,0-70.64-16.81-90.07-40.97l-31.87,30.33c31.08,35.22,71.73,51.44,119.9,51.44,66.11,0,107.6-29.45,107.6-79.11,0-103.23-179.33-38.67-179.33-96.85,0-21.29,24.83-33.35,63.5-33.35,34.46,0,59.34,11.17,74.81,27.14l31.87-30.33c-21.1-22.7-60.83-38-105.49-38-66.81,0-110.76,31.61-110.76,81.63,0,100.39,178.62,36.54,178.62,95.07,0,20.58-23.28,32.99-58.79,32.99Z"/>
      <path d="M1169.75,600h-510.75c105.43,86.03,267.31,175,510.75,175v-175Z"/>
    </svg>
  );
}

function BiessLogo({ size = 32 }: { size?: number }) {
  return (
    <span
      className="timeline-card__mask-logo"
      style={{
        width: size,
        height: size,
        maskImage: "url(/biess.svg)",
        WebkitMaskImage: "url(/biess.svg)",
      }}
    />
  );
}

const companyLogos: Record<string, React.ReactNode> = {
  SLB: <SLBLogo size={32} />,
  BIESS: <BiessLogo size={32} />,
};

export function Experience() {
  const { locale, t } = useLanguage();

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <span className="section-label">04</span>
          <BlurText text={t.experience.title} className="section-title" delay={100} />
        </div>

        <div className="experience__timeline">
          {user.experience.map((exp, i) => (
            <FadeContent
              key={i}
              delay={200 + i * 200}
              direction={i % 2 === 0 ? "left" : "right"}
              blur
            >
              <div className="timeline-card">
                <div className="timeline-card__marker">
                  <div className="timeline-card__icon">
                    {companyLogos[exp.company] ?? <Briefcase size={16} />}
                  </div>
                  {i < user.experience.length - 1 && <div className="timeline-card__line" />}
                </div>

                <div className="timeline-card__content">
                  <span className="timeline-card__period">{localize(exp.period, locale)}</span>
                  <h3 className="timeline-card__role">{localize(exp.role, locale)}</h3>
                  <span className="timeline-card__company">{exp.company}</span>
                  <p className="timeline-card__description">{localize(exp.description, locale)}</p>

                  <div className="timeline-card__tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="timeline-card__tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
