const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// localhost:8000/api/movies
// GET: Index route
router.get('/', (req, res) => {
  Movie.find({}).then(movies => {
    return res.json(movies);
  });
});

// localhost:8000/api/movies/:id
// GET: Show route
router.get('/:id', async (req,res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    return res.json(movie);
  } else {
    return res.sendStatus(404);
  }
});

module.exports = router;