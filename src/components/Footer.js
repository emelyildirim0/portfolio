import "../css/Footer.css";
function Footer({ t }) {
  const email = "info@emelyildirim.com";
  const linkedIn = "https://linkedin.com/in/emelyildirim";
  const github = "https://github.com/emelyildirim0";
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-title">{t.siteName}</div>
          <div className="footer-note">{t.footerNote}</div>
          <div className="footer-links">
            <a href={linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${email}`}>{email}</a>
            <a href="/resume">{t.navResume}</a>
            <a href="/blog">{t.navBlog}</a>
            <a href="/projects">{t.navProjects}</a>
          </div>
        </div>
        <div className="footer-right">
          <span className="footer-year">© {t.year}</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
