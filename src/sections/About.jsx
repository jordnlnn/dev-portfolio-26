import portraitImg from "../../assets/jordan-portrait.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__content">
          <h2 className="about__title">Who I Am</h2>

          <p>
            Hey there! I'm Jordan, a freelance web developer and digital
            craftsman dedicated to building thoughtful, high-impact experiences
            for brands that care about their community. With a background rooted
            in both engineering and creative storytelling, I help small
            businesses and Indigenous organizations translate their vision into
            the digital space. Whether it's a bespoke portfolio or a complex
            application, my focus is always on clarity, accessibility, and
            cultural intentionality. When I'm not in front of a code editor,
            you'll probably find me exploring new design trends, contributing to
            Indigenous tech initiatives, or working on passion projects that
            bridge the gap between tradition and technology.
          </p>
        </div>

        <div className="about__media" aria-hidden="true">
          <div className="about__avatar">
            <img src={portraitImg} alt="Jordan's Professional Portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}
