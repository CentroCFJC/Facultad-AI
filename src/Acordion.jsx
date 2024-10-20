import React, { useState } from 'react';
import './Acordion.css'; // Estilos separados en CSS

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // Un arreglo para rastrear qué acordeones están abiertos

  // Arreglo con los datos de cada acordeón (texto e información)
  const accordionData = [
    { content: 'Información detallada sobre la facultad de ingeniería.', bgColor: '#f0f8ff', imagen:'/1.png' },
    { content: 'Información sobre el programa de inteligencia artificial.', bgColor: '#e6e6fa', imagen: '/2.png' },
    { content: 'Información acerca de las oportunidades de investigación.', bgColor: '#ffe4e1', imagen:'/3.png' },
    { content: 'Información de contacto y ubicación.', bgColor: '#fafad2', imagen:'/4.png' },
    { content: 'Información de contacto y ubicación.', bgColor: '#fafad2', imagen:'/5.png' },
  ];

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Cerrar si está abierto
        : [...prevIndexes, index] // Abrir si está cerrado
    );
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => handleToggle(index)}
          >
            <span>INFO FACULTAD {index + 1}</span>
            <svg
              className={`accordion-icon ${openIndexes.includes(index) ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div
            className={`accordion-content ${openIndexes.includes(index) ? 'open' : 'hidden'}`}
          >
            <img src={item.imagen} className='accordion-image'></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

