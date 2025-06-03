// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: 0
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: [true, 'Gender is required']
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Person', personSchema);
