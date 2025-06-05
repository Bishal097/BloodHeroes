/* eslint-disable no-unused-vars */
// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
// } from 'mdb-react-ui-kit';

// function SignUp() {
//   const customStyles = {
//     body: {
//      // background: 'linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))',
//     backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG")', // Reference the image from the public folder
//     backgroundSize: 'cover', // Ensures the image covers the entire background
//     backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//     backgroundPosition: 'center',
//     },
//     hCustom: {
//       height: '100vh',
//     },
//     cardRegistration: {
//       borderRadius: '15px',
//     },
//     bgIndigo: {
//       backgroundColor: '#F7CAC9',
//     },
//     bgWhite: {
//       backgroundColor: 'white',
//     },
//     textWhite: {
//       color: 'white',
//     },
//     bgBlue: {
//       backgroundColor: '#E0E5E5',
//     }
//   };
  
//   return (
//     <MDBContainer fluid style={customStyles.body} className="h-custom">
//       <MDBRow className="d-flex justify-content-center align-items-center h-100">
//         <MDBCol col="12" className="m-5">
//           <MDBCard style={customStyles.cardRegistration}>
//             <MDBCardBody className="p-0">
//               <MDBRow>
//                 <MDBCol md="6" className="p-5" style={customStyles.bgWhite}>
//                   <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>
//                     Organization Registration 
//                   </h3>
//                   <div className="mb-4">
//                     <label className="form-label">Name</label>
//                     <MDBInput wrapperClass="mb-4" label=" Name" size="lg" id="form1" type="text" />
//                   </div>
//                   <MDBRow>
//                     <MDBCol md="6">
//                       <MDBInput wrapperClass="mb-4" label="Email" size="lg" id="form1" type="text" />
//                     </MDBCol>
//                     <MDBCol md="6">
//                     <MDBInput wrapperClass="mb-4" label="Password" size="lg" id="form2" type="password" />

