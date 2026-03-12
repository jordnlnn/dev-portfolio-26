import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <h1 id="hero-title" className="hero__title">
          Crafting Seamless Experiences
        </h1>

        <p className="hero__description">
          Where Indigenous Perspective Meets Modern Digital Craftsmanship
        </p>

        <nav className="hero__social" aria-label="Social media links">
          <a
            className="icon-btn"
            href="https://github.com/jordnlnn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/jordangoldtooth/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>

          <a
            className="icon-btn"
            href="https://instagram.com/jordnlnn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
        </nav>
      </div>
    </section>
  );
}
