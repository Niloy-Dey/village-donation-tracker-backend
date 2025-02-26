const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
require("dotenv").config();

const donationRoutes = require("./src/routes/donationRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");
const authRoutes = require("./src/routes/authRoutes");

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/login", authRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/expenses", expenseRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Village Festival Software is running...");
});

module.exports = app;
