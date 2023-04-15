import React, { useState } from 'react';

import './css/Faq.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button onClick={toggleIsOpen}>{question}</button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
        question: '¿Qué tipo de animación realiza el estudio?',
        answer: 'El estudio realiza animaciones en 2D y 3D, así como también animaciones de personajes y efectos especiales.'
      },
      {
        question: '¿Cuál es el proceso de trabajo del estudio de animación?',
        answer: 'El proceso de trabajo del estudio de animación incluye la conceptualización, el diseño, la animación y la postproducción.'
      },
      {
        question: '¿Cuánto tiempo se tarda en producir una animación?',
        answer: 'El tiempo de producción de una animación depende de la complejidad y duración del proyecto. Por lo general, se requieren varias semanas o incluso meses.'
      },
      {
        question: '¿Cuáles son los precios del estudio de animación?',
        answer: 'Los precios del estudio de animación varían según el proyecto y su complejidad. Para obtener un presupuesto, es necesario enviar una solicitud de cotización.'
      },
      {
        question: '¿Cómo puedo solicitar un presupuesto para mi proyecto de animación?',
        answer: 'Para solicitar un presupuesto para tu proyecto de animación, puedes enviar un correo electrónico o completar el formulario de contacto en nuestro sitio web.'
      },
      {
        question: '¿Qué tipo de archivos necesito proporcionar para mi proyecto de animación?',
        answer: 'Es necesario proporcionar los archivos de origen de los personajes, fondos y objetos que se utilizarán en la animación. También es importante proporcionar un guión detallado y cualquier otra información relevante.'
      },
      {
        question: '¿Pueden hacer animaciones en diferentes idiomas?',
        answer: 'Sí, el estudio de animación puede hacer animaciones en diferentes idiomas. Se requiere una traducción precisa del guión y la locución.'
      },
      {
        question: '¿Cuál es la experiencia y habilidades del equipo de trabajo del estudio?',
        answer: 'El equipo de trabajo del estudio de animación cuenta con años de experiencia en la industria y habilidades en diseño gráfico, animación, postproducción y dirección de arte.'
      },
      {
        question: '¿Cómo se asegura el estudio de animación de cumplir con los plazos de entrega?',
        answer: 'El estudio de animación establece un plan de trabajo detallado y asigna un equipo dedicado a cada proyecto para garantizar que se cumplan los plazos de entrega.'
      },
      {
        question: '¿Cuál es el proceso de revisión y corrección de animaciones?',
        answer: 'El proceso de revisión y corrección de animaciones implica enviar una versión de la animación al cliente para su revisión. El cliente puede hacer comentarios y solicitar cambios. El equipo de animación realiza los cambios necesarios y envía una nueva versión para su revisión. Este proceso se repite hasta que el cliente esté satisfecho con la animación final.'
      },
    ];

  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
