import { useMemo, useState } from "react";
import { experience as experienceData } from "../data/experience";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Experience() {
  const items = useMemo(() => experienceData, []);
  const [index, setIndex] = useState(0);

  const total = items.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section className="experience" id="experience" onKeyDown={onKeyDown}>
      <div className="container experience__inner">
        <div className="experience__header">
          <h2 className="experience__title">Experience</h2>

          <div
            className="experience__controls"
            aria-label="Experience carousel controls"
          >
            <button
              type="button"
              className="circle-btn"
              onClick={prev}
              aria-label="Previous experience"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              className="circle-btn"
              onClick={next}
              aria-label="Next experience"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="experience__viewport" aria-live="polite">
          <div
            className="experience__track"
            style={{
              transform: `translateX(calc(-1 * var(--slide-step) * ${index}))`,
            }}
          >
            {items.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="experience-card"
                aria-label={`${job.company}, ${job.role}`}
              >
                <div className="experience-card__meta">
                  <div className="experience-card__dates">{job.dates}</div>
                  <div className="experience-card__company">{job.company}</div>
                  <div className="experience-card__role">{job.role}</div>
                </div>

                <div className="experience-card__details">
                  <ul className="experience-card__bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__dots" aria-label="Carousel position">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`experience__dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to experience ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
