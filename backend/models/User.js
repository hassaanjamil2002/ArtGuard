// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  walletAddress: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
