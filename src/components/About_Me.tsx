import './About_Me.css';
import { useState } from "react";

type AboutMeCardProps = {
  title: string;
  degree: string;
  thesis: string;
  details: string;
};

function AboutMeCard({
  title,
  degree,
  thesis,
  details,
}: AboutMeCardProps) {
  const [active, setActive] = useState(false);

  return (
    <article
      className={`about-me-card ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActive(!active);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={active}
    >
      <div className="about-me-card-content">
        <span className="about-me-card-label">Informacion//</span>

        <h3>{title}</h3>

        <p>{degree}</p>

        <p>{thesis}</p>

        <span className="about-me-card-action">
          {active ? "[ CLOSE_INTERFACE ]" : "[ SELECCIONE_PARA_MAS_INFO ]"}
        </span>
      </div>

      <div className="about-me-hologram">
        <span className="about-me-hologram-status">
          _ACCESO
        </span>

        <h3>{title}</h3>

        <p>{details}</p>

        <div className="about-me-scan-progress">
          <div className="about-me-scan-progress-bar" />
        </div>

        <span className="about-me-hologram-footer">
          ENCRYPTED_DATA // END_OF_FILE
        </span>
      </div>
    </article>
  );
}

export default function AboutMe() {
  const aboutMeItems = [
    {
      title: "Perfil profesional",
      degree: "Ingeniero en Computación Inteligente",
      thesis: "Estudiante del Máster en Ciberseguridad en la Universidad de Salamanca.",
      details:
        "Ingeniero en Computación Inteligente por la Universidad Autónoma de Aguascalientes del 2016 al 2021 y estudiante del Máster en Ciberseguridad en la Universidad de Salamanca del 2026 al 2027. Cuento con tres años de experiencia en proyectos tecnológicos y de investigación, así como conocimientos en desarrollo de software, inteligencia artificial y metodologías ágiles.",
    },
    {
      title: "Universidad Autónoma de Aguascalientes",
      degree: "Grado en Ingeniería en Computación Inteligente",
      thesis:
        "Trabajo de fin de grado: “Integración de módulos de preprocesamiento de datos biológicos a través del software UAA-PROT”.",
      details:
        "Integrar los módulos de preprocesamiento para los análisis de datos bioinformáticas, de la metodología basado en mejores aciertos bidireccionales, mediante un desarrollo web para el procesamiento de la información incorporado al software UAA–PROT sobre un servidor web.",
    },
    {
      title: "Universidad de salamanca",
      degree: "Master en Ciberseguridad",
      thesis: "Trabajo de fin de máster: “{Aun no definido}”.",
      details:
        " Proporcionar una formación avanzada e interdisciplinar sobre las amenazas y debilidades más comunes en los entornos digitales, sobre las técnicas y metodologías para prevenir, detectar y responder a incidentes de seguridad, así como las regulaciones y estándares nacionales e internacional relacionados con la ciberseguridad.",
    },
  ];

  return (
    <section className="about-me">
      {aboutMeItems.map((aboutMeItem, index) => (
        <div
          key={index}
          className={index === 0 ? "about-me-featured" : ""}
        >
          <AboutMeCard {...aboutMeItem} />
        </div>
      ))}
    </section>
  );
}
