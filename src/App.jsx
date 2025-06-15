/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage"; 
import DonorSignUpPage from "./components/DonorSignUp"; 
import OrganizationSignUpPage from "./components/OrganizationSignUp"; // Replace with actual path if different

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/donor-signup" element={<DonorSignUpPage />} />
        <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import LoginPage from './components/LoginPage';
// import DonorSignUpPage from './components/DonorSignUp';
// import OrganizationSignUpPage from './components/OrganizationSignUp';
// import ContactUs from './components/Contact';
// import Search from './components/Search';
// import FAQ from './components/FAQ';
// import Gallery from './components/Gallery'; // Import Gallery component

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/donor-signup" element={<DonorSignUpPage />} />
//         <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/FAQ" element={<FAQ />} />
//         <Route path="/Gallery" element={<Gallery />} /> {/* Gallery route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import LoginPage from './components/LoginPage';
// import DonorSignUpPage from './components/DonorSignUp';
// import OrganizationSignUpPage from './components/OrganizationSignUp';
// import ContactUs from './components/Contact';
// import Search from './components/Search';
// import FAQ from './components/FAQ';
// import Gallery from './components/Gallery'; // Import Gallery component
// import DonorDash from './components/DonorDash';
// import HospitalDash from './components/HospitalDash';
// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/donor-signup" element={<DonorSignUpPage />} />
//         <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/FAQ" element={<FAQ />} />
//         <Route path="/Gallery" element={<Gallery />} /> {/* Gallery route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import DonorSignUpPage from './components/DonorSignUp';
import OrganizationSignUpPage from './components/OrganizationSignUp';
import ContactUs from './components/Contact';
import Search from './components/Search';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import DonorDash from './components/DonorDash';
import HospitalDash from './components/HospitalDash';
import About from './components/About';
import Notification from './components/Notification';
import VerificationList from './components/VerificationList';
import AdminDash from './components/AdminDash';
import HospitalVer from './components/HospitalVer';
import ForgotPass from './components/ForgotPass';
import OrgCamp from './components/OrgCamp';
import RegCamp from './components/RegCamp';
import CheckBlood from './components/CheckBlood';
// App.jsx
import image40 from './assets/images/image40.jpeg';
import image41 from './assets/images/image41.jpeg';
import image42 from './assets/images/image42.avif';

const content = [
  {
    title: "Sri Mamata Banerjee Blood Heroes Initiative",
     description: "The Blood Heroes initiative was launched under the leadership of Hon'ble Chief Minister of West Bengal, Smt. Mamata Banerjee, with the aim to revolutionize the blood donation process and strengthen the healthcare system across the state. This initiative focuses on creating a robust, transparent, and accessible platform for voluntary blood donation, ensuring timely blood availability for patients in need.",
    // Path to the image in the public folder
    image: image40,
    content: "",
  },
  {
    title: "For the Blood Heroes",
    description: `The Blood Heroes initiative is committed to enhancing the healthcare system of West Bengal by ensuring timely and sufficient blood supply across all healthcare facilities. Under the leadership of Smt. Mamata Banerjee, the initiative has developed an efficient and transparent system to track blood donations, ensuring that the right blood reaches the right patients at the right time. This commitment to improving healthcare accessibility has made a significant impact in saving lives, especially during emergencies and natural disasters.`,
image: image41,
   // Path to the image in the public folder
    content: "",
  },
  {
    title: "west Bengal Blood Heroes",
    description: `The Blood Heroes initiative regularly organizes state-wide blood donation campaigns under the guidance of the Chief Minister of West Bengal, Smt. Mamata Banerjee. These campaigns aim to encourage voluntary blood donation, raise awareness, and educate the masses about the critical need for blood donations. By engaging local communities and leveraging the power of digital platforms, these campaigns make it easier for people to donate blood regularly, ultimately ensuring a consistent and sustainable blood supply for healthcare facilities.`,
    // Path to the image in the public folder
    image: image42,
    content: "",
  },
];

const App = () => {
  const storedAuth = JSON.parse(localStorage.getItem('auth')) || {
    isAuthenticated: false,
    userType: null,
  };

  const [auth, setAuth] = useState(storedAuth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      localStorage.setItem('auth', JSON.stringify(auth));
    } else {
      localStorage.removeItem('auth');
    }
  }, [auth]);

  const handleLogin = (userType) => {
    setAuth({
      isAuthenticated: true,
      userType,
    });
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      userType: null,
    });
  };

  const PrivateRoute = ({ element, allowedUserType }) => {
    if (!auth.isAuthenticated) {
      return <Navigate to="/login" />;
    }
    if (auth.userType !== allowedUserType) {
      return <Navigate to="/" />;
    }
    return element;
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <div style={{ marginBottom: '65px' }}></div>   
      <Routes>
        <Route path="/BloodHeroes" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/donor-signup" element={<DonorSignUpPage />} />
        <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/about" element={<About content={content}/>} />
        <Route path="/notify" element={<Notification/>}/>
        <Route path="/hospital-dashboard" element={<HospitalDash />} />
         <Route path="/admin-dashboard" element={<AdminDash />} />
         <Route path="/user-dashboard" element={<DonorDash />} />
        <Route path="/verification" element={<VerificationList />} />
        <Route path="/ver" element={<HospitalVer />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/org-camp" element={<OrgCamp />} />
        <Route path="/reg-camp" element={<RegCamp />} />
        <Route path="/check-blood" element={<CheckBlood />} />
        <Route
          path="/"
          element={
            <PrivateRoute
              element={<Home />}
              allowedUserType={auth.userType}
            />
          }
        />
  
      </Routes>
    </Router>
  );
};

export default App;
