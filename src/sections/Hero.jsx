import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Frontend Developer Building Modern Web & Mobile Apps
        </h1>

        <p className="hero__description">
          I’m an Indigenous web and application developer building React and
          React Native experiences with clean UI, thoughtful interactions, and
          maintainable code.
        </p>

        <div className="hero__social" aria-label="Social links">
          <a
            className="icon-btn"
            href="https://github.com/jordnlnn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/jordangoldtooth/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="icon-btn"
            href="https://instagram.com/jordnlnn.dev"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
