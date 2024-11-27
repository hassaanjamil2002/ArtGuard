import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './navbar.css'

const Navbar = (props) => {
  const { user, signOut } = useAuth();

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <Link to="/" className="thq-link thq-body-small">{props.link1}</Link>
            <Link to="/register" className="thq-link thq-body-small">{props.link2}</Link>
            <Link to="/ownership-transfer" className="thq-link thq-body-small">{props.link3}</Link>
            <Link to="/provenance-verification" className="thq-link thq-body-small">{props.link4}</Link>
          </nav>
          <div className="navbar-buttons1">
            {user ? (
              <>
                <span className="navbar-username">Hello, {user.username}</span>
                <button onClick={signOut} className="signout-btn">Sign Out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="navbar-action21 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">{props.action2}</span>
                </Link>
                <Link to="/signup" className="navbar-action11 thq-button-animated thq-button-filled">
                  <span className="thq-body-small">{props.action1}</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  link1: 'Home',
  link2: 'Register Artwork',
  link3: 'Ownership Transfer',
  link4: 'Provenance Verification',
  action2: 'Log In',
  action1: 'Sign Up',
  logoSrc: 'your-logo-src',
  logoAlt: 'Logo',
};

export default Navbar;
