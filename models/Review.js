const mongoose = require('../db/connection');

const ReviewSchema = new mongoose.Schema({
  title: String,
  body: String,
})

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;