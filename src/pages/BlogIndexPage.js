import { Link } from "react-router-dom";
import { getPosts } from "../content/posts";
import "../css/Blog2.css";

function BlogIndexPage({ t, lang }) {
  const posts = getPosts(lang);

  return (
    <div className="container blog">
      <section className="glass section stack-24">
        <div className="section-head">
          <h1 className="display">{t.blogTitle}</h1>
          <p className="muted blog-lead">
            Oracle PL/SQL, kurumsal süreçler, veri tabanı ve web üzerine notlar.
          </p>
        </div>

        <div className="blog-list">
          {posts.map((p) => (
            <article key={p.slug} className="blog-item">
              <div className="blog-item-top">
                <div className="tag-row">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="muted">
                  {p.readingMins} {t.minutes}
                </div>
              </div>
              <h2 className="blog-item-title">{p.title}</h2>
              <p className="muted">{p.summary}</p>
              <Link className="btn" to={`/blog/${p.slug}`}>
                {t.readMore}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogIndexPage;

