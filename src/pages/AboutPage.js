import "../css/About2.css";

function AboutPage({ t }) {
  return (
    <div className="container about">
      <section className="glass section stack-24">
        <div className="section-head">
          <h1 className="display">{t.aboutTitle}</h1>
          <p className="muted about-lead">{t.profileTitle}</p>
        </div>

        <div className="grid-2">
          <article className="prose">
            <p>{t.aboutText}</p>
            <p className="muted">
              Özellikle kurumsal uygulamalarda; analiz, veri tabanı tasarımı,
              paket/prosedür geliştirme, raporlama ve kullanıcı eğitimi gibi
              süreçleri birlikte ele almayı seviyorum.
            </p>
          </article>

          <aside className="about-side">
            <div className="about-card">
              <div className="about-kicker">Stack</div>
              <div className="about-list">
                <span className="tag">Oracle 19c</span>
                <span className="tag">PL/SQL</span>
                <span className="tag">SQL</span>
                <span className="tag">MSSQL</span>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">REST</span>
              </div>
            </div>
            <div className="about-card">
              <div className="about-kicker">Odak</div>
              <div className="about-list">
                <span className="tag">CRM</span>
                <span className="tag">Helpdesk</span>
                <span className="tag">Dashboard</span>
                <span className="tag">Süreç Yönetimi</span>
                <span className="tag">Dokümantasyon</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

