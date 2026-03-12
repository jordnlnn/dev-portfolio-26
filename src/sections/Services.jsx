import { services } from "../data/services";
import { FaPalette, FaCode, FaWrench } from "react-icons/fa";

export default function Services() {
  const getIcon = (icon) => {
    switch (icon) {
      case "palette":
        return <FaPalette className="service-card__icon" />;
      case "code":
        return <FaCode className="service-card__icon" />;
      case "wrench":
        return <FaWrench className="service-card__icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="services" id="services">
      <div className="container services__inner">
        {/* <h2 className="services__title">WHAT I DO</h2>
        <p className="services__subtitle">How can I help grow your business?</p> */}

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="service-card" tabIndex="0">
              <div className="service-card__inner">
                {/* Front Face */}
                <article className="service-card__front">
                  <div className="service-card__icon-wrapper">
                    {getIcon(s.icon)}
                  </div>
                  <h3 className="service-card__title">
                    {s.title.toUpperCase()}
                  </h3>
                </article>

                {/* Back Face */}
                <article className="service-card__back">
                  <p className="service-card__desc">{s.description}</p>
                  <a href="#contact" className="btn btn--solid hire-btn">
                    HIRE ME
                  </a>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="services__actions">
          <a href="#contact" className="btn btn--solid hire-btn">
            HIRE ME
          </a>
        </div> */}
      </div>
    </section>
  );
}
