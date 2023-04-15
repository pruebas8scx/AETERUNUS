import React from "react";
import './css/inicio.css'
import ejemploa from '../img/1681531893321.png'
import ejemplob from '../img/1681531893294.png'
import banner from '../img/banner.png'

function Inicio() {
  return (
    <section id="inicio">
      <div className="encabezado">
        <img
          src={banner}
          alt="Encabezado de animación digital"
        />
      </div>
      <div className="descripcion">
        <p>
          Ofrecemos servicios de animación digital de alta calidad para negocios
          y proyectos creativos.
        </p>
      </div>
      <div className="ejemplos">
        <h2>Ejemplos de nuestro trabajo:</h2>
        <div className="carrusel">
          <img src={ejemploa} alt="Ejemplo de animación 1" />
          <img src={ejemplob} alt="Ejemplo de animación 2" />
        </div>
      </div>
      <div className="servicios">
        <h2>Nuestros servicios:</h2>
        <ul>
          <li>Animación 2D</li>
          <li>Modelado 3D</li>
          <li>Diseño de personajes</li>
          <li>Ilustración</li>
        </ul>
      </div>
      <div className="testimonios">
        <h2>Lo que dicen nuestros clientes:</h2>
        <p>
          "La animación que crearon para nuestro proyecto fue impresionante. Los
          recomendaría a cualquier persona en busca de una animación de alta
          calidad".
        </p>
        <p>
          "El equipo de animación de esta empresa es excepcional. Estoy muy
          feliz con el resultado final de mi proyecto".
        </p>
      </div>
    </section>
  );
}

export default Inicio;
