export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h3 className="contact__title">Contact</h3>

        <p className="contact__description">
          I'm open to entry-level software engineering roles, React, and/or
          React Native project work. The best way to reach me is by email.
        </p>

        <a
          id="contact-btn"
          className="btn btn--solid"
          href="mailto:jordangoldtooth@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          EMAIL
        </a>
      </div>
    </section>
  );
}
