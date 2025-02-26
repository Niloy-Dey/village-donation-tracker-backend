const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router.post("/", expenseController.addCost);      // Add cost
router.get("/", expenseController.getAllCosts);   // Get all costs
router.delete("/:id", expenseController.deleteCost); // Delete cost by ID

module.exports = router;
