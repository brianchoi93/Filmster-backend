const mongoose = require('../db/connection');

const MovieSchema = new mongoose.Schema({
  original_title: String,
  overview: String,
  poster_path: String,
  release_date: String,
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;