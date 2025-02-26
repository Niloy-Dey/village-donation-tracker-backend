const Cost = require("../models/Expense");

// Add new cost entry
exports.addCost = async (req, res) => {
  try {
    const { amount, description, year, occasion } = req.body;
    const newCost = new Cost({ amount, description, year, occasion });
    await newCost.save();
    res.status(201).json({ message: "Cost added successfully", cost: newCost });
  } catch (error) {
    res.status(500).json({ error: "Failed to add cost" });
  }
};

// Get all cost entries
exports.getAllCosts = async (req, res) => {
  try {
    const costs = await Cost.find().sort({ createdAt: -1 });
    res.status(200).json(costs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve costs" });
  }
};

// Delete cost entry by ID
exports.deleteCost = async (req, res) => {
  try {
    const { id } = req.params;
    await Cost.findByIdAndDelete(id);
    res.status(200).json({ message: "Cost deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cost" });
  }
};
