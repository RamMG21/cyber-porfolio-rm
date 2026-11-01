
import { useState } from "react";
import "./experience.css";

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
  const [flipped, setFlipped] = useState(false);

  return (

    <div
      className={`experience-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      aria-label={flipped ? "Volver a la tarjeta frontal" : "Voltear tarjeta"}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped(!flipped);
        }
      }}
    >
      <div className="experience-card-inner">
        {/* Parte frontal */}
        <div className="experience-card-front">
          <h3>{title}</h3>
          <p>{degree}</p>
          <p>{thesis}</p>
          <span className="card-hint">Haz clic para descubrir más ↻</span>
        </div>

        {/* Parte trasera */}
        <div className="experience-card-back">
          <h3>Más información</h3>
          <p>{details}</p>
          <span className="card-hint">Haz clic para volver ↻</span>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "Autonomous University of Aguascalientes",
      degree:
        "Bachelor Degree: Intelligent Computing Engineering — Major: Artificial Intelligence.",
      thesis:
        "Undergraduate Thesis: Integration of biological data preprocessing modules through software.",
      details:
        "Development of technological projects involving programming, data processing and intelligent systems.",
    },
    {
      title: "Autonomous University of Aguascalientes",
      degree: "Bachelor Degree: Intelligent Computing Engineering.",
      thesis: "Major: Artificial Intelligence.",
      details:
        "Academic training focused on artificial intelligence algorithms and mathematical models.",
    },
    {
      title: "Autonomous University of Aguascalientes",
      degree: "Bachelor Degree: Intelligent Computing Engineering.",
      thesis: "Research and software development.",
      details:
        "Experience in software development and scientific research projects.",
    },
    {
      title: "Autonomous University of Aguascalientes",
      degree: "Bachelor Degree: Intelligent Computing Engineering.",
      thesis: "Undergraduate research.",
      details:
        "Integration of software modules for biological data preprocessing.",
    },
  ];

  return (
    <div className="fila-experience">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
}
