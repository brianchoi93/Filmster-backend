const mongoose = require('../db/connection');
const commentSchema = require('./Comment')

const movieSchema = new mongoose.Schema({
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
  comments: [commentSchema]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;