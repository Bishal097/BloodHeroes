import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function DonorDash() {
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCamps = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/public/blood-camp/search`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Blood Camps:', response);
        setCamps(response.data); // Assuming the response contains an array of camps
      } catch (error) {
        console.error('Error fetching blood camps:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCamps();
  }, []);

  const handleRegisterBloodCamp = async (campId) => {
    const authToken = JSON.parse(localStorage.getItem('authToken'));

    if (!authToken || !authToken.email || !authToken.token) {
      alert('Authentication details are missing. Please log in again.');
      return;
    }

    const data = {
      email: authToken.email,
      campId: campId, // Send the campId with the request
    };

    try {
      const token = authToken.token;

      console.log('Register Data:', data); // Debugging
      console.log('Register Token:', token); // Debugging
      // const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/donour/secured/blood-camp/register`,
        data, // Include the campId and email in the body
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Register Response:', response.data);
      alert('Successfully registered for the blood camp!');

      setCamps((prevCamps) => {
  console.log('Before Register Update:', prevCamps); // Debugging
  return prevCamps.filter((camp) => camp.id !== campId);
});

    } catch (error) {
      console.error('Error registering for the blood camp:', error.response?.data || error.message);
      if (error.response?.status === 409) {

        alert('You have already registered for this blood camp!');
      }
      else
      {
        alert('Failed to register for the blood camp!');
      }
      
    }
  };

  return (
    <div>
      <h1>Available Blood Camps</h1>
      {loading ? (
        <p>Loading camps...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Camp ID</TableCell>
                <TableCell>Camp Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {camps.length > 0 ? (
                camps.map((camp) => (
                  <TableRow key={camp.id}>
                    <TableCell>{camp.id}</TableCell>
                    <TableCell>{camp.campName}</TableCell>
                    <TableCell>{camp.description}</TableCell>
                    <TableCell>{new Date(camp.date).toLocaleString()}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleRegisterBloodCamp(camp.id)} // Pass campId to the handler
                      >
                        Register
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>No camps available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default DonorDash;
