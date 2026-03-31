import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/projects";
import "../css/ProjectDetail.css";

function ProjectDetailPage({ t, lang }) {
  const { slug } = useParams();
  const p = getProjectBySlug(lang, slug);

  if (!p) {
    return (
      <div className="container proj-detail">
        <section className="glass section stack-16">
          <h1 className="display">Bulunamadı</h1>
          <p className="muted">Bu proje mevcut değil.</p>
          <Link className="btn" to="/projects">
            {t.backToProjects}
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container proj-detail">
      <section className="glass section stack-24">
        <Link to="/projects" className="muted link-quiet">
          ← {t.backToProjects}
        </Link>

        <header className="proj-head stack-16">
          <div className="tag-row">
            <span className="tag">{p.category}</span>
            {p.tech.slice(0, 5).map((x) => (
              <span key={x} className="tag">
                {x}
              </span>
            ))}
          </div>
          <h1 className="display proj-title">{p.title}</h1>
          <p className="muted">{p.role}</p>
        </header>

        <div className="grid-2">
          <article className="prose">
            <h2>{t.projectSummary}</h2>
            <p>{p.solution}</p>

            <h2>{t.projectProblem}</h2>
            <p>{p.problem}</p>

            <h2>{t.projectRole}</h2>
            <p>{p.role}</p>
          </article>

          <aside className="proj-side">
            <div className="proj-card">
              <div className="proj-kicker">{t.projectDecisions}</div>
              <ul className="proj-list">
                {p.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="proj-card">
              <div className="proj-kicker">{t.projectOutcome}</div>
              <p className="muted">{p.outcome}</p>
            </div>
            <div className="proj-card">
              <div className="proj-kicker">{t.projectLearnings}</div>
              <p className="muted">{p.learnings}</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailPage;

