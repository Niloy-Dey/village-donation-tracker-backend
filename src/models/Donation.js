const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  year: {
    type: Number,
    // required: true
  },
  occasion: {
    type: String,
    // required: true
  },
  para: {
    type: String,
    // required: true
  },
  donorName: {
    type: String,
    // required: true
  },
  amount: {
    type: Number,
    // required: true,
    min: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
