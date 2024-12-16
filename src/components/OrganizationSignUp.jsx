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
     // background: 'linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))',
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG")', // Reference the image from the public folder
    backgroundSize: 'cover', // Ensures the image covers the entire background
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundPosition: 'center',
    },
    hCustom: {
      height: '100vh',
    },
    cardRegistration: {
      borderRadius: '15px',
    },
    bgIndigo: {
      backgroundColor: '#F7CAC9',
    },
    bgWhite: {
      backgroundColor: 'white',
    },
    textWhite: {
      color: 'white',
    },
    bgBlue: {
      backgroundColor: '#E0E5E5',
    }
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
                    Organization Registration 
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
                      <MDBInput wrapperClass="mb-4" label="Contact" size="lg" id="form4" type="phone" />
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="mb-4">
                      <MDBInput wrapperClass="mb-4" label="Hospital Name" size="lg" id="form3" type="text" />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="mb-4">
                      <MDBInput wrapperClass="mb-4" label="State" size="lg" id="form3" type="text" />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="mb-4">
                      <MDBInput wrapperClass="mb-4" label="District" size="lg" id="form3" type="text" />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="mb-4">
                      <MDBInput wrapperClass="mb-4" label="Date of Establishment" size="lg" id="form3" type="date" />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="mb-4">
                      <MDBInput wrapperClass="mb-4" label="Hospital Type" size="lg" id="form3" type="text" />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md="6" className="p-5" style={customStyles.bgIndigo}>
                  <h3 className="fw-normal mb-5" style={customStyles.textWhite}>
                    Other Details
                  </h3>
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Accerdation" size="lg" id="form5" type="text" />
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="ICU Available " size="lg" id="form6" type="text" />
                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Bed Capacity" size="lg" id="form6" type="numBER" />
                    </MDBCol>
                    <MDBCol md="7">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Ambulance" size="lg" id="form7" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Pharmacy" size="lg" id="form8" type="text" />
                  <MDBRow>
                    <MDBCol md="5">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Number of OT" size="lg" id="form9" type="number" />
                    </MDBCol>
                    <MDBCol md="7">
                      <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Blood Bank" size="lg" id="form10" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Emergency Service" size="lg" id="form8" type="email" />
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
