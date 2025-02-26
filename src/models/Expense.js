const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  occasion: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Cost", CostSchema);
