import React, { useState } from 'react';
import './ownershiptransfer.css'; // Import the CSS file
import Navbar from '../components/navbar'; // Import the Navbar component

const OwnershipTransfer = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [artworkName, setArtworkName] = useState('');
  const [newWalletAddress, setNewWalletAddress] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const verifyOwnership = async () => {
    // Temporary bypass for testing
    setVerificationStatus(true); // Automatically mark verification as successful
    setErrorMessage('');
  };

  const transferOwnership = async () => {
    alert(`Ownership of "${artworkName}" has been transferred to ${newWalletAddress}!`);
    setWalletAddress('');
    setArtworkName('');
    setNewWalletAddress('');
    setVerificationStatus(null);
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar here */}

      <div className="ownership-transfer-container">
        <div className="form-wrapper">
          <h1 className="title">Ownership Transfer</h1>

          {/* Step 1: Verify Ownership */}
          <div className="step-box">
            <h3>Step 1: Verify Ownership</h3>
            <input
              type="text"
              placeholder="Your Wallet Address"
              className="form-control"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Artwork Name"
              className="form-control"
              value={artworkName}
              onChange={(e) => setArtworkName(e.target.value)}
            />
            <button className="btn btn-primary verify-btn" onClick={verifyOwnership}>
              Verify
            </button>
            {verificationStatus === false && (
              <p className="error-message">{errorMessage}</p>
            )}
          </div>

          {/* Step 2: Transfer Ownership */}
          {verificationStatus && (
            <div className="step-box">
              <h3>Step 2: Transfer Ownership</h3>
              <input
                type="text"
                placeholder="New Wallet Address"
                className="form-control"
                value={newWalletAddress}
                onChange={(e) => setNewWalletAddress(e.target.value)}
              />
              <button
                className="btn btn-success transfer-btn"
                onClick={transferOwnership}
              >
                Transfer Ownership
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnershipTransfer;
