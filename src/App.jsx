import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login"; // Adjust path as necessary
import SignUpPage from "./components/SignUp"; // Your sign-up page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Login page */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Sign Up page */}
      </Routes>
    </Router>
  );
}

export default App;
