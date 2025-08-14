import "../css/Navbar.css";
import { useState } from "react";

function Navbar({ setLang, lang, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper">
        <h2>{title.title}</h2>
        <div className="nav-right">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#about">{title.about}</a>
            </li>
            <li>
              <a href="#projects">{title.projects}</a>
            </li>
            <li>
              <a href="#contact">{title.contact}</a>
            </li>
          </ul>
          <div className="language-buttons">
            <button
              className={lang === "en" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "tr" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLang("tr")}
            >
              TR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
