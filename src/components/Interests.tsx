import { useEffect, useRef, useState } from "react";
import { user } from "../data/user";
import { FadeContent } from "../animations/ReactBits";
import { Gamepad2, Music, ChevronUp, ChevronDown, Play, Pause, SkipForward, Volume2 } from "lucide-react";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";

export function Interests() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"games" | "music">("games");
  const [activeGameIndex, setActiveGameIndex] = useState(0);
  const [activeMusicIndex, setActiveMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // GSAP: glitch flicker on the monitor frame
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const monitor = el.querySelector(".zzz-monitor");
    if (!monitor) return;

    const ctx = gsap.context(() => {
      // Scanline sweep animation
      const scanline = el.querySelector(".zzz-monitor__scanline");
      if (scanline) {
        gsap.to(scanline, {
          top: "100%",
          duration: 4,
          ease: "none",
          repeat: -1,
          yoyo: false,
        });
      }

      // Random glitch flicker on title
      const glitchTitle = el.querySelector(".zzz-title__text");
      if (glitchTitle) {
        const flicker = () => {
          const tl = gsap.timeline({
            onComplete: () => {
              gsap.delayedCall(3 + Math.random() * 3, flicker);
            },
          });
          tl.to(glitchTitle, {
            skewX: () => (Math.random() - 0.5) * 8,
            x: () => (Math.random() - 0.5) * 4,
            duration: 0.05,
          })
            .to(glitchTitle, {
              skewX: () => (Math.random() - 0.5) * 4,
              x: () => (Math.random() - 0.5) * 2,
              duration: 0.05,
            })
            .to(glitchTitle, {
              skewX: 0,
              x: 0,
              duration: 0.05,
            });
        };
        gsap.delayedCall(2, flicker);
      }

      // Static noise flicker on monitor
      const noiseFlicker = () => {
        const noise = el.querySelector(".zzz-monitor__noise");
        if (noise) {
          const tl = gsap.timeline({
            onComplete: () => {
              gsap.delayedCall(5 + Math.random() * 8, noiseFlicker);
            },
          });
          tl.to(noise, { opacity: 0.15, duration: 0.05 })
            .to(noise, { opacity: 0, duration: 0.05 })
            .to(noise, { opacity: 0.08, duration: 0.03 })
            .to(noise, { opacity: 0, duration: 0.1 });
        }
      };
      gsap.delayedCall(4, noiseFlicker);
    }, el);

    return () => ctx.revert();
  }, []);

  const games = user.interests.games;
  const music = user.interests.music;

  return (
    <section id="interests" className="interests" ref={sectionRef}>
      {/* Diagonal stripe background pattern */}
      <div className="zzz-bg-stripes" />
      <div className="zzz-scanlines" />

      <div className="interests__container">
        {/* Section header */}
        <FadeContent delay={0} direction="up">
          <div className="interests__header">
            <span className="section-label">05</span>
            <div className="zzz-title">
              <span className="zzz-title__text" data-text={t.interests.title}>
                {t.interests.title}
              </span>
              <span className="zzz-title__sub">{t.interests.subtitle}</span>
            </div>
          </div>
        </FadeContent>

        {/* Main ZZZ Monitor Frame */}
        <FadeContent delay={200} direction="up">
          <div className="zzz-monitor-wrapper">
            {/* Vertical sidebar */}
            <div className="zzz-sidebar">
              <button
                className="zzz-sidebar__btn"
                onClick={() => {
                  if (activeTab === "games") {
                    setActiveGameIndex((prev) => (prev - 1 + games.length) % games.length);
                  } else {
                    setActiveMusicIndex((prev) => (prev - 1 + music.length) % music.length);
                  }
                }}
                aria-label="Previous"
              >
                <ChevronUp size={20} />
              </button>

              <div className="zzz-sidebar__number">
                <span className="zzz-sidebar__num-value">
                  {activeTab === "games"
                    ? String(activeGameIndex + 1).padStart(2, "0")
                    : String(activeMusicIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <button
                className="zzz-sidebar__btn"
                onClick={() => {
                  if (activeTab === "games") {
                    setActiveGameIndex((prev) => (prev + 1) % games.length);
                  } else {
                    setActiveMusicIndex((prev) => (prev + 1) % music.length);
                  }
                }}
                aria-label="Next"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Monitor body */}
            <div className="zzz-monitor">
              {/* Monitor top bar */}
              <div className="zzz-monitor__topbar">
                <div className="zzz-monitor__tabs">
                  <button
                    className={`zzz-monitor__tab ${activeTab === "games" ? "zzz-monitor__tab--active" : ""}`}
                    onClick={() => setActiveTab("games")}
                  >
                    <Gamepad2 size={14} />
                    <span>{t.interests.games}</span>
                  </button>
                  <button
                    className={`zzz-monitor__tab ${activeTab === "music" ? "zzz-monitor__tab--active" : ""}`}
                    onClick={() => setActiveTab("music")}
                  >
                    <Music size={14} />
                    <span>{t.interests.music}</span>
                  </button>
                </div>
                <div className="zzz-monitor__indicators">
                  {[0, 1, 2].map((i) => {
                    const activeIndex = activeTab === "games" ? activeGameIndex : activeMusicIndex;
                    return (
                      <span
                        key={i}
                        className={`zzz-monitor__dot ${i === activeIndex ? "zzz-monitor__dot--accent" : "zzz-monitor__dot--dim"}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Monitor screen */}
              <div className="zzz-monitor__screen">
                {/* Noise overlay */}
                <div className="zzz-monitor__noise" />
                {/* Scanline sweep */}
                <div className="zzz-monitor__scanline" />

                {/* Content area */}
                <div className="zzz-monitor__content">
                  {/* Left: Main display with grid of items */}
                  <div className="zzz-display">
                    {activeTab === "games" ? (
                      <div className="zzz-display__grid">
                        {games.map((game, i) => (
                          <div
                            key={game.title}
                            className={`zzz-display__cell ${i === activeGameIndex ? "zzz-display__cell--active" : ""}`}
                            onClick={() => setActiveGameIndex(i)}
                          >
                            {game.image ? (
                              <img src={game.image} alt={game.title} className="zzz-display__img" />
                            ) : (
                              <div className="zzz-display__placeholder">
                                <div className="zzz-display__placeholder-grid" />
                                <Gamepad2 size={24} className="zzz-display__placeholder-icon" />
                              </div>
                            )}
                            <div className="zzz-display__cell-label">
                              <span className="zzz-display__cell-index">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="zzz-display__cell-name">{game.title}</span>
                            </div>
                            {/* Glitch bar */}
                            <div className="zzz-display__glitch-bar" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="zzz-display__grid zzz-display__grid--music">
                        {music.map((artist, i) => (
                          <div
                            key={artist.name}
                            className={`zzz-display__cell ${i === activeMusicIndex ? "zzz-display__cell--active" : ""}`}
                            onClick={() => setActiveMusicIndex(i)}
                          >
                            {artist.image ? (
                              <img src={artist.image} alt={artist.name} className="zzz-display__img" />
                            ) : (
                              <div className="zzz-display__placeholder">
                                <div className="zzz-display__placeholder-grid" />
                                <Music size={24} className="zzz-display__placeholder-icon" />
                              </div>
                            )}
                            <div className="zzz-display__cell-label">
                              <span className="zzz-display__cell-index">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="zzz-display__cell-name">{artist.name}</span>
                            </div>
                            <div className="zzz-display__glitch-bar" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Play button overlay (center of grid) */}
                    {activeTab === "games" && (
                      <div className="zzz-display__play-btn">
                        <Play size={28} fill="currentColor" />
                      </div>
                    )}
                  </div>

                  {/* Right: Control panel (ZZZ knobs & info) */}
                  <div className="zzz-control-panel">
                    {/* Knobs / dials */}
                    <div className="zzz-knobs">
                      <div className="zzz-knob">
                        <div className="zzz-knob__circle">
                          <div className="zzz-knob__line" />
                        </div>
                      </div>
                      <div className="zzz-knob">
                        <div className="zzz-knob__circle zzz-knob__circle--strikethrough">
                          <div className="zzz-knob__line zzz-knob__line--alt" />
                        </div>
                      </div>
                    </div>

                    {/* Info readout */}
                    <div className="zzz-readout">
                      <div className="zzz-readout__line" />
                      <div className="zzz-readout__dot" />
                    </div>

                    {/* Active item info */}
                    <div className="zzz-control-panel__info">
                      {activeTab === "games" ? (
                        <>
                          <h3 className="zzz-control-panel__title">
                            {games[activeGameIndex].title}
                          </h3>
                          <span className="zzz-control-panel__genre">
                            {games[activeGameIndex].genre}
                          </span>
                        </>
                      ) : (
                        <>
                          <h3 className="zzz-control-panel__title">
                            {music[activeMusicIndex].name}
                          </h3>
                          <span className="zzz-control-panel__genre">
                            {music[activeMusicIndex].genre}
                          </span>
                        </>
                      )}

                      {/* Music player controls */}
                      {activeTab === "music" && (
                        <div className="zzz-player">
                          <div className="zzz-player__bar">
                            <div className="zzz-player__progress" />
                          </div>
                          <div className="zzz-player__controls">
                            <button
                              className="zzz-player__btn"
                              onClick={() => setIsPlaying(!isPlaying)}
                              aria-label={isPlaying ? "Pause" : "Play"}
                            >
                              {isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                            </button>
                            <button className="zzz-player__btn" aria-label="Next track"
                              onClick={() =>
                                setActiveMusicIndex((prev) => (prev + 1) % music.length)
                              }
                            >
                              <SkipForward size={14} />
                            </button>
                            <Volume2 size={14} className="zzz-player__vol" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative lines at bottom of panel */}
                    <div className="zzz-control-panel__lines">
                      <div className="zzz-control-panel__line" />
                      <div className="zzz-control-panel__line" />
                      <div className="zzz-control-panel__line" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor bottom bar */}
              <div className="zzz-monitor__bottombar">
                <div className="zzz-monitor__status">
                  <span className="zzz-monitor__status-dot" />
                  <span className="zzz-monitor__status-text">SIGNAL_OK</span>
                </div>
                <div className="zzz-monitor__freq">
                  {activeTab === "games" ? "GAME_MODE" : "AUDIO_STREAM"} //
                  CH_{activeTab === "games"
                    ? String(activeGameIndex + 1).padStart(2, "0")
                    : String(activeMusicIndex + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        {/* Bottom: Item cards strip */}
        <div className="zzz-strip">
          {activeTab === "games"
            ? games.map((game, i) => (
                <FadeContent key={game.title} delay={100 * i} direction="up">
                  <button
                    className={`zzz-strip__item ${i === activeGameIndex ? "zzz-strip__item--active" : ""}`}
                    onClick={() => setActiveGameIndex(i)}
                  >
                    <span className="zzz-strip__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="zzz-strip__text">
                      <span className="zzz-strip__name">{game.title}</span>
                      <span className="zzz-strip__genre">{game.genre}</span>
                    </div>
                    <Gamepad2 size={14} className="zzz-strip__icon" />
                  </button>
                </FadeContent>
              ))
            : music.map((artist, i) => (
                <FadeContent key={artist.name} delay={100 * i} direction="up">
                  <button
                    className={`zzz-strip__item ${i === activeMusicIndex ? "zzz-strip__item--active" : ""}`}
                    onClick={() => setActiveMusicIndex(i)}
                  >
                    <span className="zzz-strip__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="zzz-strip__text">
                      <span className="zzz-strip__name">{artist.name}</span>
                      <span className="zzz-strip__genre">{artist.genre}</span>
                    </div>
                    <Music size={14} className="zzz-strip__icon" />
                  </button>
                </FadeContent>
              ))}
        </div>

        {/* Large background text */}
        <div className="zzz-bg-text" aria-hidden="true">
          {activeTab === "games" ? "GAMES" : "MUSIC"}
        </div>
      </div>
    </section>
  );
}
