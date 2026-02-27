import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { user } from "../data/user";
import { Magnet } from "../animations/ReactBits";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mi", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

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
          <Magnet strength={0.15}>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Magnet>
        </div>

        <div className="navbar__mobile-controls">
          <button
            className="theme-toggle navbar__mobile-theme"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
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
              {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
