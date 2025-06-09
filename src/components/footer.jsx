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
        </section>

        <section>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Looking For Blood</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/blood-availability' className='text-white'>
                    Blood Availability
                  </Link>
                </li>
                <li>
                  <Link to='/blood-bank-directory' className='text-white'>
                    Blood Bank Directory
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Want To Donate Blood</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/donation-camps' className='text-white'>
                    Blood Donation Camps
                  </Link>
                </li>
                <li>
                  <Link to='/donor-login' className='text-white'>
                    Donor Login
                  </Link>
                </li>
                <li>
                  <Link to='/about-donation' className='text-white'>
                    About Blood Donation
                  </Link>
                </li>
                <li>
                  <Link to='/register-camp' className='text-white'>
                    Register VBD Camp
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Blood Donation Login</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/admin-login' className='text-white'>
                    BloodHeroes Login
                  </Link>
                </li>
                <li>
                  <Link to='/add-blood-bank' className='text-white'>
                    Add Your Blood Bank
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/notifications' className='text-white'>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to='/faq' className='text-white'>
                    BloodHeroes FAQ
                  </Link>
                </li>
                <li>
                  <Link to='/gallery' className='text-white'>
                    Gallery
                  </Link>
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
