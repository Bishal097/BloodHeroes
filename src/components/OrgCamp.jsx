/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
const OrgCamp = () => {
  const [formData, setFormData] = useState({
    hospitalEmail: '',
    campName: '',
    description: '',
    date: '',
    address: '',
    pinCode: '',
    district: '',
    state: '',
  });
  const [message, setMessage] = useState('');
const navigate =useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (Object.values(formData).some((field) => !field.trim())) {
      setMessage('All fields are required.');
      return;
    }

    try {
      const authToken = JSON.parse(localStorage.getItem('authToken'))?.token;
      if (!authToken) throw new Error('Authentication token missing.');
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_URL}/hospital/camp/organize`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage('Camp organized successfully!');
        navigate('/hospital-dashboard')
      } else {
        setMessage('Failed to organize the camp. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '300px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Organize Blood Camp</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type={key === 'date' ? 'datetime-local' : 'text'}
              name={key}
              placeholder={key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())}
              value={formData[key]}
              onChange={handleChange}
              style={inputStyle}
            />
          ))}
          <button type="submit" style={buttonStyle}>
            Organize Camp
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', marginTop: '15px', color: '#333' }}>{message}</p>}
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default OrgCamp;
 