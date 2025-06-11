import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@mui/material';

const RegCamp = () => {
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const authData = JSON.parse(localStorage.getItem('authToken'));
        const token = authData?.token;
        const hospitalEmail = localStorage.getItem('hospitalEmail') || authData?.email;

        if (!hospitalEmail || !token) {
          setError('Missing hospital email or authentication token. Please log in again.');
          setLoading(false);
          return;
        }

        const apiUrl = `${import.meta.env.VITE_API_URL}/hospital/organized/camps?email=${hospitalEmail}`;
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Fetched camps:', response.data); // Debug: View structure

        setCamps(response.data || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(
          err.response?.data?.message ||
          err.message ||
          'Failed to fetch camp data.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCamps();
  }, []);

  return (
    <Box sx={{ mt: 4, px: 4 }}>
      <Typography variant="h4" gutterBottom>
        Organized Camps
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      ) : camps.length === 0 ? (
        <Typography sx={{ mt: 2 }}>No camps found.</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>S.No</strong></TableCell>
                <TableCell><strong>Camp Name</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Location</strong></TableCell>
                <TableCell><strong>Contact</strong></TableCell>
                <TableCell><strong>District</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {camps.map((camp, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{camp.campName || camp.name || 'N/A'}</TableCell>
                  <TableCell>{camp.date ? new Date(camp.date).toLocaleString() : 'N/A'}</TableCell>
                  <TableCell>{camp.location || camp.address || camp.campDetails?.location || 'N/A'}</TableCell>
                  <TableCell>{camp.pinCode || camp.phone || camp.organizerContact || 'N/A'}</TableCell>
                  <TableCell>{camp.district || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default RegCamp;
