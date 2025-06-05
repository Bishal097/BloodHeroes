// import React, { useState } from "react";
// import axios from "axios";

// const ForgotPass = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");

//   const handleSendOtp = async () => {
//     // const emaile = JSON.parse(localStorage.getItem('authToken'))?.email; // Get email dynamically
//     console.log(email);
//     try {
//       const API_URL= import.meta.env.VITE_API_URL;
//       const response = await axios.get(`${API_URL}/auth/send-otp`, {
//         params: { email: email }, // Send email as a query parameter
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('OTP Send Response:', response.status, response.data);

//       if (response.status === 200) {
//         alert("OTP sent successfully!");
//         setIsOtpSent(true);
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error.response || error);
//       alert("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const API_URL= import.meta.env.VITE_API_URL;
//       const response = await axios.get(`${API_URL}/auth/verify-otp`, {
//         params: { otp }, // Send OTP as a query parameter
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         setVerificationMessage("OTP verified successfully!");
//         localStorage.removeItem('authToken');
//         // localStorage.removeItem('recoveryEmail');
//         console.log('Email:', response.data.email);
//         localStorage.setItem('recoveryEmail', response.data.email);
//       }
//     } catch (error) {
//       setVerificationMessage("OTP verification failed. Please try again.");
//       console.error('Error verifying OTP:', error.response || error);
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           width: "300px",
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>
//         {!isOtpSent ? (
//           <>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "15px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <button
//               onClick={handleSendOtp}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Send OTP
//             </button>
//           </>
//         ) : (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "15px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <button
//               onClick={handleVerifyOtp}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#28a745",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Verify OTP
//             </button>
//           </>
//         )}
//         {verificationMessage && (
//           <p style={{ marginTop: "15px", textAlign: "center", color: "#333" }}>
//             {verificationMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPass;

// import React, { useState } from "react";
// import axios from "axios";

// const ForgotPass = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);  // New state for OTP verification
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [changePasswordMessage, setChangePasswordMessage] = useState("");

//   const API_URL = import.meta.env.VITE_API_URL;

//   const handleSendOtp = async () => {
//     if (!email) {
//       alert("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_URL}/auth/send-otp`, {
//         params: { email },
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.status === 200) {
//         alert("OTP sent successfully!");
//         setIsOtpSent(true);
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error.response || error);
//       alert("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/auth/verify-otp`, {
//         params: { otp },
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.status === 200) {
//         setVerificationMessage("OTP verified successfully!");
//         setIsOtpVerified(true);
//         localStorage.removeItem("authToken");
//         localStorage.setItem("recoveryEmail", response.data.email);
//         setEmail(response.data.email); // ensure email is set for next step
//       }
//     } catch (error) {
//       setVerificationMessage("OTP verification failed. Please try again.");
//       console.error("Error verifying OTP:", error.response || error);
//     }
//   };

//   const handleChangePassword = async () => {
//     if (!password || !confirmPassword) {
//       alert("Please fill in both password fields.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${API_URL}/auth/change-password`,
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200) {
//         setChangePasswordMessage("Password changed successfully!");
//         // Optionally reset state or redirect user here
//       }
//     } catch (error) {
//       setChangePasswordMessage("Failed to change password. Please try again.");
//       console.error("Error changing password:", error.response || error);
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "url(https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           width: "300px",
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//           Forgot Password
//         </h2>

//         {/* Step 1: Enter email and send OTP */}
//         {!isOtpSent && (
//           <>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "15px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <button
//               onClick={handleSendOtp}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Send OTP
//             </button>
//           </>
//         )}

//         {/* Step 2: Enter OTP */}
//         {isOtpSent && !isOtpVerified && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "15px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <button
//               onClick={handleVerifyOtp}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#28a745",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Verify OTP
//             </button>
//           </>
//         )}

//         {/* Step 3: Change password */}
//         {isOtpVerified && (
//           <>
//             <input
//               type="password"
//               placeholder="New password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "15px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <input
//               type="password"
//               placeholder="Confirm new password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "15px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <button
//               onClick={handleChangePassword}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Change Password
//             </button>
//           </>
//         )}

//         {/* Messages */}
//         {verificationMessage && (
//           <p
//             style={{
//               marginTop: "15px",
//               textAlign: "center",
//               color: verificationMessage.includes("successfully") ? "green" : "red",
//             }}
//           >
//             {verificationMessage}
//           </p>
//         )}
//         {changePasswordMessage && (
//           <p
//             style={{
//               marginTop: "15px",
//               textAlign: "center",
//               color: changePasswordMessage.includes("successfully") ? "green" : "red",
//             }}
//           >
//             {changePasswordMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPass;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [changePasswordMessage, setChangePasswordMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  // Send OTP to email
  const handleSendOtp = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/auth/send-otp`, {
        params: { email },
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("OTP sent successfully!");
        setIsOtpSent(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error.response || error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/auth/verify-otp`, {
        params: { otp },
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setVerificationMessage("OTP verified successfully!");
        setIsOtpVerified(true);
        // Store email from response if needed
        if (response.data.email) {
          setEmail(response.data.email);
        }
      }
    } catch (error) {
      setVerificationMessage("OTP verification failed. Please try again.");
      console.error("Error verifying OTP:", error.response || error);
    }
  };

  // Change password
  const handleChangePassword = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/auth/change-password`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setChangePasswordMessage("Password changed successfully! Redirecting to login...");
        localStorage.removeItem("recoveryEmail");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setChangePasswordMessage("Failed to change password. Please try again.");
      console.error("Error changing password:", error.response || error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url(https://upload.wikimedia.org/wikipedia/commons/f/f6/Blood_donation_%28at_a_%22bloodmobile%22%29.JPG)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "320px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>

        {/* Step 1: Enter email & send OTP */}
        {!isOtpSent && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleSendOtp}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send OTP
            </button>
          </>
        )}

        {/* Step 2: Enter OTP & verify */}
        {isOtpSent && !isOtpVerified && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleVerifyOtp}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>
            {verificationMessage && (
              <p
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: verificationMessage.includes("failed") ? "red" : "green",
                }}
              >
                {verificationMessage}
              </p>
            )}
          </>
        )}

        {/* Step 3: Enter new password and confirm */}
        {isOtpVerified && (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleChangePassword}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#ff6600",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Change Password
            </button>
            {changePasswordMessage && (
              <p
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: changePasswordMessage.includes("Failed") ? "red" : "green",
                }}
              >
                {changePasswordMessage}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
