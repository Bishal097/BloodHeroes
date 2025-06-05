/* eslint-disable no-unused-vars */
// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBRadio
// } from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer fluid className='bg-dark'>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol>

//           <MDBCard className='my-4'>

//             <MDBRow className='g-0'>

//               <MDBCol md='6' className="d-none d-md-block">
//                 <MDBCardImage src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-creative-vector-love-blood-donation-day-png-image_5351013.jpg' alt="Sample photo" className="rounded-start" fluid />
//               </MDBCol>

//               <MDBCol md='6'>

//                 <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
//                   <h3 className="mb-5 text-uppercase fw-bold">Donor registration form</h3>

//                   <MDBRow>

//                     <MDBCol md='6'>
//                       <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
//                     </MDBCol>

//                     <MDBCol md='6'>
//                       <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' />
//                     </MDBCol>

//                   </MDBRow>

//                   <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text' />

//                   <div className='d-md-flex justify-content-start align-items-center mb-4'>
//                     <h6 className="fw-bold mb-0 me-4">Gender: </h6>
//                     <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
//                     <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
//                     <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
//                   </div>

//                   <MDBRow>

//                     <MDBCol md='6'>
//                       <label htmlFor="state" className="form-label">District</label>
//                       <MDBInput wrapperClass='mb-4' label='District' size='lg' id='form5' type='phone' />
//                     </MDBCol>

//                     <MDBCol md='6'>
//                       <label htmlFor="city" className="form-label">Blood Group</label>
//                       <select className="form-select mb-4" id="Blood Group" size="lg">
//                         <option value={1}>A+ve</option>
//                         <option value={2}>B+ve</option>
//                         <option value={3}>O+ve</option>
//                         <option value={4}>Ab+ve</option>
//                         <option value={2}>O-ve</option>
//                         <option value={3}>B-ve</option>
//                         <option value={4}>Ab+ve</option>
//                       </select>
//                     </MDBCol>

//                   </MDBRow>

//                   <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text' />
//                   <MDBInput wrapperClass='mb-4' label='Contact' size='lg' id='form5' type='phone' />
//                   <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text' />
//                   <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
//                   <MDBInput wrapperClass='mb-4' label='State' size='lg' id='form3' type='text' />
//                   <MDBInput wrapperClass='mb-4' label='Address Line 1' size='lg' id='form3' type='text' />
//                   <MDBInput wrapperClass='mb-4' label='Address Line 2' size='lg' id='form3' type='text' />

//                   <div className="d-flex justify-content-end pt-3">
//                     <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
//                     <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
//                   </div>

//                 </MDBCardBody>

//               </MDBCol>
//             </MDBRow>

//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default App;
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
  MDBRadio
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Correct import
import DonorDash from './DonorDash';
import LoginPage from './LoginPage';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contacts: '',
    gender: '',
    pinCode: '',
    addressLine1: '',
    addressLine2: '',
    stateAndUTsID: '',
    district: '',
    bloodType: '',
    dob: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://bloodheroes.onrender.com/api/donour/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contacts: formData.contacts,
        gender: formData.gender,
        pinCode: formData.pinCode,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        stateAndUTsID: parseInt(formData.stateAndUTsID, 10),
        district: formData.district,
        bloodType: formData.bloodType.replace('+', '_POSITIVE').replace('-', '_NEGATIVE'),
        dob: `${formData.dob}T00:00:00`,
      });
      setMessage('Donor registered successfully!');
      navigate('/login'); // Corrected navigation method
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
      gender: '',
      pinCode: '',
      addressLine1: '',
      addressLine2: '',
      stateAndUTsID: '',
      district: '',
      bloodType: '',
      dob: '',
    });
    setMessage('');
  };

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
                  <div style={{ marginBottom: "30px" }}></div> 
                  <h3 className="mb-5 text-uppercase fw-bold">Donor Registration Form</h3>
                  <form onSubmit={handleSubmit}>
                    <MDBInput wrapperClass='mb-4' label='Full Name' size='lg' name='name' value={formData.name} onChange={handleChange} required />
                    <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' name='email' type='email' value={formData.email} onChange={handleChange} required />
                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' type='password' value={formData.password} onChange={handleChange} required />
                    <MDBInput wrapperClass='mb-4' label='Contact Number' size='lg' name='contacts' value={formData.contacts} onChange={handleChange} required />
                    <div className='d-md-flex justify-content-start align-items-center mb-4'>
                      <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio name='gender' id='genderFemale' value='Female' label='Female' inline onChange={handleChange} />
                      <MDBRadio name='gender' id='genderMale' value='Male' label='Male' inline onChange={handleChange} />
                      <MDBRadio name='gender' id='genderOther' value='Other' label='Other' inline onChange={handleChange} />
                    </div>
                    <MDBInput wrapperClass='mb-4' label='Date of Birth' size='lg' name='dob' type='date' value={formData.dob} onChange={handleChange} required />
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' name='pinCode' value={formData.pinCode} onChange={handleChange} required />
                      </MDBCol>
                      <MDBCol md='6'>
                        <label htmlFor="bloodType" className="form-label">Blood Group</label>
                        <select className="form-select mb-4" id="bloodType" name="bloodType" value={formData.bloodType} onChange={handleChange} required>
                          <option value="" disabled>Select</option>
                          <option value="A+">A+</option>
                          <option value="B+">B+</option>
                          <option value="O+">O+</option>
                          <option value="AB+">AB+</option>
                          <option value="O-">O-</option>
                          <option value="B-">B-</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </MDBCol>
                    </MDBRow>
                    <MDBInput wrapperClass='mb-4' label='State ID' size='lg' name='stateAndUTsID' type='number' value={formData.stateAndUTsID} onChange={handleChange} required />
                    <MDBInput wrapperClass='mb-4' label='District' size='lg' name='district' value={formData.district} onChange={handleChange} required />
                    <MDBInput wrapperClass='mb-4' label='Address Line 1' size='lg' name='addressLine1' value={formData.addressLine1} onChange={handleChange} required />
                    <MDBInput wrapperClass='mb-4' label='Address Line 2' size='lg' name='addressLine2' value={formData.addressLine2} onChange={handleChange} />
                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color='light' size='lg' onClick={handleReset}>Reset all</MDBBtn>
                      <MDBBtn type='submit' className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
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

export default App;
