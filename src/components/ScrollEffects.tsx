import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global scroll-driven effects:
 * 1. Animated section separators — kiwi gradient line draws from center outward
 * 2. Parallax on About — image moves slower, info moves faster
 * 3. Parallax on Experience — timeline cards have staggered vertical offset
 */
export function ScrollEffects() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------------------------------------
      // 1. ANIMATED SECTION SEPARATORS
      //    Replace static ::before lines with animated <div>s
      //    that scale from 0 to full width when scrolled into view
      // -------------------------------------------------------
      const sectionsWithSeparator = document.querySelectorAll(
        ".about, .projects, .contact"
      );

      sectionsWithSeparator.forEach((section) => {
        const separator = section.querySelector(".section-separator");
        if (!separator) return;

        gsap.fromTo(
          separator,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // -------------------------------------------------------
      // 2. PARALLAX — ABOUT SECTION
      //    Image moves up slower (parallax depth), info moves slightly faster
      // -------------------------------------------------------
      const aboutImage = document.querySelector(".about__image-wrapper");
      const aboutInfo = document.querySelector(".about__info");

      if (aboutImage) {
        gsap.fromTo(
          aboutImage,
          { y: 60 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: ".about",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      if (aboutInfo) {
        gsap.fromTo(
          aboutInfo,
          { y: 30 },
          {
            y: -15,
            ease: "none",
            scrollTrigger: {
              trigger: ".about",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      // -------------------------------------------------------
      // 3. PARALLAX — EXPERIENCE SECTION
      //    Each timeline card has a staggered vertical shift
      // -------------------------------------------------------
      const timelineCards = document.querySelectorAll(".timeline-card");

      timelineCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40 + i * 10 },
          {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
