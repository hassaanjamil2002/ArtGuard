import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./register.css";
import Navbar from '../components/navbar'; // Import the Navbar component

const Register = () => {
    return (
        <div>
            <Navbar /> {/* Add Navbar here */}
            <div className="register-container">
                <div className="header">
                    <h1>Register Your Artwork</h1>
                    <p>Secure your artwork ownership using blockchain technology.</p>
                </div>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="pictureName">Picture Name</label>
                        <input
                            type="text"
                            id="pictureName"
                            name="pictureName"
                            placeholder="Enter the name of the artwork"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="uploaderName">Uploader's Name</label>
                        <input
                            type="text"
                            id="uploaderName"
                            name="uploaderName"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="walletInfo">Wallet Information</label>
                        <input
                            type="text"
                            id="walletInfo"
                            name="walletInfo"
                            placeholder="Enter your wallet address"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="artworkImage">Upload Artwork Image</label>
                        <div className="upload-field">
                            <input
                                type="file"
                                id="artworkImage"
                                name="artworkImage"
                                accept="image/*"
                                required
                            />
                            <small className="text-muted">Drag and drop your file here or click to upload.</small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-custom">
                        Register Artwork
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
