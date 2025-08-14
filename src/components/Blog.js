import "../css/Blog.css";
function Blog({ t }) {
  const posts = [
    {
      id: 1,
      title: t.samplePostTitle1,
      summary: t.samplePostSummary1,
    },
    {
      id: 2,
      title: t.samplePostTitle2,
      summary: t.samplePostSummary2,
    },
  ];

  return (
    <section id="blog">
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>{t.blogTitle}</h2>
      <div className="blog-container">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <button>{t.readMore}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
