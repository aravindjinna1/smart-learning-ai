const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Signup', signupSchema);
