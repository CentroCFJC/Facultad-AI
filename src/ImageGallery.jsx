import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  {
    id: 1,
    url: '/public/Diapositiva1.JPG',
    title: 'Beach Sunset',
  },
  {
    id: 2,
    url: '/public/Diapositiva2.JPG',
    title: 'Mountain Lake',
  },
  {
    id: 3,
    url: '/public/Diapositiva3.JPG',
    title: 'Desert Landscape',
  },
  {
    id: 4,
    url: '/public/Diapositiva4.JPG',
    title: 'Forest Path',
  },
  {
    id: 5,
    url: '/public/Diapositiva5.JPG',
    title: 'Forest Path',
  },
  {
    id: 6,
    url: '/public/Diapositiva7.JPG',
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
            <h1>IMAGENES MODELO FAC</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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