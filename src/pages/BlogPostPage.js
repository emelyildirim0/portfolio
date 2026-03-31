import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../content/posts";
import "../css/Post.css";

function renderBlock(block, idx) {
  if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
  if (block.type === "p") return <p key={idx}>{block.text}</p>;
  if (block.type === "ul")
    return (
      <ul key={idx}>
        {block.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  return null;
}

function BlogPostPage({ t, lang }) {
  const { slug } = useParams();
  const post = getPostBySlug(lang, slug);

  if (!post) {
    return (
      <div className="container post">
        <section className="glass section stack-16">
          <h1 className="display">Bulunamadı</h1>
          <p className="muted">Bu yazı mevcut değil.</p>
          <Link className="btn" to="/blog">
            {t.backToPosts}
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container post">
      <section className="glass section stack-24">
        <Link to="/blog" className="muted link-quiet">
          ← {t.backToPosts}
        </Link>
        <div className="post-head">
          <h1 className="display post-title">{post.title}</h1>
          <div className="post-sub">
            <div className="tag-row">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="muted">
              {post.readingMins} {t.minutes}
            </div>
          </div>
        </div>
        <article className="prose">{post.body.map(renderBlock)}</article>
      </section>
    </div>
  );
}

export default BlogPostPage;

