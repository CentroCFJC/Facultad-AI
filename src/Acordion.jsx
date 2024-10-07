import React, { useState } from 'react';
import './Acordion.css'; // Estilos separados en CSS

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // Un arreglo para rastrear qué acordeones están abiertos

  // Arreglo con los datos de cada acordeón (texto e información)
  const accordionData = [
    { content: 'Información detallada sobre la facultad de ingeniería.', bgColor: '#f0f8ff' },
    { content: 'Información sobre el programa de inteligencia artificial.', bgColor: '#e6e6fa' },
    { content: 'Información acerca de las oportunidades de investigación.', bgColor: '#ffe4e1' },
    { content: 'Información de contacto y ubicación.', bgColor: '#fafad2' },
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
            style={{ backgroundColor: item.bgColor }} // Color de fondo dinámico
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

