
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
      year: '2020',
      title: 'Software Developer',
      subtitle: 'UAA // Biochemistry Research',
      technologies: 'NODE.JS // EXPRESS // EJS',
      description: 'Development of a biological data processing platform.'
    },
    {
      year: '2021',
      title: 'Full-Stack Developer',
      subtitle: 'Web Application Development',
      technologies: 'REACT // TYPESCRIPT // NODE.JS',
      description: 'Development of web applications and software solutions.'
    },
    {
      year: '2026',
      title: 'Master in Cybersecurity',
      subtitle: 'Universidad de Salamanca',
      technologies: 'CYBERSECURITY // NETWORK SECURITY',
      description: 'Specialized training in cybersecurity and information security.'
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

            <p>{item.description}</p>
          </div>

        </article>
      ))}

    </section>
  );
}