
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function HospitalVer() {
  const [hospitalData, setHospitalData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch hospital data on component mount
    const fetchData = async () => {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem('authToken'))?.token;

      if (!token) {
        console.error('Token not found!');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('API Response:', response.data);
        setHospitalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRemove = (id) => {
    setHospitalData((prevData) => {
      console.log('Before Remove Update:', prevData); // Debugging
      return prevData.filter((item) => item.id !== id); // Remove the hospital by ID
    });
    alert('Hospital removed successfully!');
  };
  
  const handleAccept = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('authToken'))?.token;
      console.log('Accept Token:', token); // Debugging
      
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/accept/${id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Accept Response:', response.data); // Debugging
      setHospitalData((prevData) => {
        console.log('Before Accept Update:', prevData); // Debugging
        return prevData.filter((item) => item.id !== id); // Remove accepted hospital from the list
      });
  
      alert('Hospital accepted successfully!');
    } catch (error) {
      console.error('Error accepting hospital:', error.response?.data || error.message); // Enhanced error logging
      alert('Failed to accept hospital!');
    }
  };

  return (
    <div>
    <div style={{marginBottom: '95px' }}></div>
      <h1>Hospital Verification List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Bed Capacity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hospitalData.length > 0 ? (
                hospitalData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.district}</TableCell>
                    <TableCell>{item.bedCapacity}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAccept(item.id)}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleRemove(item.id)}
                        sx={{ marginLeft: 2 }}
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>No hospitals available for verification</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default HospitalVer;
