import { Link } from "react-router-dom";
import { getProfile } from "../content/profile";
import { getPosts } from "../content/posts";
import "../css/Home.css";

function HomePage({ t, lang }) {
  const profile = getProfile(t);
  const posts = getPosts(lang).slice(0, 3);

  return (
    <div className="container home">
      <section className="glass section hero">
        <div className="pill hero-pill">
          <span className="hero-dot" aria-hidden="true" />
          <span className="muted">{profile.title}</span>
        </div>
        <h1 className="display hero-title">{t.heroTitle}</h1>
        <p className="hero-lead">{t.heroLead}</p>
        <div className="hero-actions">
          <Link className="btn primary" to="/blog">
            {t.heroCtaPrimary}
          </Link>
          <Link className="btn" to="/resume">
            {t.heroCtaResume}
          </Link>
          <Link className="btn" to="/contact">
            {t.heroCtaSecondary}
          </Link>
        </div>

        <div className="hero-highlights">
          {profile.highlights.slice(0, 4).map((h) => (
            <div key={h} className="hero-chip">
              {h}
            </div>
          ))}
        </div>
      </section>

      <section className="glass section trust">
        <div className="trust-grid">
          {t.trustBand.map((item) => (
            <div key={item.k} className="trust-card">
              <div className="trust-k">{item.k}</div>
              <div className="muted">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass section stack-24">
        <div className="section-head">
          <h2 className="display">{t.sectionFocus}</h2>
          <div className="muted">{profile.location}</div>
        </div>
        <div className="grid-3">
          {profile.focusAreas.map((a) => (
            <article key={a.title} className="focus-card">
              <h3 className="focus-title">{a.title}</h3>
              <p className="muted">{a.desc}</p>
              <div className="tag-row">
                {a.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass section stack-24">
        <div className="section-head">
          <h2 className="display">{t.sectionLatestPosts}</h2>
          <Link to="/blog" className="muted link-quiet">
            {t.blogTitle}
          </Link>
        </div>
        <div className="grid-3">
          {posts.map((p) => (
            <article key={p.slug} className="post-card">
              <div className="post-meta">
                <span className="tag">{p.tags[0]}</span>
                <span className="muted">
                  {p.readingMins} {t.minutes}
                </span>
              </div>
              <h3 className="post-title">{p.title}</h3>
              <p className="muted">{p.summary}</p>
              <Link to={`/blog/${p.slug}`} className="btn post-btn">
                {t.readMore}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="glass section stack-24">
        <div className="section-head">
          <h2 className="display">{t.sectionApproach}</h2>
          <div className="muted">{t.sectionApproachLead}</div>
        </div>
        <div className="approach">
          {t.approachSteps.map((s, idx) => (
            <div className="approach-step" key={s.title}>
              <div className="approach-no">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="approach-body">
                <div className="approach-title">{s.title}</div>
                <div className="muted">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass section final-cta">
        <div className="final-cta-inner">
          <div className="stack-16">
            <h2 className="display">{t.finalCtaTitle}</h2>
            <p className="muted">{t.finalCtaLead}</p>
          </div>
          <div className="final-cta-actions">
            <Link className="btn primary" to="/contact">
              {t.heroCtaSecondary}
            </Link>
            <Link className="btn" to="/resume">
              {t.heroCtaResume}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
