import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    title: 'Beach Sunset',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mountain Lake',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    title: 'Desert Landscape',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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