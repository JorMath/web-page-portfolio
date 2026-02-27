import { user } from "../data/user";
import { BlurText, FadeContent } from "../animations/ReactBits";

export function About() {
  return (
    <section id="about" className="about">
      <div className="section-separator" />
      <div className="about__container">
        <div className="about__header">
          <span className="section-label">01</span>
          <BlurText text="Sobre Mi" className="section-title" delay={100} />
        </div>

        <div className="about__grid">
          <FadeContent delay={200} direction="left">
            <div className="about__image-wrapper">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="about__image" />
              ) : (
                <div className="about__image-placeholder">
                  <span className="about__image-placeholder-text">
                    {user.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div className="about__image-placeholder-grid" />
                </div>
              )}
              <div className="about__image-border" />
            </div>
          </FadeContent>

          <div className="about__info">
            {user.bio.map((paragraph, i) => (
              <FadeContent key={i} delay={300 + i * 150} blur>
                <p className="about__text">{paragraph}</p>
              </FadeContent>
            ))}

            <FadeContent delay={700}>
              <div className="about__details">
                <div className="about__detail">
                  <span className="about__detail-label">Ubicacion</span>
                  <span className="about__detail-value">{user.location}</span>
                </div>
                <div className="about__detail">
                  <span className="about__detail-label">Email</span>
                  <span className="about__detail-value">{user.email}</span>
                </div>
                <div className="about__detail">
                  <span className="about__detail-label">Idiomas</span>
                  <span className="about__detail-value">
                    {user.languages.map(l => `${l.name} (${l.level})`).join(", ")}
                  </span>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={900}>
              <div className="about__education">
                <h3 className="about__education-title">Educacion</h3>
                {user.education.map((edu, i) => (
                  <div key={i} className="about__education-item">
                    <span className="about__education-degree">{edu.degree}</span>
                    <span className="about__education-institution">
                      {edu.institution} &middot; {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
}
