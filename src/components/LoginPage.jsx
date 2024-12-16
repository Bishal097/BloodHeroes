import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState(""); // For capturing email input
  const [password, setPassword] = useState(""); // For capturing password input
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const [isSignUp, setIsSignUp] = useState(false); // Track whether user is on sign up page
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const backgroundImage =
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login check (for example purposes)
    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
    } else {
      setErrorMessage(""); // Clear error if fields are filled
      // Your authentication logic here (e.g., API request)
      console.log("Form submitted:", { email, password });
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(true); // Set state to show the signup options
  };

  const handleDonorClick = () => {
    // Navigate to Donor Sign Up page
    navigate("/donor-signup");
  };

  const handleOrganizationClick = () => {
    // Navigate to Organization Sign Up page
    navigate("/organization-signup");
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

        {/* Error message */}
        {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

        {isSignUp ? (
          <div>
            <h4 className="text-center mb-4">Choose Your Role</h4>
            <MDBBtn
              color="primary"
              size="lg"
              className="w-100 mb-3"
              onClick={handleDonorClick}
            >
              Donor Registration
            </MDBBtn>
            <MDBBtn
              color="secondary"
              size="lg"
              className="w-100"
              onClick={handleOrganizationClick}
            >
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
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
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

            <MDBBtn className="w-100" size="lg" type="submit">
              Login
            </MDBBtn>
          </form>
        )}

        <p className="small text-center fw-bold mt-3">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <a href="#" onClick={() => setIsSignUp(false)} className="text-primary">
                Sign In
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <a href="#" onClick={handleSignUpClick} className="text-primary">
                Sign Up
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
