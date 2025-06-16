import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import HospitalDash from "./HospitalDash";
import DonorDash from "./DonorDash";
import axios from 'axios';
import AdminDash from "./AdminDash";
import logo from '../assets/images/logo.png';

function LoginPage() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const backgroundImage =
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    setErrorMessage("");

    const loginRequestData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/authenticate`, loginRequestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.token) {
        localStorage.setItem('authToken', JSON.stringify(response.data));
        const userRole = response.data.role;

        if (userRole === "ADMIN") {
          navigate("/admin-dashboard");
        } else if (userRole === "ORGANIZATION_MANAGER") {
          navigate("/hospital-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        setErrorMessage("Authentication failed.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data?.message || "An error occurred during authentication.");
      } else if (error.request) {
        setErrorMessage("No response from server. Please try again later.");
      } else {
        setErrorMessage("An error occurred while connecting to the server.");
      }
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleDonorClick = () => {
    navigate("/donor-signup");
  };

  const handleOrganizationClick = () => {
    navigate("/organization-signup");
  };

  const handleforgotpassword = () => {
    navigate("/forgot-password");
  };

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
        <div style={{ textAlign: "center", marginBottom: "20px", marginLeft: "90px" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
        </div>

        <h3 className="text-center mb-4">Sign In</h3>

        {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

        {isSignUp ? (
          <div>
            <h4 className="text-center mb-4">Choose Your Role</h4>
            <MDBBtn color="primary" size="lg" className="w-100 mb-3" onClick={handleDonorClick}>
              Donor Registration
            </MDBBtn>
            <MDBBtn color="secondary" size="lg" className="w-100" onClick={handleOrganizationClick}>
              Organization Registration
            </MDBBtn>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name="rememberMe" value="" id="rememberMe" label="Remember me" />
              <span onClick={handleforgotpassword} style={{ cursor: "pointer", color: "#0d6efd" }}>
                Forgot password?
              </span>
            </div>

            <MDBBtn className="w-100" size="lg" type="submit">
              Login
            </MDBBtn>
          </form>
        )}

        <p className="small text-center fw-bold mt-3">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-primary"
                style={{ cursor: "pointer" }}
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <span
                onClick={handleSignUpClick}
                className="text-primary"
                style={{ cursor: "pointer" }}
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
