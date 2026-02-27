import { user } from "../data/user";
import { BlurText, FadeContent } from "../animations/ReactBits";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <span className="section-label">04</span>
          <BlurText text="Experiencia" className="section-title" delay={100} />
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
                    <Briefcase size={16} />
                  </div>
                  {i < user.experience.length - 1 && <div className="timeline-card__line" />}
                </div>

                <div className="timeline-card__content">
                  <span className="timeline-card__period">{exp.period}</span>
                  <h3 className="timeline-card__role">{exp.role}</h3>
                  <span className="timeline-card__company">{exp.company}</span>
                  <p className="timeline-card__description">{exp.description}</p>

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
