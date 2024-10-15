import React, { useState } from 'react';
import './ImageCard.css'; // Importa los estilos

function ImageCard({ src, alt, info }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="image-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`image-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="image-card-front">
          <img src={src} alt={alt} className="image" />
        </div>
        <div className="image-card-back">
          <p className="info-text">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
