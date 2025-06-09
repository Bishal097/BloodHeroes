import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

import g1 from '../assets/images/g1.jpg';
import g2 from '../assets/images/g2.jpg';
import g3 from '../assets/images/g3.jpg';
import g4 from '../assets/images/g4.jpg';
import g5 from '../assets/images/g5.jpg';
import g6 from '../assets/images/g6.jpg';
import g7 from '../assets/images/g7.jpg';
import g8 from '../assets/images/g8.jpg';
import g9 from '../assets/images/g9.jpg';
import g10 from '../assets/images/g10.jpg';
import g11 from '../assets/images/g11.jpg';
import g12 from '../assets/images/g12.jpg';
import g13 from '../assets/images/g13.jpg';
import g14 from '../assets/images/g14.jpg';


const images = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14,
];

 function Gallery() {
  const columns = [[], [], []]; // 3 columns

  images.forEach((img, index) => {
    columns[index % 3].push(img);
  });

  return (
    <MDBContainer className='py-4'>
      <MDBRow>
        {columns.map((colImages, colIndex) => (
          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0' key={colIndex}>
            {colImages.map((src, i) => (
              
              <img
                key={i}
                src={src}
                className='w-100 shadow-1-strong rounded mb-4'
                alt={`gallery-img-${colIndex}-${i}`}
              />
            ))}
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
export default Gallery