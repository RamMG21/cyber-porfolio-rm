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
  return (
    <article className="experience-card active">
      <div className="card-content">
        <span className="card-label">EDUCATION // 001</span>

        <h3>{title}</h3>

        <p>{degree}</p>

        <p>{thesis}</p>

        <span className="card-action">
          [ CLOSE_INTERFACE ]
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
      title: "Visa Climate Tech Hackathon 2024",
      degree: "B.Eng. Intelligent Computing Engineering",
      thesis:
        "Participación en el Visa Climate Tech Hackathon 2024, una iniciativa internacional de innovación tecnológica enfocada en desarrollar soluciones digitales que contribuyan a la sostenibilidad ambiental. El evento planteó el uso de datos financieros, tecnologías digitales y herramientas de análisis para fomentar hábitos de consumo responsables, mejorar la eficiencia energética e impulsar modelos de economía circular. La experiencia permitió fortalecer habilidades de resolución de problemas, innovación, colaboración multidisciplinaria y desarrollo de soluciones tecnológicas con impacto ambiental.",
      details:
        "Participación en el Visa Climate Tech Hackathon 2024, una iniciativa internacional de innovación tecnológica enfocada en desarrollar soluciones digitales que contribuyan a la sostenibilidad ambiental. El evento planteó el uso de datos financieros, tecnologías digitales y herramientas de análisis para fomentar hábitos de consumo responsables, mejorar la eficiencia energética e impulsar modelos de economía circular. La experiencia permitió fortalecer habilidades de resolución de problemas, innovación, colaboración multidisciplinaria y desarrollo de soluciones tecnológicas con impacto ambiental.",
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