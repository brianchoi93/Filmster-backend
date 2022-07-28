const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// CREATE
// POST /reviews/
router.post('/', (req, res, next) => {
  const newComment = req.body;
  const movieId = req.body.movieId;
  Movie.findById(movieId)
    .then((movie) => {
      movie.comments.push(newComment);
      return movie.save();
    })
    .then((movie) => res.json(movie))
    .catch(next);
});

module.exports = router;