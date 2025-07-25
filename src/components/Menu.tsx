import { useState } from 'react';
import './Menu.css'; // Opcional si usas CSS separado

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = ['About Me', 'Experience', 'Projects','Certifications'];

  return (
    <ul className="ul-1">
      {menuItems.map((item, index) => (
        <li
          key={item}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => setActiveIndex(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Menu;