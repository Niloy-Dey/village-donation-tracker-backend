const Donation = require('../models/Donation');

// Create a new donation
exports.createDonation = async (req, res) => {
  try {
    const { year, occasion, para, donorName, amount } = req.body;
    if (!year || !occasion || !para || !donorName || !amount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newDonation = new Donation({ year, occasion, para, donorName, amount });
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get all donations with optional filters and sorting
exports.getAllDonations = async (req, res) => {
  try {
    const { year, occasion, para } = req.query; // Get filter parameters from query string

    const filter = {};
    if (year) filter.year = Number(year);
    if (occasion) filter.occasion = occasion;
    if (para) filter.para = para;

    // Fetch donations based on filters, and sort by createdAt in descending order (latest first)
    const donations = await Donation.find(filter).sort({ createdAt: -1 }); // -1 for descending order

    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get a specific donation by ID
exports.getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a donation
exports.updateDonation = async (req, res) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDonation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.status(200).json(updatedDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a donation
exports.deleteDonation = async (req, res) => {
  try {
    const deletedDonation = await Donation.findByIdAndDelete(req.params.id);
    if (!deletedDonation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.status(200).json({ message: 'Donation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
