import { user } from "../data/user";
import { FadeContent } from "../animations/ReactBits";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <FadeContent delay={100}>
        <div className="footer__container">
          <div className="footer__left">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              {user.name.split(" ")[0]}
              <span className="footer__logo-bracket">/&gt;</span>
            </span>
          </div>

          <div className="footer__center">
            <p className="footer__text">
              {t.footer.madeWith} {user.location.split(",").pop()?.trim()}
            </p>
          </div>

          <div className="footer__right">
            <span className="footer__copyright">
              &copy; {year} {user.name}
            </span>
          </div>
        </div>
      </FadeContent>
    </footer>
  );
}
