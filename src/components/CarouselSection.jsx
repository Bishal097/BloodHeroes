// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ExampleCarouselImage = ({ imgSrc, text }) => (
//   <img
//     className="d-block w-100"
//     src={imgSrc}
//     alt={text}
//     style={{ height: '100%', maxHeight: '100vh', objectFit: 'contain' }}
//   />
// );

// const CarouselSection = () => (
//   <Carousel slide={false} style={{ width: '100%', margin: 'auto' }}>
//     <Carousel.Item>
//       <ExampleCarouselImage imgSrc="/image6.jpg" text="First slide" />
//       <Carousel.Caption>
//         <h3>First slide label</h3>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <ExampleCarouselImage imgSrc="/image7.jpg" text="Second slide" />
//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <ExampleCarouselImage imgSrc="/image8.png" text="Third slide" />
//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// );

// export default CarouselSection;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from src/assets/images/
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.png';

const ExampleCarouselImage = ({ imgSrc, text }) => (
  <img
    className="d-block w-100"
    src={imgSrc}
    alt={text}
    style={{ height: '100%', maxHeight: '100vh', objectFit: 'contain' }}
  />
);

const CarouselSection = () => (
  <Carousel slide={false} style={{ width: '100%', margin: 'auto' }}>
    <Carousel.Item>
      <ExampleCarouselImage imgSrc={image6} text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage imgSrc={image7} text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ExampleCarouselImage imgSrc={image8} text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselSection;
