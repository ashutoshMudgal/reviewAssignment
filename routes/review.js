const express = require('express');
const router = express.Router();
const { saveReview, getReview, monthlyRatingByStore, totalRatingByCategory } = require("../controllers/review.js");
const { reviewProvider } = require("../provider/reviewProvider")
const { validate } = require("../provider/errorValidation")

router.post('/', reviewProvider(), validate, saveReview);

router.get('/', getReview);

router.get('/monthlyRatingByStore', monthlyRatingByStore)

router.get('/totalRatingByCategory', totalRatingByCategory)

module.exports = router;
