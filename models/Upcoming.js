const mongoose = require('../db/connection');
const commentSchema = require('./Comment')

const upcomingSchema = new mongoose.Schema({
  original_title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  comments: [commentSchema]
});

const UpcomingMovie = mongoose.model('UpcomingMovie', upcomingSchema);
module.exports = UpcomingMovie;