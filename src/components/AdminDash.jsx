// eslint-disable-next-line no-unused-vars
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// Theme configuration
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

// Content Component for the dashboard
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for Admin</Typography>
    </Box>
  );
}

// Admin Dashboard Component
function AdminDash({ window }) {
  const router = useDemoRouter('/home');
  const navigate = useNavigate();
  // Handle external window (if provided)
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={[]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
    
      <DashboardLayout>
      <Box sx={{ textAlign: 'center', mt: 4 , }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/home')}
            startIcon={<DescriptionIcon />}
            sx={{ marginRight: 2 }}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/ver')}
            startIcon={<DescriptionIcon />}
          >
            Verification List
          </Button>
        </Box>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default AdminDash;
