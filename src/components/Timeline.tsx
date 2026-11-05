
import './Timeline.css';

type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  technologies: string;
  description: string;
};

export default function Timeline() {

  const timelineItems: TimelineItem[] = [
    {
      year: '2023 -> 2026',
      title: 'Desarrollador React-Native',
      subtitle: 'Desarrollador independiente // Rancho Cucamonga, California',
      technologies: 'React.JS // AppWrite // TailwindCSS // Node.JS',
      description: '- Participación activa en la fase de UX/UI, basada en los estándares de usabilidad y diseño más actuales.\n- Desarrollo del front-end utilizando Tailwind para la estandarización del diseño en las aplicaciones.\n- Análisis y desarrollo del back-end con Node.js, integrando servicios en la nube de AWS y Appwrite.'
    },
    {
      year: '2020 -> 2023',
      title: 'Desarollador Full-Stack',
      subtitle: 'Trabjo de instructor beca // Centro de ciencias de la computacion // Universidad autonoma de Aguascalientes',
      technologies: 'JavaScript // Node.JS // EJS // Express.JS  // API REST',
      description: '- Desarrollo de interfaz web con EJS, priorizando una experiencia intuitiva para usuarios no técnicos.\n- Implementación de servicios Back-End con Node.js y Express.js para la administración de scripts y procesamiento de análisis científicos.\n- Diseño de funcionalidades orientadas a facilitar el estudio de cadenas proteicas y la gestión de datos biológicos.'

    },
    {
      year: '2017 -> 2019',
      title: 'Analista de Calidad de Software',
      subtitle: 'RAINDE Fleet Managment Systems',
      technologies: 'CYBERSECURITY // NETWORK SECURITY',
      description: '- Detección, documentación y seguimiento de defectos en aplicaciones .NET, colaborando con el equipo de desarrollo para garantizar la calidad del software antes de su liberación.\n- Automatización de pruebas de regresión sobre componentes y servicios en C# y .NET, asegurando la estabilidad del código en cada ciclo de integración continua.'
    }
  ];

  return (
    <section className="timeline">

      {timelineItems.map((item, index) => (
        <article className="timeline-item" key={index}>

          <div className="timeline-marker">
           
            <span className="timeline-dot"></span>
          </div>

          <div className="timeline-card">
            <span className="timeline-label">
              EXPERIENCE // 00{index + 1}
            </span>

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>

            <span className="timeline-tech">
              {item.technologies}
            </span>

            <p className="timeline-description">{item.description}</p>
          </div>

        </article>
      ))}

    </section>
  );
}