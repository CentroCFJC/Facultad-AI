import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  {
    id: 1,
    url: '/Diapositiva1.JPG',
    title: 'Beach Sunset',
  },
  {
    id: 2,
    url: '/Diapositiva2.JPG',
    title: 'Mountain Lake',
  },
  {
    id: 3,
    url: '/Diapositiva3.JPG',
    title: 'Desert Landscape',
  },
  {
    id: 4,
    url: '/Diapositiva4.JPG',
    title: 'Forest Path',
  },
  {
    id: 5,
    url: '/Diapositiva5.JPG',
    title: 'Forest Path',
  },
  {
    id: 6,
    url: '/Diapositiva7.JPG',
    title: 'Forest Path',
  },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <div className="gallery-container">
        <div className="left-column">
          <div className="text-content">
            <h1>Así será la Nueva Facultad de Inteligencia Artificial e Ingenierías</h1>
            <p>
              Con la próxima remodelación, la Facultad de Inteligencia Artificial e Ingenierías de la Universidad de Caldas se convertirá en un espacio de vanguardia que integrará tecnología avanzada y diseño innovador para fomentar el aprendizaje y la investigación. La remodelación incluye la creación de laboratorios especializados, aulas interactivas y espacios de coworking que promuevan la colaboración entre estudiantes y profesores
            </p>
          </div>
          <div className="preview-images">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.title}
                className={`preview-image ${selectedImage.id === image.id ? 'selected' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="right-column">
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="large-image"
          />
          <div className="image-description">
            <h2>Sed ut perspiciatis unde omnis</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;