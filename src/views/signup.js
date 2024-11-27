import React, { useState } from 'react';
import './signup.css'; // Import the CSS file for styling
import Navbar from '../components/navbar'; // Import the Navbar component
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!username || !password || !walletAddress || !dob || !email) {
      setErrorMessage('All fields are required!');
      return;
    }

    // Sending the data to the backend API
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          walletAddress,
          dob,
          email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('Sign up successful!');
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setErrorMessage('Error connecting to the server.');
    }
  };

  return (

    <div>
        <Navbar></Navbar>
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-header">Create an Account</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="walletAddress">Wallet Address</label>
            <input
              type="text"
              id="walletAddress"
              placeholder="Enter wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              placeholder="Enter your date of birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
