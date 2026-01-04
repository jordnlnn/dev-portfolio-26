import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container experience__inner">
        <h2 className="experience__title">Experience</h2>

        <div className="experience__list">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="experience__item"
            >
              <div className="experience__dates">{job.dates}</div>

              <h3 className="experience__heading">
                <span className="experience__company">{job.company}</span>
                <span className="experience__dash"> — </span>
                <span className="experience__role">{job.role}</span>
              </h3>

              <ul className="experience__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
