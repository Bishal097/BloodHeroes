import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

function SignUp() {
  const customStyles = {
    body: {
      background: 'linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))',
    },
    hCustom: {
      height: '100vh',
    },
    cardRegistration: {
      borderRadius: '15px',
    },
    bgIndigo: {
      backgroundColor: '#4835d4',
    },
    bgWhite: {
      backgroundColor: 'white',
    },
    textWhite: {
      color: 'white',
    },
  };

  return (
    <MDBContainer fluid style={customStyles.body} className="h-custom">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12" className="m-5">
          <MDBCard style={customStyles.cardRegistration}>
            <MDBCardBody className="p-0">
              <MDBRow>
                <MDBCol md="6" className="p-5" style={customStyles.bgWhite}>
                  <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>
                    General Information
                  </h3>
                  <div className="mb-4">
                    <label className="form-label">Name</label>
                    <MDBInput wrapperClass="mb-4" label=" Name" size="lg" id="form1" type="text" />
                  </div>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput wrapperClass="mb-4" label="Email" size="lg" id="form1" type="text" />
                    </MDBCol>
                    <MDBCol md="6">
                    <MDBInput wrapperClass="mb-4" label="Password" size="lg" id="form2" type="password" />

                    </MDBCol>
                  </MDBRow>
                  <div className="mb-4">
                    <label className="form-label">Address</label>
                    <MDBInput wrapperClass="mb-4" label="Address Line 1" size="lg" id="form3" type="text" />
                  </div>
                  <MDBInput wrapperClass="mb-4" label="Address Line 2" size="lg" id="form3" type="text" />
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput wrapperClass="mb-4" label="Contact" size="lg" id="form4" type="text" />
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="mb-4">
                        <label className="form-label">Employees</label>
                        <select className="form-select" size="lg">
                          <option value="1">Employees</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md="6" className="p-5" style={customStyles.bgIndigo}>
                  <h3 className="fw-normal mb-5" style={customStyles.textWhite}>
                    Contact Details
                  </h3>
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Street + Nr" size="lg" id="form5" type="text" />
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Additional Information" size="lg" id="form6" type="text" />
                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Zip Code" size="lg" id="form6" type="text" />
                    </MDBCol>
                    <MDBCol md="7">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Place" size="lg" id="form7" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Country" size="lg" id="form8" type="text" />
                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Code +" size="lg" id="form9" type="text" />
                    </MDBCol>
                    <MDBCol md="7">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Phone Number" size="lg" id="form10" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Your Email" size="lg" id="form8" type="email" />
                  <MDBCheckbox name="flexCheck" id="flexCheckDefault" labelClass="text-white mb-4" label="I do accept the Terms and Conditions of your site." />
                  <MDBBtn color="light" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
