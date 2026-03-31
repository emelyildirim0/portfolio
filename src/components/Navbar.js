import "../css/Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ setLang, lang, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <div className="brand-title">{t.siteName}</div>
          <div className="brand-sub">{t.siteTagline}</div>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label="Menüyü aç/kapat"
          onClick={() => setIsOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={close} end>
            {t.navHome}
          </NavLink>
          <NavLink to="/blog" onClick={close}>
            {t.navBlog}
          </NavLink>
          <NavLink to="/projects" onClick={close}>
            {t.navProjects}
          </NavLink>
          <NavLink to="/resume" onClick={close}>
            {t.navResume}
          </NavLink>
          <NavLink to="/about" onClick={close}>
            {t.navAbout}
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            {t.navContact}
          </NavLink>
        </nav>

        <div className="language-buttons" aria-label="Dil seçimi">
          <button
            className={lang === "tr" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLang("tr")}
            type="button"
          >
            TR
          </button>
          <button
            className={lang === "en" ? "lang-btn active" : "lang-btn"}
            onClick={() => setLang("en")}
            type="button"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
