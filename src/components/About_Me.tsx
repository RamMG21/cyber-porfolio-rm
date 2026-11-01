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
        <span className="about-me-card-label">EDUCATION // 001</span>

        <h3>{title}</h3>

        <p>{degree}</p>

        <p>{thesis}</p>

        <span className="about-me-card-action">
          {active ? "[ CLOSE_INTERFACE ]" : "[ ACCESS_DATA ]"}
        </span>
      </div>

      <div className="about-me-hologram">
        <span className="about-me-hologram-status">
          SYSTEM_ACCESS_GRANTED
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
      title: "Autonomous University of Aguascalientes",
      degree: "B.Eng. Intelligent Computing Engineering",
      thesis:
        "Undergraduate thesis: Integration of biological data preprocessing modules through software.",
      details:
        "Academic training in intelligent algorithms, mathematical models, software development and biological data processing.",
    },
    {
      title: "Artificial Intelligence",
      degree: "Intelligent Systems",
      thesis: "Algorithm development and mathematical modeling.",
      details:
        "Study of artificial intelligence algorithms and computational methods for solving complex problems.",
    },
  ];

  return (
    <section className="about-me">
      {aboutMeItems.map((aboutMeItem, index) => (
        <AboutMeCard
          key={index}
          {...aboutMeItem}
        />
      ))}
    </section>
  );
}