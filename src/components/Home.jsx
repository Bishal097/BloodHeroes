/* eslint-disable react/jsx-no-comment-textnodes */
/*import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';// Ensure this is included

// ExampleCarouselImage component to display images in carousel
const ExampleCarouselImage = ({ imgSrc, text }) => (
  <img
    className="d-block w-100"
    src={imgSrc}
    alt={text}
    style={{ height: '500px', objectFit: 'cover' }} // Adjust the height of the images
  />
);

// Home component with donation and blood type details
const Home = () => {
  return (
    <div>
      {/* Carousel *
      <Carousel slide={false} style={{ width: '100%', margin: 'auto' }}>
        <Carousel.Item>
          <ExampleCarouselImage imgSrc="/image 6.png" text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgSrc="/image 7.png" text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgSrc="/image 8.png" text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Donation Information Section *
      <div className="row" style={{ paddingTop: '4px' }}>
        <div className="row text-center">
          <div className="col-md-12 typeHeading">
            <h1 className="learnAbout">Learn About Donation</h1>
          </div>
          <br /><br />

          {/* Donation Image and Description *
          <div className="wow col-sm-6 rotateInDownRight text-center animated" 
               style={{ visibility: 'visible', animationDuration: '1000ms', animationName: 'rotateInDownRight' }}>
            <picture>
 
              <img src="/image9.jpg" alt="One Donation Can save upto three lives" height="400"/>
            </picture>
            <blockquote>
              <p style={{ fontFamily: 'oswald' }}>
                After donating blood, the body works to replenish the blood loss. This
                stimulates the production of new blood cells and in turn, helps in maintaining good health.
              </p>
            </blockquote>

            <button 
              onClick={() => window.location = '/BLDAHIMS/bloodbank/nearbyBBRed.cnt'} 
              className="btn btn-danger svcNearBy hvr-sweep-to-right">
              <i className="fa fa-tint"></i>&nbsp; Donate Now
            </button>
            <br /><br />
          </div>


      
          <div className="col-sm-6" align="center" style={{ fontSize: '1.5rem',  }}>
            <table className="table table-responsive">
              <tbody>
                <tr>
                  <th colspan="3" style={{ color: 'white', backgroundColor: '#1976D2' }}>
                    Compatible Blood Type Donors
                  </th>
                </tr>
                <tr>
                  <td><b>Blood Type</b></td>
                  <td><b>Donate Blood To</b></td>
                  <td><b>Receive Blood From</b></td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>A+</b></span></td>
                  <td>A+ AB+</td>
                  <td>A+ A- O+ O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>O+</b></span></td>
                  <td>O+ A+ B+ AB+</td>
                  <td>O+ O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>B+</b></span></td>
                  <td>B+ AB+</td>
                  <td>B+ B- O+ O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>AB+</b></span></td>
                  <td>AB+</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>A-</b></span></td>
                  <td>A+ A- AB+ AB-</td>
                  <td>A- O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>O-</b></span></td>
                  <td>Everyone</td>
                  <td>O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>B-</b></span></td>
                  <td>B+ B- AB+ AB-</td>
                  <td>B- O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: '#961e1b' }}><b>AB-</b></span></td>
                  <td>AB+ AB-</td>
                  <td>AB- A- B- O-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="glimpses-section" style={{ marginTop: '30px',backgroundColor: '#EAEAE9', textAlign: 'center' }}>
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
    {[
      {
        image: '/image1.jpg',
        title: 'Lizard 1',
        description: 'Lizards are a widespread group of squamate reptiles.',
        animation: 'fadeInUp 1s',
      },
      {
        image: '/image2.jpg',
        title: 'Lizard 2',
        description: 'They range across all continents except Antarctica.',
        animation: 'fadeInLeft 1s',
      },
      {
        image: '/image3.jpg',
        title: 'Lizard 3',
        description: 'There are over 6,000 species of lizards ok for now enjoy.',
        animation: 'fadeInRight 1s',
      },
      {
        image: '/image4.jpg',
        title: 'Lizard 4',
        description: 'Lizards have adapted to diverse environments.',
        animation: 'zoomIn 1s',
      },
      {
        image: '/image5.jpg',
        title: 'Lizard 5',
        description: 'Lizards are ectothermic, relying on the environment.',
        animation: 'bounceIn 1s',
      },
    ].map((card, index) => (
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
          
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    ))}
  </div>
</div>


    </div>
   
   
<InfiniteMovingCards
      items={items}
      direction="left"
      speed="normal"
      pauseOnHover={true}
      className="custom-class"
    />
  
  );
};

export default Home;
*/
import DonationInfoSection from './DonationInfoSection';
import CarouselSection from './CarouselSection';
import  FeaturesSectionDemo  from './FeaturesSectionDemo';
import GlimpsesSection from './GlimpsesSection';
import InfiniteMovingCards from './infinite';
//import FloatingDock from './FloatingDock';
import Table from './Table';
import Footer from './footer'
const items = [
  
  {
    quote: "Provides users with a centralized platform to learn about blood donation, its importance, and the process involved.",
    name: "John Doe",
    title: "Founder, Blood Bank"
  },
  {
    quote: "Allows users to easily schedule appointments for blood donation at local blood banks or donation camps.",
    name: "Jane Smith",
    title: "Operations Manager, Blood Donor Association"
  },
  {
    quote: "Displays real-time data on the availability of blood in different blood groups at nearby hospitals and blood banks.",
    name: "Sarah Johnson",
    title: "Blood Bank Coordinator"
  },
  {
    quote: "Helps users find nearby donation centers or blood donation drives based on their location using integrated maps.",
    name: "David Lee",
    title: "Technology Specialist, Blood Donation Platform"
  },
  {
    quote: "Matches potential blood donors with hospitals or patients who need specific blood types in an emergency.",
    name: "Emily Davis",
    title: "Patient Care Director, Hospital"
  },
];
const Home = () => {
  return (
    <div>
      
      <CarouselSection />
      <div style={{ marginBottom: "20px" }}></div> 
      <DonationInfoSection />
      <GlimpsesSection/>
      
      <div style={{ marginBottom: "20px" }}></div> 
       <Table/>
      <Footer/>
    </div>
  );
};

export default Home;
