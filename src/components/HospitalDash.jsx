// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { createTheme } from '@mui/material/styles';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { useDemoRouter } from '@toolpad/core/internal';
// import { useNavigate } from 'react-router-dom';

// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// export default function HospitalDash(props) {
//   const { window } = props;
//   const router = useDemoRouter('/home');
//   const navigate = useNavigate();
//   const demoWindow = window !== undefined ? window() : undefined;

//   // State to manage dialog visibility and form data
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     hospitalEmail: '',
//     donourEmail: '',
//     bloodType: '',
//     amount: '',
//     donationDate: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

  
//   // const D_API_URL = `${import.meta.env.VITE_API_URL}/hospital/donate`; // Replace with actual API URL

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const auth = localStorage.getItem('authToken');
//       if (!auth) throw new Error('Authentication token is missing. Please log in.');

//       const token = JSON.parse(auth).token;
//       if (!token) throw new Error('Invalid token. Please log in again.');
//       console.log(formData);
        
//       const response = await axios.post(`https://bloodheroes.onrender.com/api/hospital/donate`, formData, {
//         headers: {
//           'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//       });
    
//       setSuccessMessage('Blood donation added successfully!');
//       setErrorMessage('');
//       console.log('Response:', response.data);
//       handleClose();
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage(
//         error.response?.data?.message || error.message || 'An error occurred during submission.'
//       );
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <AppProvider
//       navigation={[]} // Empty navigation, we're adding the buttons manually
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button variant="contained" color="primary" onClick={handleClickOpen}>
//             Add Blood
//           </Button>
//         </Box>

//         {/* Manually render Home and Verification List buttons */}
//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => navigate('/home')}
//             startIcon={<DescriptionIcon />}
//             sx={{ marginRight: 2 }}
//           >
//             Go to Home
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => navigate('/verification')}
//             startIcon={<DescriptionIcon />}
//             sx={{ marginRight: 2 }}
//           >
//             Verification List
//           </Button>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => navigate('/org-camp')}
//             startIcon={<DescriptionIcon />}
//           >
//             Organize Camp
//           </Button>
//         </Box>
        

//         {/* Dialog for Add Blood */}
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>Add Blood Donation</DialogTitle>
//           <DialogContent>
//             <TextField
//               margin="dense"
//               label="Hospital Email"
//               name="hospitalEmail"
//               value={formData.hospitalEmail}
//               onChange={handleInputChange}
//               fullWidth
//               variant="outlined"
//               required
//             />
//             <TextField
//               margin="dense"
//               label="Donour Email"
//               name="donourEmail"
//               value={formData.donourEmail}
//               onChange={handleInputChange}
//               fullWidth
//               variant="outlined"
//               required
//             />
//             <TextField
//               select
//               margin="dense"
//               label="Blood Type"
//               name="bloodType"
//               value={formData.bloodType}
//               onChange={handleInputChange}
//               fullWidth
//               variant="outlined"
//               required
//               SelectProps={{
//                 native: true,
//               }}
//             >
//               <option value="">Select Blood Type</option>
//               <option value="A_POSITIVE">A+</option>
//               <option value="A_NEGATIVE">A-</option>
//               <option value="B_POSITIVE">B+</option>
//               <option value="B_NEGATIVE">B-</option>
//               <option value="O_POSITIVE">O+</option>
//               <option value="O_NEGATIVE">O-</option>
//               <option value="AB_POSITIVE">AB+</option>
//               <option value="AB_NEGATIVE">AB-</option>
//             </TextField>

//             <TextField
//               margin="dense"
//               label="Amount"
//               name="amount"
//               type="number"
//               value={formData.amount}
//               onChange={handleInputChange}
//               fullWidth
//               variant="outlined"
//               required
//             />
//             <TextField
//               margin="dense"
//               name="donationDate"
//               type="datetime-local"
//               value={formData.donationDate}
//               onChange={handleInputChange}
//               fullWidth
//               variant="outlined"
//               required
//             />
//             {errorMessage && (
//               <Typography color="error" sx={{ mt: 2 }}>
//                 {errorMessage}
//               </Typography>
//             )}
//             {successMessage && (
//               <Typography color="success" sx={{ mt: 2 }}>
//                 {successMessage}
//               </Typography>
//             )}
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={handleSubmit} color="primary">
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useNavigate } from 'react-router-dom';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function HospitalDash(props) {
  const { window } = props;
  const router = useDemoRouter('/home');
  const navigate = useNavigate();
  const demoWindow = window !== undefined ? window() : undefined;

  // State to manage dialog visibility and form data
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    hospitalEmail: '',
    donourEmail: '',
    bloodType: '',
    amount: '',
    donationDate: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async () => {
    try {
      const auth = localStorage.getItem('authToken');
      if (!auth) throw new Error('Authentication token is missing. Please log in.');

      const token = JSON.parse(auth).token;
      if (!token) throw new Error('Invalid token. Please log in again.');
      console.log(formData);

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/hospital/donate`, formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      setSuccessMessage('Blood donation added successfully!');
      setErrorMessage('');
      console.log('Response:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(
        error.response?.data?.message || error.message || 'An error occurred during submission.'
      );
      setSuccessMessage('');
    }
  };
   
  return (
    <AppProvider
      navigation={[]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add Blood
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/home')}
            startIcon={<DescriptionIcon />}
            sx={{ marginRight: 2 }}
          >
            Go to Home
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/verification')}
            startIcon={<DescriptionIcon />}
            sx={{ marginRight: 2 }}
          >
            Verification List
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/org-camp')}
            startIcon={<DescriptionIcon />}
            sx={{ marginRight: 2 }}
          >
            Organize Camp
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/reg-camp')}
            startIcon={<DescriptionIcon />}
            sx={{ marginRight: 2 }}
          >
            Active Camps
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/check-blood')}
            startIcon={<DescriptionIcon />}
            sx={{ marginRight: 2 }}
          >
            Blood Status
          </Button>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Blood Donation</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Hospital Email"
              name="hospitalEmail"
              value={formData.hospitalEmail}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              margin="dense"
              label="Donor Email"
              name="donourEmail"
              value={formData.donourEmail}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              select
              margin="dense"
              label="Blood Type"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Select Blood Type</option>
              <option value="A_POSITIVE">A+</option>
              <option value="A_NEGATIVE">A-</option>
              <option value="B_POSITIVE">B+</option>
              <option value="B_NEGATIVE">B-</option>
              <option value="O_POSITIVE">O+</option>
              <option value="O_NEGATIVE">O-</option>
              <option value="AB_POSITIVE">AB+</option>
              <option value="AB_NEGATIVE">AB-</option>
            </TextField>

            <TextField
              margin="dense"
              label="Amount"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              margin="dense"
              name="donationDate"
              type="datetime-local"
              value={formData.donationDate}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
            />
            {errorMessage && (
              <Typography color="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            )}
            {successMessage && (
              <Typography color="success" sx={{ mt: 2 }}>
                {successMessage}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </DashboardLayout>
    </AppProvider>
  );
}
