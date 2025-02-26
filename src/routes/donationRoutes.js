const express = require('express');
const donationController = require('../controllers/donationController');

const router = express.Router();

router.post('/', donationController.createDonation);
router.get('/', donationController.getAllDonations);
router.get('/:id', donationController.getDonationById);
router.put('/:id', donationController.updateDonation);
router.delete('/:id', donationController.deleteDonation);

module.exports = router;
