import React, { useState } from 'react';
import ImageCard from './ImageCard';
import './ImageCarousel.css'; // Importamos los estilos

const images = [
  {
    id: 1,
    src: '/origen.png',
    alt: '',
    title: 'Origen Capítulo Caldas',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Construcción de un modelo de medicina de precisión con base en el uso y aprovechamiento de la información ómica, datos clínicos y paraclínicos mediante el uso de tecnologías 4.0 en el departamento de Caldas.',
    sub: 'Este proyecto busca desarrollar una plataforma para la implementación de aproximaciones genómicas en el sistema de salud de Caldas.'
  },
  {
    id: 2,
    src: '/spectro.png',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',

  },
  {
    id: 3,
    src: '/mabe.png',
    alt: '',
    title: 'Mabe',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Desarrollo de sistemas basados en visión artificial y deep learning para la detección de defectos sobre superficies metálicas de electrodomésticos y análisis termográficos en procesos de calidad.',
  },
  {
    id: 4,
    src: '/origen.png',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',
  },
  
  {
    id: 5,
    src: '/generica.png',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',
  },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {[0, 1, 2].map((offset) => {
          const index = (currentIndex + offset) % images.length;
          return <ImageCard key={images[index].id} {...images[index]} />;
        })}
      </div>
      <button className="carousel-button prev-button" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="carousel-button next-button" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
}

export default ImageCarousel;
