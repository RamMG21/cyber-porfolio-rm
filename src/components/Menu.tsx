import { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { name: 'About Me', id: 'basic-info' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' }
  ];

  const handleNavigation = (index: number, id: string) => {
    setActiveIndex(index);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <ul className="ul-1">
      {menuItems.map((item, index) => (
        <li
          key={item.id}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => handleNavigation(index, item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Menu;