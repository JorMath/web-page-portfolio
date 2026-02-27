import { user } from "../data/user";
import { SplitText, RotatingText, FadeContent, Magnet } from "../animations/ReactBits";
import { DotGrid } from "../animations/DotGrid";
import { Github, Linkedin, ArrowDown } from "lucide-react";

// X (formerly Twitter) icon - lucide-react doesn't have it
const XIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__cubes-bg">
        <DotGrid
          dotSize={3}
          gap={28}
          baseColor="var(--dotgrid-base)"
          activeColor="var(--dotgrid-active)"
          proximity={180}
          shockRadius={200}
          shockStrength={4}
          returnDuration={1.2}
        />
      </div>
      <div className="hero__noise" />

      <div className="hero__content">
        <FadeContent delay={200} direction="none" blur>
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible para proyectos
          </span>
        </FadeContent>

        <h1 className="hero__title">
          <SplitText
            text={user.name}
            delay={40}
            animationFrom={{ opacity: 0, transform: "translateY(60px) rotateX(40deg)" }}
            animationTo={{ opacity: 1, transform: "translateY(0) rotateX(0)" }}
          />
        </h1>

        <div className="hero__subtitle">
          <RotatingText
            texts={[
              user.title,
              "MERN Stack Developer",
              "DJango Developer",
            ]}
            className="hero__rotating"
            interval={3000}
          />
        </div>

        <FadeContent delay={800} blur>
          <p className="hero__location">
            <span className="hero__location-pin">&#x1F4CD;</span> {user.location}
          </p>
        </FadeContent>

        <FadeContent delay={1000}>
          <div className="hero__socials">
            {user.social.github && (
              <Magnet strength={0.3}>
                <a href={user.social.github} target="_blank" rel="noopener" className="hero__social-link" aria-label="GitHub">
                  <Github size={22} />
                </a>
              </Magnet>
            )}
            {user.social.linkedin && (
              <Magnet strength={0.3}>
                <a href={user.social.linkedin} target="_blank" rel="noopener" className="hero__social-link" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
              </Magnet>
            )}
            {user.social.twitter && (
              <Magnet strength={0.3}>
                <a href={user.social.twitter} target="_blank" rel="noopener" className="hero__social-link" aria-label="X">
                  <XIcon size={22} />
                </a>
              </Magnet>
            )}
          </div>
        </FadeContent>

        <FadeContent delay={1200}>
          <button className="hero__cta" onClick={scrollToAbout}>
            <span>Conoce mas</span>
            <ArrowDown size={18} />
          </button>
        </FadeContent>
      </div>

      <div className="hero__scroll-indicator" onClick={scrollToAbout}>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
