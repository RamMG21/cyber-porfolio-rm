import './Contact.css';

const contactItems = [
  {
    label: 'CORREO_ELECTRONICO',
    value: 'ram.ramses@outlook.com',
    href: 'mailto:ram.ramses@outlook.com',
    external: false,
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/jr-moreno21',
    href: 'https://www.linkedin.com/in/jr-moreno21/',
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" aria-label="Contacto y redes sociales">
      {contactItems.map((item) => (
        <a
          key={item.label}
          className="contact-card"
          href={item.href}
          {...(item.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <span className="contact-card-label">{item.label}</span>
          <span className="contact-card-value">{item.value}</span>
          <span className="contact-card-action">
            {item.external ? '[ ABRIR_PERFIL ]' : '[ ENVIAR_CORREO ]'}
          </span>
        </a>
      ))}
    </section>
  );
}
