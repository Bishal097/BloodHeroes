import React from 'react';
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
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>Donate blood, save lives. Together, we can make a difference—one drop at a time. Join the cause and be a hero for those in need ❤️.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Looking For Blood</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='#!' className='text-white'>
                    Blood availability
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    Blood Bank Directory
                  </Link>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Want To Donate Blood</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='#!' className='text-white'>
                   Blood Donation Camps
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    Donor Login
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    About Blood Donation
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    Register VBD Camp
                  </Link>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Blood Doantion Login</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='#!' className='text-white'>
                   BloodHeroes Login
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    Add Your Blood Bank
                  </Link>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='#!' className='text-white'>
                    Notifiactions
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    BloodHeroes FAQ
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    Notifiaction
                  </Link>
                </li>
                <li>
                  <Link to='#!' className='text-white'>
                    Gallery
                  </Link>
                </li>
              
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <Link className='text-white' to='https://mdbootstrap.com/'>
        BloodHeroes.org
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
