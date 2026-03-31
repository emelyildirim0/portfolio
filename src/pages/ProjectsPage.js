import "../css/Projects2.css";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects, projectCategories } from "../content/projects";

function ProjectsPage({ t, lang }) {
  const [active, setActive] = useState("All");
  const projects = getProjects(lang);
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div className="container projects">
      <section className="glass section stack-24">
        <div className="section-head">
          <h1 className="display">{t.sectionProjects}</h1>
          <p className="muted">
            CV’ndeki deneyim başlıklarına göre düzenlenmiş örnek çalışma alanları.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Proje filtreleri">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c === "All" ? t.filterAll : c}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map((p) => (
            <article className="proj-card" key={p.slug}>
              <div className="proj-top">
                <span className="tag">{p.category}</span>
                <span className="muted proj-role">{p.role}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="muted">{p.problem}</p>
              <div className="tag-row">
                {p.tech.slice(0, 4).map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link className="btn proj-btn" to={`/projects/${p.slug}`}>
                {t.viewDetails}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;

