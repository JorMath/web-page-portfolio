import { useState } from "react";
import { user } from "../data/user";
import { BlurText, FadeContent, Magnet } from "../animations/ReactBits";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// X (formerly Twitter) icon
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fallback to mailto if no Web3Forms key is configured
    if (!user.web3formsKey) {
      const mailtoLink = `mailto:${user.email}?subject=${t.contact.emailSubject} - ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0ADe: ${formData.name}%0AEmail: ${formData.email}`;
      window.open(mailtoLink);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: user.web3formsKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: t.contact.formSender,
          subject: `${t.contact.formSubject} ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || t.contact.errorDefault);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.contact.errorConnection);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-separator" />
      <div className="contact__container">
        <div className="contact__header">
          <span className="section-label">06</span>
          <BlurText text={t.contact.title} className="section-title" delay={100} />
        </div>

        <div className="contact__grid">
          <FadeContent delay={200} direction="left" blur>
            <div className="contact__info">
              <h3 className="contact__info-title">{t.contact.talkTitle}</h3>
              <p className="contact__info-text">{t.contact.talkText}</p>

              <div className="contact__details">
                <a href={`mailto:${user.email}`} className="contact__detail">
                  <Mail size={20} />
                  <span>{user.email}</span>
                </a>
                <a href={`tel:${user.phone}`} className="contact__detail">
                  <Phone size={20} />
                  <span>{user.phone}</span>
                </a>
                <div className="contact__detail">
                  <MapPin size={20} />
                  <span>{user.location}</span>
                </div>
              </div>

              <div className="contact__socials">
                {user.social.github && (
                  <Magnet strength={0.3}>
                    <a href={user.social.github} target="_blank" rel="noopener" className="contact__social" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                  </Magnet>
                )}
                {user.social.linkedin && (
                  <Magnet strength={0.3}>
                    <a href={user.social.linkedin} target="_blank" rel="noopener" className="contact__social" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  </Magnet>
                )}
                {user.social.twitter && (
                  <Magnet strength={0.3}>
                    <a href={user.social.twitter} target="_blank" rel="noopener" className="contact__social" aria-label="X">
                      <XIcon size={20} />
                    </a>
                  </Magnet>
                )}
              </div>
            </div>
          </FadeContent>

          <FadeContent delay={400} direction="right" blur>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">{t.contact.nameLabel}</label>
                <input
                  id="name"
                  className="contact__input"
                  type="text"
                  required
                  disabled={status === "loading"}
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="email">{t.contact.emailLabel}</label>
                <input
                  id="email"
                  className="contact__input"
                  type="email"
                  required
                  disabled={status === "loading"}
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="message">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  className="contact__input contact__textarea"
                  required
                  disabled={status === "loading"}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="contact__status contact__status--success">
                  <CheckCircle size={18} />
                  <span>{t.contact.success}</span>
                </div>
              )}

              {status === "error" && (
                <div className="contact__status contact__status--error">
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <Magnet strength={0.15}>
                <button
                  type="submit"
                  className="contact__submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="contact__spinner" />
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{t.contact.send}</span>
                    </>
                  )}
                </button>
              </Magnet>
            </form>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
