import "../css/Projects.css";
function Projects({ projects, title }) {
  return (
    <section id="projects">
      <h2>{title.projects}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
