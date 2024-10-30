import React, { useState } from 'react';
import ImageCard from './ImageCard';
import './ImageCarousel.css'; // Importamos los estilos

const images = [
  {
    id: 1,
    src: '/origen.png',
    alt: '',
    title: 'Benjamín: Arquitectura Cognitiva para el Entrenamiento Cognitivo en Fluidez Verbal',
    lider: 'Luz Enith Guerrero Mendieta',
    info: 'Valorar la conciencia de sistemas cognitivos artificiales usando como referencia la plataforma Benjamín para el entrenamiento cognitivo en fluidez verbal',
    sub: 'Este innovador software, adaptado especialmente para niños y personas con deterioro cognitivo, permite mejorar la fluidez verbal mediante ejercicios interactivos. La plataforma Benjamín evalúa la capacidad de generar conciencia artificial en sistemas cognitivos, explorando nuevas fronteras en el entrenamiento cognitivo.'
  },
  {
    id: 2,
    src: '/spectro.png',
    alt: '',
    title: 'Videojuego de realidad virtual para el tratamiento de Cefalea Tensional',
    lider: 'Santiago Murillo Rendón',
    info: 'Apoyar el tratamiento de la cefalea tensional por medio de un videojuego serio de realidad virtual basado en un protocolo terapéutico cognitivo',
    sub: 'Una herramienta de realidad virtual creada para apoyar el tratamiento de la cefalea tensional a través de un videojuego terapéutico. Basado en un protocolo cognitivo, este videojuego permite a los usuarios entrenar sus funciones cognitivas y reducir el impacto del dolor de una forma innovadora y eficaz.',

  },
  {
    id: 3,
    src: '/generica.png',
    alt: '',
    title: 'Prototipo Robótico para Detección Emocional en Personas con Distimia',
    lider: 'Alejandro Salazar',
    info: 'Desarrollar un prototipo robótico inteligente capaz de detectar emociones en personas con Distimia mediante inteligencia artificial, realizar preguntas clave para evaluar su estado emocional, y generar alertas tempranas a familiares y cuidadores.',
    sub: 'Este prototipo robótico combina inteligencia artificial y una narrativa empática para identificar y evaluar el estado emocional de personas con distimia. A través de las preguntas clave, el sistema es capaz de generar alertas tempranas y ayudar a cuidadores y familiares a detectar episodios depresivos.'
  },
  {
    id: 4,
    src: '/pc.png',
    alt: '',
    title: 'Sistema de Transcripción para Interlocución Médico-Paciente en el Hospital Universitario de Caldas',
    lider: 'Reinel Tabares',
    info: ' Implementar un sistema de transcripción de la interlocución médico-paciente mediante procesos de inteligencia artificial para la automatización del proceso de historia clínica.',
    sub: 'Un sistema basado en IA para automatizar la transcripción de interacciones médico-paciente, agilizando la creación de historias clínicas y mejorando la precisión en el registro médico. Este proyecto se implementar en el Hospital Universitario de Caldas.',
  },
  
  {
    id: 5,
    src: '/mabe.png',
    alt: '',
    title: 'Prototipo de Visión Artificial para Detección de Defectos en Superficies Metálicas',
    lider: 'Felipe Buitrago Carmona',
    info: 'Desarrollo de un prototipo de sistema computacional que integra algoritmos de visión artificial y redes neuronales convolucionales para la detección de abolladuras en superficies metálicas durante el control de calidad en la fabricación de refrigeradores',
    sub: 'Este sistema computacional utiliza redes neuronales convolucionales y técnicas avanzadas de visión artificial para detectar defectos en metales durante el proceso de fabricación industrial de refrigeradores. Con esta tecnología, se optimiza el control de calidad, asegurando productos de alto estándar.',
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
