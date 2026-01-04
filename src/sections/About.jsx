export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__content">
          <h2 className="about__title">Who I Am</h2>

          <p>
            I’m a web and application developer focused on building
            product-quality interfaces that balance usability and engineering
            discipline. I care deeply about accessibility, clarity, and creating
            interfaces that are reliable, scalable, and intentional.
          </p>

          <p>
            My interests also extend into Indigenous tech initiatives, where I’m
            committed to helping preserve and promote language and culture
            through thoughtful, accessible digital solutions, while also
            pursuing broader opportunities that support long-term growth as a
            software engineer.
          </p>
        </div>

        <div className="about__media" aria-hidden="true">
          <div className="about__avatar">
            <img src="../../assets/portrait.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
