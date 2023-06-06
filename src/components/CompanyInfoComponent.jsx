import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./css/hhrr.css";

const CompanyInfoComponent = () => {
  const roles = [
    {
      name: "Director creativo",
      content:
        "ideal para personas con grandes ideas y una gran historia para contar. Si bien no es 100% necesario que seas un experto en animación, seguro tendrás que saber bastante de todos los temas que conciernen al proyecto.",
    },
    {
      name: "Productor y asistente de producción",
      content:
        "ahora, si lo que te busca es ejecutar las ideas de la mejor manera, ser productor es lo tuyo. Para cumplir con este rol a la perfección y que una empresa deanimación te contrate, deberás tomar grandes decisiones como el presupuesto, los equipos, las locaciones y hasta coordinar el cronograma.",
    },
    {
      name: "Guionista",
      content:
        "poder trabajar en equipo es un must para cualquier integrante de un estudio de animación, pero para ser guionista aún más. Serás la persona encargada de dar vida a los personajes desde sus acciones y conversaciones.",
    },
    {
      name: "Animador",
      content:
        "una vez que todos los escenarios y personajes estén listos, como animador eres la persona encargada de dar vida a la historia. Ahora bien, cada empresa de animación tiene su propia cultura y aquí es donde deberás reconocer cuáles son tus habilidades, puedes probar desde la animación hasta el stop motion.",
    },
    {
      name: "Sonido",
      content:
        "efectos, música y doblaje son sólo algunas de las incumbencias de un diseñador de sonido. ¿Te gusta la tecnología y también la animación pero no exactamente el dibujo? ¡Prueba con esta rama! Seguro te encantará",
    },
  ];

  const [showBox, setShowBox] = useState(false);
  const [boxContent, setBoxContent] = useState("");

  const handleWordClick = (role) => {
    setBoxContent(role);
    setShowBox(true);
  };

  const closeBox = () => {
    setShowBox(false);
  };

  return (
    <div>
      <h2>Misión</h2>
      <p>
        Nuestra misión es lograr ser una empresa novedosa y vanguardista, para
        cumplir nuestra meta formaremos un equipo de profesionistas visionarios,
        con un alto perfil creativo para cumplir las demandas de nuestros
        clientes, Somos un estudio de animación mexicano que busca transmitir
        valor, concretar sueños e inspirar a las personas a ser mejores mediante
        obras y contenido animado de calidad.
      </p>

      <h2>Visión</h2>
      <p>
        Nos consideramos una empresa líder en animación y arte Digital,
        construyendo un equipo solidario reconocido por nuestra contribución a
        la comunidad y la manera de contar historias y dar vida a las ideas
        nuevas, innovadoras y creativas.
      </p>

      <h2>Recursos Humanos</h2>
      <p>
        Para trabajar en AETERNUS, hace falta ser alguien con criterio,
        pensamiento crítico e interés en los detalles. Sobre todo si tu
        contratación depende del mismo Miyazaki. También es importante que sepas
        japonés, aunque no es una habilidad excluyente. Este estudio fue fundado
        el 05 de agosto de 2022 por nuestro Director general Kevin Aristeo,
        Raquel Torres y Abelina Campos. Hoy en día es uno de los estudios de
        animación con más de 37 películas animadas estrenadas.
      </p>
      <h2>AETERNUS cuenta con los siguientes recursos adicionales:</h2>
      <h2>Recurso Financiero</h2>
      <p>
        Presupuesto y financiamiento. El estudio destina recursos financieros
        adecuados para llevar a cabo sus proyectos de animación, incluyendo la
        contratación de personal, desarrollo de proyectos, producción y
        distribución de películas animadas.
      </p>
      <h2>Recurso de Control</h2>
      <p>
        AETERNUS se enorgullece de mantener altos estándares de calidad en todas
        sus películas y series animadas. Para lograrlo, se implementan diversas
        medidas de control a lo largo de todo el proceso de producción. Estas
        son algunas de las actividades relacionadas con el control de calidad en
        AETERNUS:
      </p>
      <ul className="cnt">
        <li>
          Revisión de guiones: Antes de comenzar la producción de una película
          animada, se realiza una exhaustiva revisión del guion para asegurarse
          de que la historia sea sólida, coherente y atractiva para el público
          objetivo. Se analizan aspectos como la estructura narrativa, los
          personajes, los diálogos y los mensajes transmitidos.
        </li>
        <li>
          Evaluación de diseños: El equipo de diseño de AETERNUS crea los
          conceptos visuales de los personajes, escenarios y elementos de cada
          película animada. Estos diseños son sometidos a un proceso de
          evaluación en el que se verifica que sean estéticamente atractivos, se
          ajusten al estilo visual deseado y sean funcionales para la animación.
        </li>
        <li>
          Control de animación: Durante la fase de animación, se realizan
          revisiones periódicas de las secuencias animadas para asegurar la
          fluidez, expresividad y coherencia en los movimientos de los
          personajes. Se presta especial atención a los detalles técnicos, como
          la sincronización labial, la anatomía correcta y la consistencia
          visual.
        </li>
        <li>
          Calidad de la producción: Una vez finalizada la animación, se lleva a
          cabo una revisión minuciosa de la película en su conjunto. Se analizan
          aspectos como la calidad de la imagen, la edición, los efectos
          visuales, la mezcla de sonido y la música. Se realizan ajustes y
          correcciones si es necesario para asegurar un producto final de alta
          calidad.
        </li>
        <li>
          Evaluación de audiencia: Antes de lanzar una película animada, se
          realizan proyecciones de prueba para una audiencia seleccionada. Se
          recopilan opiniones y comentarios para evaluar la recepción de la
          película y realizar ajustes finales si es necesario. Esto ayuda a
          garantizar que el producto final sea atractivo y satisfaga las
          expectativas de la audiencia.
        </li>
      </ul>
      <h2>Recurso de Producción: Tecnología y equipos</h2>
      <p>
        AETERNUS se asegura de contar con la última tecnología y equipos
        necesarios para la producción de películas animadas. Esto incluye
        hardware y software especializados para animación, renderizado, edición
        y efectos visuales. Además, se proporcionan las herramientas adecuadas
        para cada departamento y puesto de trabajo.
      </p>
      <p>
        ¿Eres un gran dibujante, pero la verdad es que se te da más por la
        organización y gestión de los proyectos? ¡Tenemos una gran noticia para
        ti! Esto no significa que no puedas formar parte de una compañía de
        animación. Veamos algunos de los y departamentos más significativos:
      </p>

      <div className="button-container">
        {roles.map((role) => (
          <button
            className="role-button"
            key={role.name}
            onClick={() => handleWordClick(role)}
          >
            {role.name}
          </button>
        ))}
      </div>

      {showBox && (
        <div className="info-overlay">
          <div className="info-box">
            <div className="title">
              <button className="close-button" onClick={closeBox}>
                <FaTimes style={{ color: "red" }} />
              </button>
              <h3 className="box-title">{boxContent.name}</h3>
            </div>
            <p className="box-content">{boxContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyInfoComponent;
