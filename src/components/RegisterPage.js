// RegisterPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

function RegisterPage() {
  const navigate = useNavigate(); 

  const handleDonorClick = () => {
    navigate('/signup/donor'); 
  };

  const handleOrganizationClick = () => {
    navigate('/signup/organization');
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-center">
        <h3>Select your role</h3>
        <MDBBtn color="primary" size="lg" onClick={handleDonorClick}>
          Donor
        </MDBBtn>
        <br />
        <MDBBtn color="secondary" size="lg" onClick={handleOrganizationClick}>
          Organization
        </MDBBtn>
      </div>
    </div>
  );
}

export default RegisterPage;
