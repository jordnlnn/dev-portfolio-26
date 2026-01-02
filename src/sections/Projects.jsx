import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section style={{ padding: "var(--space-6) var(--space-4)" }} id="projects">
      <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "var(--fs-3)",
            marginBottom: "var(--space-4)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {projects.map((p) => (
            <article
              key={p.title}
              style={{
                background: "var(--panel)",
                borderRadius: "var(--radius)",
                padding: "var(--space-4)",
                boxShadow: "var(--shadow)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>
                {p.title}
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {p.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "var(--space-3)",
                  marginTop: "var(--space-3)",
                }}
              >
                <a href={p.links.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={p.links.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
