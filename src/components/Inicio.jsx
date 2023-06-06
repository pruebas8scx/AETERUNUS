import React from "react";
import "./css/inicio.css";
import ejemploa from "../img/1681531893321.png";
import ejemplob from "../img/1681531893294.png";
import banner from "../img/banner.png";

function Inicio() {
  return (
    <section id="inicio">
      <div className="encabezado">
        <img src={banner} alt="Encabezado de animación digital" />
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
        <p>nos ubicamos en zapotiltic, jalisco, mexico</p>
        <p>
          nos puedes encontrar en twitter, intragan y youtube como
          animated-AETERNUS{" "}
        </p>
        <p>•TIPO DE EMPRESA: SERVICIOS</p>
        <ul className="servicios">
          <h2>Ética y Responsabilidad Corporativa de la Empresa:</h2>

          <p>
            AETERNUS considera la ética y la responsabilidad corporativa como
            valores fundamentales en todas sus operaciones y decisiones. La
            empresa se esfuerza por actuar de manera responsable y ética en
            todas las áreas de su negocio, tanto hacia sus empleados como hacia
            la sociedad en general. A continuación, se detallan algunos aspectos
            clave de la ética y la responsabilidad corporativa de AETERNUS:
          </p>

          <li>
            Trato justo y equitativo: AETERNUS se compromete a mantener un
            ambiente de trabajo justo y equitativo para sus empleados. Esto
            implica respetar la diversidad, promover la igualdad de
            oportunidades y tratar a todos los empleados con dignidad y respeto.
            No se tolera la discriminación, el acoso o cualquier forma de trato
            injusto.{" "}
          </li>

          <li>
            Transparencia y honestidad: AETERNUS promueve la transparencia y la
            honestidad en todas sus interacciones, tanto internas como externas.
            La empresa se esfuerza por comunicarse de manera clara y abierta con
            sus empleados, clientes, proveedores y otras partes interesadas. Se
            evita cualquier forma de engaño, falsificación de información o
            prácticas deshonestas.
          </li>

          <li>
            Cumplimiento legal y normativo: AETERNUS se compromete a cumplir con
            todas las leyes, regulaciones y normativas aplicables en todas las
            áreas de su negocio. Esto incluye aspectos como derechos laborales,
            protección del medio ambiente, propiedad intelectual y cualquier
            otra área relevante. La empresa adopta un enfoque proactivo para
            asegurarse de que sus operaciones cumplan con los estándares legales
            y éticos establecidos.
          </li>

          <li>
            Responsabilidad social y medioambiental: AETERNUS reconoce su
            responsabilidad hacia la sociedad y el medio ambiente. La empresa se
            esfuerza por minimizar su impacto ambiental a través de prácticas
            sostenibles en la producción y el uso eficiente de los recursos.
            Además, AETERNUS puede participar en iniciativas y proyectos
            sociales, como donaciones a organizaciones benéficas o
            colaboraciones con programas educativos relacionados con la
            animación.
          </li>

          <li>
            Ética en la creatividad y la narrativa: AETERNUS se compromete a
            mantener altos estándares éticos en la creación de contenido
            animado. La empresa considera la importancia de transmitir mensajes
            positivos, valores éticos y respeto en sus películas animadas. Se
            evita la promoción de contenido perjudicial, violento,
            discriminatorio o inapropiado para el público objetivo.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Inicio;
