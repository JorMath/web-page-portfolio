import { useState } from "react";
import { user, localize } from "../data/user";
import { BlurText, FadeContent, TiltCard } from "../animations/ReactBits";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { locale, t } = useLanguage();
  const projects = showAll ? user.projects : user.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="projects">
      <div className="section-separator" />
      <div className="projects__container">
        <div className="projects__header">
          <span className="section-label">03</span>
          <BlurText text={t.projects.title} className="section-title" delay={100} />
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <FadeContent key={project.title} delay={150 * i} direction="up" blur>
              <TiltCard className="project-card" maxTilt={6} scale={1.01}>
                <div className="project-card__image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-card__placeholder">
                      <div className="project-card__placeholder-pattern" />
                      <span className="project-card__placeholder-text">
                        {project.title.split(" ").map(w => w[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{localize(project.description, locale)}</p>

                  <div className="project-card__tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-card__tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener" className="project-card__link">
                        <Github size={16} />
                        <span>{t.projects.code}</span>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener" className="project-card__link project-card__link--live">
                        <ExternalLink size={16} />
                        <span>{t.projects.demo}</span>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </FadeContent>
          ))}
        </div>

        {user.projects.length > user.projects.filter(p => p.featured).length && (
          <FadeContent delay={400}>
            <div className="projects__toggle">
              <button
                className="projects__toggle-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? t.projects.showLess : `${t.projects.showAll} (${user.projects.length})`}
              </button>
            </div>
          </FadeContent>
        )}
      </div>
    </section>
  );
}
