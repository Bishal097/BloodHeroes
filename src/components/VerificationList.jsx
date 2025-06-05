// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// function VerificationList() {
//   const [verificationData, setVerificationData] = useState([]);
//   const [acceptingIds, setAcceptingIds] = useState([]);
//   const [rejectingIds, setRejectingIds] = useState([]);
//  // const email = 'bishalbhattacharjee15@gmail.com'; // Query parameter (replace with actual email or dynamic value)

//   useEffect(() => {
//     // Fetch data on component mount
//     const fetchData = async () => {
//       const token = JSON.parse(localStorage.getItem('authToken'))?.token;
      
//       const email = JSON.parse(localStorage.getItem('authToken'))?.email;
      
//       if (!token) {
//         console.error('Token not found!');
//         return;
//       }
      
//       try {
//         const response = await axios.get(`http://localhost:8080/api/hospital/blood/verification?email=${email}`, {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         // Log response to verify its structure
//         console.log('API Response:', response.data);

//         // Check if the response is an array before setting it
        
//           setVerificationData(response.data);
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
    
//     fetchData();
//   }, [email]);

//   const handleAccept = (id) => {
//     setAcceptingIds((prevIds) => [...prevIds, id]);
//     setRejectingIds((prevIds) => prevIds.filter((itemId) => itemId !== id)); // Ensure reject ID is removed if accepted
//   };

//   const handleReject = (id) => {
//     setRejectingIds((prevIds) => [...prevIds, id]);
//     setAcceptingIds((prevIds) => prevIds.filter((itemId) => itemId !== id)); // Ensure accept ID is removed if rejected
//   };

//   return (
//     <div>
//       <h1>Verification List</h1>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Donor Name</TableCell>
//               <TableCell>Blood Type</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>Donation Date</TableCell>
//               <TableCell>Expiration Date</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {verificationData.length > 0 ? (
//               verificationData.map((item) => (
//                 <TableRow key={item.id}>
//                   <TableCell>{item.id}</TableCell>
//                   <TableCell>{item.donourName}</TableCell>
//                   <TableCell>{item.bloodType}</TableCell>
//                   <TableCell>{item.amount}</TableCell>
//                   <TableCell>{new Date(item.donationDate).toLocaleString()}</TableCell>
//                   <TableCell>{new Date(item.expirationDate).toLocaleString()}</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleAccept(item.id)}
//                       disabled={acceptingIds.includes(item.id)}
//                     >
//                       Accept
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={() => handleReject(item.id)}
//                       disabled={rejectingIds.includes(item.id)}
//                       sx={{ marginLeft: 2 }}
//                     >
//                       Reject
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={7}>No data available</TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <div>
//         <h3>Accepted IDs: {acceptingIds.join(', ')}</h3>
//         <h3>Rejected IDs: {rejectingIds.join(', ')}</h3>
//       </div>
//     </div>
//   );
// }

// export default VerificationList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Box } from '@mui/material';
function VerificationList() {
  const [verificationData, setVerificationData] = useState([]);
  const [acceptingIds, setAcceptingIds] = useState([]);
  const [rejectingIds, setRejectingIds] = useState([]);
  // Query parameter (replace with actual email or dynamic value)
  const email = JSON.parse(localStorage.getItem('authToken'))?.email;
  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      const token = JSON.parse(localStorage.getItem('authToken'))?.token;
      
      
      if (!token) {
        console.error('Token not found!');
        return;
      }
      
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/hospital/blood/verification?email=${email}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        // Log response to verify its structure
        console.log('API Response:', response.data);

        // Check if the response is an array before setting it
        setVerificationData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [email]);

 const handleAccept = (id) => {
  setAcceptingIds((prevIds) => [...prevIds, id]);
  setRejectingIds((prevIds) => prevIds.filter((itemId) => itemId !== id));
  setVerificationData((prevData) => prevData.filter((item) => item.id !== id)); // remove from table
};

const handleReject = (id) => {
  setRejectingIds((prevIds) => [...prevIds, id]);
  setAcceptingIds((prevIds) => prevIds.filter((itemId) => itemId !== id));
  setVerificationData((prevData) => prevData.filter((item) => item.id !== id)); // remove from table
};

  const handleStoreBlood = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/hospital/blood/store`,
        {
          email: email,
          acceptingIds: acceptingIds,
          rejectingIds: rejectingIds,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('authToken'))?.token}`,
          },
        }
      );

      // Handle success or failure
      console.log('Store Blood Response:', response.status);
      alert('Blood stored successfully!');
    } catch (error) {
      console.error('Error storing blood:', error);
      alert('Failed to store blood!');
    }
  };

  return (
    <div>
      <h1>Verification List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Donor Name</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Donation Date</TableCell>
              <TableCell>Expiration Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {verificationData.length > 0 ? (
              verificationData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.donourName}</TableCell>
                  <TableCell>{item.bloodType}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{new Date(item.donationDate).toLocaleString()}</TableCell>
                  <TableCell>{new Date(item.expirationDate).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAccept(item.id)}
                      disabled={acceptingIds.includes(item.id)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleReject(item.id)}
                      disabled={rejectingIds.includes(item.id)}
                      sx={{ marginLeft: 2 }}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>No data available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      

      {/* Store Blood Button */}
     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
  <Button
    variant="contained"
    color="success"
    onClick={handleStoreBlood}
    disabled={acceptingIds.length === 0 && rejectingIds.length === 0}
  >
    Store Blood
  </Button>
</Box>
    </div>
  );
}

export default VerificationList;
