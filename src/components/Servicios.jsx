import React from "react";
import "./css/style.css";
import a from "../img/a_2.png";
import a2 from "../img/1681343616178.png";
import x from "../img/24-08-2022.mp4";

function Servicios() {
  return (
    <div className="art">
      <h1>NUESTROS SERVICIOS</h1>
      <p>
        En nuestra empresa de animación digital, ofrecemos una amplia variedad
        de servicios para satisfacer las necesidades de nuestros clientes. Ya
        sea que necesite una animación para su sitio web, un video promocional
        para su negocio o una presentación animada para su próxima reunión,
        ¡nosotros podemos ayudar! También podemos crear animaciones cortas para
        redes sociales, animaciones explicativas para enseñanza online, y mucho
        más.
      </p>
      <br />

      <h2>Nuestros servicios incluyen:</h2>

      <h3>Animación 2D y 3D</h3>
      <p>
        Creamos animaciones en 2D y 3D de alta calidad y realismo. Nuestro
        equipo de animadores altamente capacitados y experimentados está
        comprometido en ofrecer resultados impresionantes en cada proyecto.
        Utilizamos las herramientas y tecnologías más recientes para crear
        animaciones detalladas y sorprendentes que pueden ser utilizadas para
        diversos propósitos, como videos promocionales y juegos en línea.
        Nuestro proceso de creación de animaciones comienza con una estrecha
        colaboración con nuestros clientes para comprender sus objetivos y
        requisitos específicos. A partir de ahí, nuestro equipo creativo se
        dedica a diseñar los elementos visuales y narrativos necesarios para dar
        vida a la animación. Cada detalle es cuidadosamente considerado y
        refinado para asegurarnos de que el resultado final cumpla con las
        expectativas de nuestros clientes y sus audiencias.
      </p>
      <img src={a} className="serv" alt="Animación 2D y 3D" />

      <h3>Diseño de personajes</h3>
      <p>
        En nuestra agencia, ofrecemos servicios de diseño de personajes
        personalizados que se ajustan a tus necesidades específicas. Nuestros
        diseñadores trabajan en estrecha colaboración contigo para entender tus
        requisitos y desarrollar personajes únicos que sean coherentes con tu
        marca y objetivo. Ya sea que necesites personajes para usar en una
        animación o un videojuego, nuestro equipo de diseñadores expertos están
        listos para crear modelos en 3D detallados y realistas para dar vida a
        tus personajes.
        <br className="p-art" />
        Desde el boceto inicial hasta la entrega final, nuestro proceso de
        diseño de personajes es altamente colaborativo y orientado a resultados.
        Nos aseguramos de que cada personaje que creamos tenga una personalidad
        única y se adapte perfectamente a la narrativa o el contexto en el que
        se utilizará.
      </p>
      <img src={a2} className="serv" alt="Diseño de personajes" />

      <h3>Presentaciones animadas</h3>
      <p>
        En el mundo actual de los negocios y la educación, las presentaciones
        son una herramienta esencial para comunicar ideas y persuadir a
        audiencias. En nuestra empresa de animación digital, ofrecemos
        presentaciones animadas personalizadas que son perfectas para este
        propósito. Nuestros diseñadores trabajan en estrecha colaboración con
        nuestros clientes para asegurarse de que cada presentación se ajuste a
        sus necesidades específicas. Ya sea que se trate de una presentación de
        negocios o de una presentación en clase, podemos agregar efectos
        especiales, música y voz en off para hacerla más impactante y memorable.
        Además, en nuestra empresa nos enorgullece ofrecer servicios de alta
        calidad a precios razonables. Sabemos lo importante que es una
        presentación efectiva para el éxito de su empresa o carrera académica,
        por lo que nos esforzamos por hacer que nuestras presentaciones sean
        accesibles para todos. Ofrecemos presupuestos personalizados para cada
        proyecto y trabajamos con nuestros clientes para asegurarnos de que
        estén satisfechos con el resultado final
      </p>
      <video src={x} alt="Presentaciones animadas" controls />

      <br />
      <p>
        En nuestra empresa de animación digital, nos dedicamos a ofrecer
        servicios de alta calidad a precios razonables. Sabemos que las
        presentaciones animadas personalizadas pueden ser costosas, pero nos
        esforzamos por hacer que nuestros servicios sean accesibles para todos.
        Creemos que cada proyecto es importante y trabajamos en estrecha
        colaboración con nuestros clientes para asegurarnos de que estén
        satisfechos con el resultado final.
        <br className="p-art" />
        Ofrecemos una amplia gama de servicios de animación, incluyendo
        presentaciones animadas personalizadas, videos explicativos, animaciones
        de logotipos y mucho más. Nuestro equipo de diseñadores talentosos y
        experimentados está aquí para ayudarle a hacer realidad sus ideas y
        llevar su proyecto al siguiente nivel.
        <br className="p-art" />
        En conclusión, si está buscando una empresa de animación digital que
        ofrezca servicios de alta calidad a precios razonables, no busque más.
        En nuestra empresa, nos enorgullece ofrecer servicios de presentación
        animada personalizada de alta calidad y trabajar en estrecha
        colaboración con nuestros clientes para garantizar su satisfacción.
        ¡Póngase en contacto con nosotros hoy mismo para obtener más información
        y solicitar un presupuesto personalizado!
      </p>
    </div>
  );
}

export default Servicios;
