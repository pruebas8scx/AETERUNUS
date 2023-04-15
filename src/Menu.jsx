import React, { useState } from "react";
import "./Menu.css";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Logo from "./img/logos.png";
import Contacto from './components/cont'
import Faq from './components/FAQ'


const Menu = () => {
  const [active, setActive] = useState(0);

  const handleMenuClick = (index) => {
    setActive(index);
  };

  const menuItems = [
    { name: "Inicio", component: <Inicio /> },
    { name: "Servicios", component: <Servicios /> },
    { name: "contacto", component: <Contacto /> },
    { name: "FAQ", component: <Faq /> },
    /*{ name: "Servicios", component: <Servicios /> },
    { name: "Servicios", component: <Servicios /> },
    { name: "Servicios", component: <Servicios /> },
    { name: "Servicios", component: <Servicios /> },*/
  ];

  return (
    <div className="menu-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>AETERNUS</h1>
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={active === index ? "menu-item active" : "menu-item"}
            onClick={() => handleMenuClick(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="menu-content">{menuItems[active].component}</div>
    </div>
  );
};

export default Menu;
