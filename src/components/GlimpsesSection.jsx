// GlimpsesSection.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GlimpsesSection = () => {
  const glimpsesData = [
    {
      image: '/image1.jpg',
      title: 'Platelts',
      description: 'Checkout PLatelets.',
      animation: 'fadeInUp 1s',
    },
    {
      image: '/image2.jpg',
      title: 'Blood',
      description: 'Checkout Bloods',
      animation: 'fadeInLeft 1s',
    },
    {
      image: '/image3.jpg',
      title: 'Plasma',
      description: 'Checkout Plasma',
      animation: 'fadeInRight 1s',
    },
    {
      image: '/image4.jpg',
      title: 'Red Blood Cells',
      description: 'Checkout Red Blood Cell',
      animation: 'zoomIn 1s',
    },
    {
      image: '/image5.jpg',
      title: 'White Blood Cells',
      description: 'Checkout White Blood Cell',
      animation: 'bounceIn 1s',
    },
  ];

  return (
    <div className="glimpses-section" style={{ marginTop: '30px', backgroundColor: '#EAEAE9', textAlign: 'center' }}>
      <h2 style={{ animation: 'fadeIn 2s' }}>Knowledge Base</h2>
      <div
        className="glimpses-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
        }}
      >
        {glimpsesData.map((card, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 345 }}
            style={{ animation: card.animation, width: '300px' }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component="a" href={`https://www.hematology.org/education/patients/blood-basics`} target="_blank" rel="noopener noreferrer">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GlimpsesSection;