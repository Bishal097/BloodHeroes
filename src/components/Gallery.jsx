import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import images manually (as shown in previous solutions)
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
import g17 from '../assets/images/g17.jpg';
import g18 from '../assets/images/g18.jpg';
import g19 from '../assets/images/g19.jpg';
import g20 from '../assets/images/g20.jpg';
import g21 from '../assets/images/g21.jpg';
import g22 from '../assets/images/g22.jpg';
import g23 from '../assets/images/g23.jpg';
import g24 from '../assets/images/g24.jpg';
import g25 from '../assets/images/g25.jpg';
import g26 from '../assets/images/g26.jpg';
import g27 from '../assets/images/g27.jpg';
import g28 from '../assets/images/g28.jpg';
import g29 from '../assets/images/g29.jpg';
import g30 from '../assets/images/g30.jpg';
import g33 from '../assets/images/g33.jpg';
import g34 from '../assets/images/g34.jpg';
import g35 from '../assets/images/g35.jpg';
import g36 from '../assets/images/g36.jpg';
import g37 from '../assets/images/g37.jpg';
import g38 from '../assets/images/g38.jpg';
import g39 from '../assets/images/g39.jpg';
import g40 from '../assets/images/g40.jpg';

// Array of image data
const itemData = [
  { img: g1, title: 'g1' },
  { img: g2, title: 'g2' },
  { img: g3, title: 'g3' },
  { img: g4, title: 'g4' },
  { img: g5, title: 'g5' },
  { img: g6, title: 'g6' },
  { img: g7, title: 'g7' },
  { img: g8, title: 'g8' },
  { img: g9, title: 'g9' },
  { img: g10, title: 'g10' },
  { img: g11, title: 'g11' },
  { img: g12, title: 'g12' },
  { img: g13, title: 'g13' },
  { img: g14, title: 'g14' },
  { img: g17, title: 'g17' },
  { img: g18, title: 'g18' },
  { img: g19, title: 'g19' },
  { img: g20, title: 'g20' },
  { img: g21, title: 'g21' },
  { img: g22, title: 'g22' },
  { img: g23, title: 'g23' },
  { img: g24, title: 'g24' },
  { img: g25, title: 'g25' },
  { img: g26, title: 'g26' },
  { img: g27, title: 'g27' },
  { img: g28, title: 'g28' },
  { img: g29, title: 'g29' },
  { img: g30, title: 'g30' },
  { img: g33, title: 'g33' },
  { img: g34, title: 'g34' },
  { img: g35, title: 'g35' },
  { img: g36, title: 'g36' },
  { img: g37, title: 'g37' },
  { img: g38, title: 'g38' },
  { img: g39, title: 'g39' },
  { img: g40, title: 'g40' },
];

 function Gallery() {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            className="image"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Gallery;
