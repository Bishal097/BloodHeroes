import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-creative-vector-love-blood-donation-day-png-image_5351013.jpg' alt="Sample photo" className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Donor registration form</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text' />

                  <div className='d-md-flex justify-content-start align-items-center mb-4'>
                    <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </div>

                  <MDBRow>

                    <MDBCol md='6'>
                      <label htmlFor="state" className="form-label">District</label>
                      <MDBInput wrapperClass='mb-4' label='District' size='lg' id='form5' type='phone' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <label htmlFor="city" className="form-label">Blood Group</label>
                      <select className="form-select mb-4" id="Blood Group" size="lg">
                        <option value={1}>A+ve</option>
                        <option value={2}>B+ve</option>
                        <option value={3}>O+ve</option>
                        <option value={4}>Ab+ve</option>
                        <option value={2}>O-ve</option>
                        <option value={3}>B-ve</option>
                        <option value={4}>Ab+ve</option>
                      </select>
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Contact' size='lg' id='form5' type='phone' />
                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                  <MDBInput wrapperClass='mb-4' label='State' size='lg' id='form3' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Address Line 1' size='lg' id='form3' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Address Line 2' size='lg' id='form3' type='text' />

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;
