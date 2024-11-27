const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON data

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define a Schema for Users
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Store password in a hashed format!
  walletAddress: String,
  dob: String,
});

// Create a Model for Users
const User = mongoose.model('User', userSchema);

// POST route to handle sign-up
app.post('/api/signup', async (req, res) => {
  const { username, email, password, walletAddress, dob } = req.body;

  // Check if all fields are provided
  if (!username || !email || !password || !walletAddress || !dob) {
    return res.status(400).json({ success: false, message: 'All fields are required!' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User with this email already exists.' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      walletAddress,
      dob,
    });

    await newUser.save(); // Save user to MongoDB

    res.status(201).json({ success: true, message: 'Sign up successful!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
});

// POST route to handle login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if both fields are provided
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Both fields are required!' });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found.' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }

    res.status(200).json({ success: true, message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
