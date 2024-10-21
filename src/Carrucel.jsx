import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carrucel.css';


function Carrusel({ deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // opcional, por defecto es 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // opcional, por defecto es 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // opcional, por defecto es 1
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // renderiza en server-side
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 0.5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="card">
        <img
          className="card-image"
          src={fotocarrucel}
        />
        <div className="card-content">
          <h2 className="card-title">Lorem ipsum dolor</h2>
          <p className="card-text">
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      
      <div className="card">
        <img
          className="card-image"
          src={fotocarrucel}
          alt="Descriptive alt text"
        />
        <div className="card-content">
          <h2 className="card-title">Lorem ipsum dolor</h2>
          <p className="card-text">
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="card-image"
          src={fotocarrucel}
          alt="Descriptive alt text"
        />
        <div className="card-content">
          <h2 className="card-title">Lorem ipsum dolor</h2>
          <p className="card-text">
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="card-image"
          src={fotocarrucel}
          alt="Descriptive alt text"
        />
        <div className="card-content">
          <h2 className="card-title">Lorem ipsum dolor</h2>
          <p className="card-text">
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>

      <div className="card">
        <img
          className="card-image"
          src={fotocarrucel}
          alt="Descriptive alt text"
        />
        <div className="card-content">
          <h2 className="card-title">Lorem ipsum dolor</h2>
          <p className="card-text">
          blslsldjzdljadjdjadladl;
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default Carrusel;


