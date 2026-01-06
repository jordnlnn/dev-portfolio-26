import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container projects__inner">
        <h2 className="projects__title">Projects</h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-card__content">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
              </div>

              <div className="project-card__actions">
                <a
                  className="btn btn--solid"
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE
                </a>

                <a
                  className="btn btn--outline"
                  href={p.links.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  CODE
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
