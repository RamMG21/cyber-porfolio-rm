import { useState } from "react";
import "./projects.css";

type ExperienceCardProps = {
  title: string;
  degree: string;
  thesis: string;
  details: string;
};

function ExperienceCard({
  title,
  degree,
  thesis,
  details,
}: ExperienceCardProps) {
  const [active, setActive] = useState(false);

  return (
    <article
      className={`experience-card ${active ? "active" : ""}`}
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
      <div className="card-content">
        <span className="card-label">EDUCATION // 001</span>

        <h3>{title}</h3>

        <p>{degree}</p>

        <p>{thesis}</p>

        <span className="card-action">
          {active ? "[ CLOSE_INTERFACE ]" : "[ ACCESS_DATA ]"}
        </span>
      </div>

      <div className="hologram">
        <span className="hologram-status">
          SYSTEM_ACCESS_GRANTED
        </span>

        <h3>{title}</h3>

        <p>{details}</p>

        <div className="scan-progress">
          <div className="scan-progress-bar" />
        </div>

        <span className="hologram-footer">
          ENCRYPTED_DATA // END_OF_FILE
        </span>
      </div>
    </article>
  );
}

export default function Experience() {
  const experiences = [
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
    {
      title: "Software Development",
      degree: "Research Projects",
      thesis: "Development of technological solutions.",
      details:
        "Experience developing software tools and integrating components for research applications.",
    },
    {
      title: "Biological Data Processing",
      degree: "Undergraduate Research",
      thesis: "UAA-PROT software project.",
      details:
        "Integration of preprocessing modules to support the analysis of biological data.",
    },
  ];

  return (
    <section className="fila-experience">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          {...experience}
        />
      ))}
    </section>
  );
}