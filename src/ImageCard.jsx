import React, { useState } from 'react';
import './ImageCard.css'; // Importa los estilos
import origen from './assets/origen.png';

function ImageCard({ src, alt, title, lider, info, sub }) {
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
          <h1 className="info-text">{title}</h1>
          <h2 className="info-text">{lider}</h2>
          <p className="info-text">{info}</p>
          <p className="info-text-sub">{sub}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
