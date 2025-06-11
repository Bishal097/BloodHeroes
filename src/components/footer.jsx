// import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://facebook.com' role='button' target="_blank">
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com' role='button' target="_blank">
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://google.com' role='button' target="_blank">
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com' role='button' target="_blank">
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://linkedin.com' role='button' target="_blank">
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com' role='button' target="_blank">
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

     

        <section className='mb-4'>
          <p>
            Donate blood, save lives. Together, we can make a difference—one drop at a time. Join the cause and be a hero for those in need ❤️.
          </p>
          <a
        href='https://docs.google.com/forms/d/e/1FAIpQLScQ-qLiXw7YzIJHrJPq5DLjDJ64D40D9iwyRLciZybyiqTV8g/viewform'
        className='text-warning fw-bold'
        target='_blank'
        rel='noopener noreferrer'
      >
        Feedback & Suggestions
      </a>
        </section>

   <section className='mb-4'>
    <p><strong>What We Have For You</strong>
    </p>
   </section>
        <section>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Looking For Blood</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                 
                    Blood Availability
                 
                </li>
                <li>
                  
                    Blood Bank Directory
                  
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Want To Donate Blood</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                 
                    Blood Donation Camps
                  
                </li>
                <li>
                  
                    Donor Login
                  
                </li>
                <li>
                  
                    About Blood Donation
                 
                </li>
                <li>
                  
                    Register VBD Camp
                  
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Blood Donation Login</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                 
                    BloodHeroes Login
                    </li>
                  
                <li>
                  
                    Add Your Blood Bank
                
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                 
                    Notifications
                  
                </li>
                <li>
                  
                    BloodHeroes FAQ
                  
                </li>
                <li>
                  
                    Gallery
                  
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <Link className='text-white' to='/'>
          &nbsp;BloodHeroes.org
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