//                     </MDBCol>
//                   </MDBRow>
//                   <div className="mb-4">
//                     <label className="form-label">Address</label>
//                     <MDBInput wrapperClass="mb-4" label="Address Line 1" size="lg" id="form3" type="text" />
//                   </div>
//                   <MDBInput wrapperClass="mb-4" label="Address Line 2" size="lg" id="form3" type="text" />
//                   <MDBRow>
//                     <MDBCol md="6">
//                       <MDBInput wrapperClass="mb-4" label="Contact" size="lg" id="form4" type="phone" />
//                     </MDBCol>
//                     <MDBCol md="6">
//                       <div className="mb-4">
//                       <MDBInput wrapperClass="mb-4" label="Hospital Name" size="lg" id="form3" type="text" />
//                       </div>
//                     </MDBCol>
//                   </MDBRow>
//                   <MDBRow>
//                     <MDBCol md="6">
//                       <div className="mb-4">
//                       <MDBInput wrapperClass="mb-4" label="State" size="lg" id="form3" type="text" />
//                       </div>
//                     </MDBCol>
//                     <MDBCol md="6">
//                       <div className="mb-4">
//                       <MDBInput wrapperClass="mb-4" label="District" size="lg" id="form3" type="text" />
//                       </div>
//                     </MDBCol>
//                   </MDBRow>
//                   <MDBRow>
//                     <MDBCol md="6">
//                       <div className="mb-4">
//                       <MDBInput wrapperClass="mb-4" label="Date of Establishment" size="lg" id="form3" type="date" />
//                       </div>
//                     </MDBCol>
//                     <MDBCol md="6">
//                       <div className="mb-4">
//                       <MDBInput wrapperClass="mb-4" label="Hospital Type" size="lg" id="form3" type="text" />
//                       </div>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBCol>
//                 <MDBCol md="6" className="p-5" style={customStyles.bgIndigo}>
//                   <h3 className="fw-normal mb-5" style={customStyles.textWhite}>
//                     Other Details
//                   </h3>
//                   <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Accerdation" size="lg" id="form5" type="text" />
//                   <MDBInput wrapperClass="mb-4" labelClass="text-white" label="ICU Available " size="lg" id="form6" type="text" />
//                   <MDBRow>
//                     <MDBCol md="5">
//                       <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Bed Capacity" size="lg" id="form6" type="numBER" />
//                     </MDBCol>
//                     <MDBCol md="7">
//                       <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Ambulance" size="lg" id="form7" type="text" />
//                     </MDBCol>
//                   </MDBRow>
//                   <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Pharmacy" size="lg" id="form8" type="text" />
//                   <MDBRow>
//                     <MDBCol md="5">
//                       <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Number of OT" size="lg" id="form9" type="number" />
//                     </MDBCol>
//                     <MDBCol md="7">
//                       <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Blood Bank" size="lg" id="form10" type="text" />
//                     </MDBCol>
//                   </MDBRow>
//                   <MDBInput wrapperClass="mb-4" labelClass="text-white" label="Emergency Service" size="lg" id="form8" type="email" />
//                   <MDBCheckbox name="flexCheck" id="flexCheckDefault" labelClass="text-white mb-4" label="I do accept the Terms and Conditions of your site." />
//                   <MDBBtn color="light" size="lg">
//                     Register
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default SignUp;
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
function OrganizationRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contacts: '',
    registrationNumber: '',
    stateAndUTsID: '',
    district: '',
    hospitalType: '',
    dateOfEstablishment: '',
    accreditation: '',
    bedCapacity: '',
    emergencyServices: false,
    icuAvailable: false,
    ambulanceServices: false,
    laboratoryAvailable: false,
    pharmacyAvailable: false,
    bloodBankAvailable: false,
    numberOfOperatingTheaters: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmite = () => {
    // Navigate to /home when the button is clicked
    navigate('/home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_URL}/hospital/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contacts: formData.contacts,
        registrationNumber: formData.registrationNumber,
        stateAndUTsID: parseInt(formData.stateAndUTsID, 10),
        district: formData.district,
        hospitalType: formData.hospitalType,
        dateOfEstablishment: `${formData.dateOfEstablishment}T00:00:00`,
        accreditation: formData.accreditation,
        bedCapacity: parseInt(formData.bedCapacity, 10),
        emergencyServices: formData.emergencyServices,
        icuAvailable: formData.icuAvailable,
        ambulanceServices: formData.ambulanceServices,
        laboratoryAvailable: formData.laboratoryAvailable,
        pharmacyAvailable: formData.pharmacyAvailable,
        bloodBankAvailable: formData.bloodBankAvailable,
        numberOfOperatingTheaters: parseInt(formData.numberOfOperatingTheaters, 10),
      });
      setMessage('Organization registered successfully!');
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred during registration.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      contacts: '',
      registrationNumber: '',
      stateAndUTsID: '',
      district: '',
      hospitalType: '',
      dateOfEstablishment: '',
      accreditation: '',
      bedCapacity: '',
      emergencyServices: false,
      icuAvailable: false,
      ambulanceServices: false,
      laboratoryAvailable: false,
      pharmacyAvailable: false,
      bloodBankAvailable: false,
      numberOfOperatingTheaters: '',
    });
    setMessage('');
  };

  return (
    <MDBContainer fluid className="bg-dark">
    <MDBRow className="d-flex justify-content-center align-items-center h-100">
      <MDBCol>
        <MDBCard className="my-4">
          <MDBRow className="g-0">
            <MDBCol md="6" className="d-none d-md-block">
              <MDBCardImage
                src="https://smims.sreemookambikainstitute.com/wp-content/uploads/2022/08/blood-bank-1.jpg"
                alt="Blood Bank"
                className="rounded-start"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensures the image covers the space and is responsive
                fluid
              />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <div style={{ marginBottom: "30px" }}></div>
                  <h3 className="mb-5 text-uppercase fw-bold">Organization Registration Form</h3>
                  <form onSubmit={handleSubmit}>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Organization Name"
                      size="lg"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      size="lg"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      size="lg"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Contact Number"
                      size="lg"
                      name="contacts"
                      value={formData.contacts}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Registration Number"
                      size="lg"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="State ID"
                      size="lg"
                      name="stateAndUTsID"
                      type="number"
                      value={formData.stateAndUTsID}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="District"
                      size="lg"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Hospital Type"
                      size="lg"
                      name="hospitalType"
                      value={formData.hospitalType}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Date of Establishment"
                      size="lg"
                      name="dateOfEstablishment"
                      type="date"
                      value={formData.dateOfEstablishment}
                      onChange={handleChange}
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Accreditation"
                      size="lg"
                      name="accreditation"
                      value={formData.accreditation}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Bed Capacity"
                      size="lg"
                      name="bedCapacity"
                      type="number"
                      value={formData.bedCapacity}
                      onChange={handleChange}
                    />
                    <MDBCheckbox
                      name="emergencyServices"
                      label="Emergency Services"
                      checked={formData.emergencyServices}
                      onChange={handleChange}
                    />
                    <MDBCheckbox
                      name="icuAvailable"
                      label="ICU Available"
                      checked={formData.icuAvailable}
                      onChange={handleChange}
                    />
                    <MDBCheckbox
                      name="ambulanceServices"
                      label="Ambulance Services"
                      checked={formData.ambulanceServices}
                      onChange={handleChange}
                    />
                    <MDBCheckbox
                      name="laboratoryAvailable"
                      label="Laboratory Available"
                      checked={formData.laboratoryAvailable}
                      onChange={handleChange}
                    />
                    <MDBCheckbox
                      name="pharmacyAvailable"
                      label="Pharmacy Available"
                      checked={formData.pharmacyAvailable}
                      onChange={handleChange}
                    />
                    <MDBCheckbox
                      name="bloodBankAvailable"
                      label="Blood Bank Available"
                      checked={formData.bloodBankAvailable}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Number of Operating Theaters"
                      size="lg"
                      name="numberOfOperatingTheaters"
                      type="number"
                      value={formData.numberOfOperatingTheaters}
                      onChange={handleChange}
                    />
                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color="light" size="lg" onClick={handleReset}>
                        Reset all
                      </MDBBtn>
                      <MDBBtn type="submit" className="ms-2" color="warning" size="lg" onclick={handleSubmite}>
                        Submit form
                      </MDBBtn>
                    </div>
                  </form>
                  {message && <p className="mt-3">{message}</p>}
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OrganizationRegistration;
