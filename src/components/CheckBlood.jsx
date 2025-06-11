import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableHead, TableRow, TableCell,
  TableBody, TableContainer, Paper, Typography
} from '@mui/material';

const CheckBlood = () => {
  const [bloodData, setBloodData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBloodData = async () => {
      try {
        const auth = JSON.parse(localStorage.getItem('authToken'));
        const token = auth?.token;
        const email = auth?.email;

        if (!token || !email) {
          setError('Login required to view blood status.');
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/hospital?email=${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Fetched blood data:', response.data);
        setBloodData(response.data || []);
      } catch (err) {
        console.error('Failed to fetch blood data:', err);
        setError('Unable to fetch blood status.');
      }
    };

    fetchBloodData();
  }, []);

  if (error) return <Typography color="error">{error}</Typography>;
  if (!bloodData.length) return <Typography>Loading blood data...</Typography>;

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Blood Inventory Status
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Blood Group</strong></TableCell>
            <TableCell><strong>Available Units</strong></TableCell>
            <TableCell><strong>Total Donations</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bloodData.map(({ bloodType, totalAmount, totalStock }) => (
            <TableRow key={bloodType}>
              <TableCell>
                {bloodType
                  .replace('POSITIVE', '+')
                  .replace('NEGATIVE', '-')
                  .replace('_', ' ')}
              </TableCell>
              <TableCell>{totalAmount}</TableCell>
              <TableCell>{totalStock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CheckBlood;
