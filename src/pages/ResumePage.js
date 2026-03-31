import "../css/Resume.css";
import { getResume } from "../content/resume";

function ResumePage({ t, lang }) {
  const data = getResume(lang);
  const cvUrl =
    lang === "tr" ? "/cv/emel-yildirim-cv.pdf" : "/cv/emel-yildirim-cv-en.pdf";

  return (
    <div className="container resume">
      <section className="glass section stack-24">
        <div className="section-head">
          <h1 className="display">{t.resumeTitle}</h1>
          <a className="btn primary" href={cvUrl} download>
            {t.resumeDownload}
          </a>
        </div>

        <div className="grid-2">
          <article className="prose">
            <h2>{t.resumeSummaryTitle}</h2>
            <p>{data.summary}</p>

            <h2>{t.resumeExperienceTitle}</h2>
            {data.experience.map((e) => (
              <div className="resume-item" key={`${e.company}-${e.period}`}>
                <div className="resume-item-top">
                  <div className="resume-item-title">{e.company}</div>
                  <div className="muted">{e.period}</div>
                </div>
                <div className="muted">
                  {e.title} · {e.location}
                </div>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <aside className="resume-side">
            <div className="resume-card">
              <div className="resume-kicker">{t.resumeSkillsTitle}</div>
              <div className="resume-skill-groups">
                <div>
                  <div className="resume-group">Database</div>
                  <div className="tag-row">
                    {data.skills.database.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="resume-group">Backend / Logic</div>
                  <div className="tag-row">
                    {data.skills.backend.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="resume-group">Frontend</div>
                  <div className="tag-row">
                    {data.skills.frontend.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="resume-group">Tools</div>
                  <div className="tag-row">
                    {data.skills.tools.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-card">
              <div className="resume-kicker">{t.resumeEducationTitle}</div>
              {data.education.map((ed) => (
                <div className="resume-mini" key={`${ed.school}-${ed.period}`}>
                  <div className="resume-item-title">{ed.school}</div>
                  <div className="muted">
                    {ed.detail} · {ed.period}
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-card">
              <div className="resume-kicker">{t.resumeLanguagesTitle}</div>
              {data.languages.map((l) => (
                <div className="resume-mini" key={l.name}>
                  <div className="resume-item-title">{l.name}</div>
                  <div className="muted">{l.level}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ResumePage;

