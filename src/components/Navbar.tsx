import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { user } from "../data/user";
import { Magnet } from "../animations/ReactBits";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import type { Locale } from "../i18n/translations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.interests, href: "#interests" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const switchLang = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangOpen(false);
  };

  const langOptions: { code: Locale; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__inner">
        <Magnet strength={0.2}>
          <button className="navbar__logo" onClick={() => scrollTo("#hero")}>
            <span className="navbar__logo-bracket">&lt;</span>
            {user.name.split(" ")[0]}
            <span className="navbar__logo-bracket">/&gt;</span>
          </button>
        </Magnet>

        <div className="navbar__links">
          {navItems.map((item) => (
            <Magnet key={item.href} strength={0.15}>
              <button className="navbar__link" onClick={() => scrollTo(item.href)}>
                {item.label}
              </button>
            </Magnet>
          ))}

          {/* Language dropdown */}
          <div className="lang-toggle" ref={langRef}>
            <Magnet strength={0.15}>
              <button
                className="lang-toggle__btn"
                onClick={() => setLangOpen(!langOpen)}
                aria-label={t.lang.switchTo}
              >
                {t.lang.label}
                <ChevronDown size={14} className={`lang-toggle__chevron ${langOpen ? "lang-toggle__chevron--open" : ""}`} />
              </button>
            </Magnet>
            {langOpen && (
              <div className="lang-toggle__dropdown">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    className={`lang-toggle__option ${locale === opt.code ? "lang-toggle__option--active" : ""}`}
                    onClick={() => switchLang(opt.code)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Magnet strength={0.15}>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t.nav.switchToLight : t.nav.switchToDark}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Magnet>
        </div>

        <div className="navbar__mobile-controls">
          {/* Mobile language toggle */}
          <div className="lang-toggle lang-toggle--mobile" ref={undefined}>
            <button
              className="lang-toggle__btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label={t.lang.switchTo}
            >
              {t.lang.label}
              <ChevronDown size={14} className={`lang-toggle__chevron ${langOpen ? "lang-toggle__chevron--open" : ""}`} />
            </button>
            {langOpen && (
              <div className="lang-toggle__dropdown">
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    className={`lang-toggle__option ${locale === opt.code ? "lang-toggle__option--active" : ""}`}
                    onClick={() => switchLang(opt.code)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="theme-toggle navbar__mobile-theme"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.switchToLight : t.nav.switchToDark}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                className="navbar__mobile-link"
                onClick={() => scrollTo(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              className="navbar__mobile-link"
              onClick={toggleTheme}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? t.nav.lightMode : t.nav.darkMode}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
