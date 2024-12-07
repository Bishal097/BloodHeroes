import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
function LoginPage() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  const backgroundImage =
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG";

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", 
        }}
      ></div>

      {/* Login Form */}
      <div
        style={{
          position: "absolute",
          top: showForm ? "50%" : "100%", 
          left: "50%",
          transform: "translate(-50%, -50%)",
          transition: "top 1s ease",
          backgroundColor: "white", 
          borderRadius: "10px",
          padding: "2rem",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          opacity: showForm ? 1 : 0,
          filter: "none", 
        }}
      >
        {/* Logo Image - Add image above the form */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="/logo.png" 
            alt="Logo"
            style={{ width: "150px", height: "auto" }} 
          />
        </div>

        <h3 className="text-center mb-4">Sign In</h3>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="formControlEmail"
          type="email"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="formControlPassword"
          type="password"
        />

        <div className="d-flex justify-content-between mb-4">
          <MDBCheckbox
            name="rememberMe"
            value=""
            id="rememberMe"
            label="Remember me"
          />
          <a href="#!">Forgot password?</a>
        </div>

        <MDBBtn className="w-100" size="lg">
          Login
        </MDBBtn>

        <p className="small text-center fw-bold mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
