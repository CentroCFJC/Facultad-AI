import React, { useState } from 'react';
import ImageCard from './ImageCard';
import './ImageCarousel.css'; // Importamos los estilos

const images = [
  {
    id: 1,
    src: 'origen',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',
  },
  {
    id: 2,
    src: 'src/assets/spectro.png',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',

  },
  {
    id: 3,
    src: 'src/assets/origen.png',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',
  },
  {
    id: 4,
    src: 'src/assets/mabe.png',
    alt: '',
    title: 'SpectroCVT-Net',
    lider: 'Lider Investigador : xxxxxxxxxxx',
    info: 'Una arquitectura de transformador de visión convolucional y atención de canal para clasificar la enfermedad de Alzheimer mediante espectrogramas',
    sub: 'Desarrollar y evaluar SpectroCVT-Net, una arquitectura de transformador de visión convolucional, para la clasificación precisa de espectrogramas de EEG con el fin de diagnosticar de manera temprana el Alzheimer y otras demencias.',
  },
  {
    id: 5,
    src: 'src/assets/genérica.png',
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
