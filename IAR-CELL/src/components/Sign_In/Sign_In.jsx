import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import './Sign_In.css';
import { initializeOTPSignIn } from './otpScript';
import logo from "../../assets/OTP/IIT_PKD_long logo_RGB.jpg"
import useStore from '../../Store';
const OTPSignIn = () => {
  const emailInputRef = useRef(null);
  const otpInputRef = useRef(null);
  const sendOtpBtnRef = useRef(null);
  const loginBtnRef = useRef(null);
  const resendBtnRef = useRef(null);
  const otpSectionRef = useRef(null);
  const successMessageRef = useRef(null);
  const formRef = useRef(null);
  const { setToken } = useStore(); // ✅ Get token setter inside the component

  console.log("Token state:", setToken);
  useEffect(() => {
    initializeOTPSignIn({
      emailInputRef,
      otpInputRef,
      sendOtpBtnRef,
      loginBtnRef,
      resendBtnRef,
      otpSectionRef,
      successMessageRef,
      formRef,
      setToken, // ✅ Pass Zustand method here
      onSuccessRedirect: () => {
        // window.location.href = '/profile'; // or useNavigate for React Router
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="signin-card">
        <div className="header">
          <div className="logo-section">
            <img src={logo} alt="IIT Palakkad Logo" className="logo" />
          </div>
          <h1>Welcome to IIT Palakkad</h1>
          <p>Enter your email to receive an OTP for secure access</p>
        </div>

        <form className="signin-form" ref={formRef}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input ref={emailInputRef} type="email" placeholder="your.email@iitpkd.ac.in" required />
            <span className="error-message" id="emailError"></span>
          </div>

          <button type="button" className="btn btn-primary" ref={sendOtpBtnRef}>
            <span className="btn-text">Send OTP</span>
            <span className="btn-loader" id="otpLoader"></span>
          </button>

          <div className="otp-section" ref={otpSectionRef}>
            <div className="form-group">
              <label htmlFor="otp">Enter 6-Digit OTP</label>
              <input ref={otpInputRef} type="text" maxLength="6" placeholder="000000" />
              <span className="error-message" id="otpError"></span>
            </div>

            <button type="button" className="btn btn-primary" ref={loginBtnRef}>
              <span className="btn-text">Verify & Login</span>
              <span className="btn-loader" id="loginLoader"></span>
            </button>

            <div className="resend-section">
              <p>Didn't receive the code? <button type="button" className="link-btn" ref={resendBtnRef}>Resend OTP</button></p>
            </div>
          </div>
        </form>

        <div className="success-message" ref={successMessageRef}>
          <div className="success-icon">✓</div>
          <h2>Authentication Successful!</h2>
          <p>Welcome to IIT Palakkad Alumni Portal. You will be redirected shortly.</p>
        </div>

        <div>
          <p>If you don't have an account <Link href="/Signup" className='link-btn'>SignUp</Link></p>
        </div>

        <div className="footer-info">
          <p>Indian Institute of Technology Palakkad</p>
          <p className="tagline">Nurturing Minds For a Better World</p>
        </div>
      </div>
    </div>
  );
};

export default OTPSignIn;
