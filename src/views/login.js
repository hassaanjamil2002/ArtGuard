import React, { useState, useEffect } from 'react';
import './login.css';
import Navbar from '../components/navbar';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { user, login } = useAuth();
  const history = useHistory();

  // Redirect if the user is already logged in
  useEffect(() => {
    if (user) {
      history.push('/'); // Redirect to home if logged in
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Both fields are required!');
      return;
    }

    try {
      const success = await login(username, password);

      if (success) {
        setSuccessMessage('Login successful!');
        setErrorMessage('');
        history.push('/'); // Redirect to home after login
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setErrorMessage('Error connecting to the server.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-form-container">
          <h1 className="login-header">Log In</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <form className="login-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="login-btn">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
