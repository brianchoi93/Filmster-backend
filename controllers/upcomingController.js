const express = require('express');
const router = express.Router();
const UpcomingMovie = require('../models/Upcoming');

// localhost:8000/api/upcoming
// GET: Index route
router.get('/', (req, res) => {
  UpcomingMovie.find({}).then(movies => {
    return res.json(movies);
  });
});

// localhost:8000/api/upcoming/:id
// GET: Show route
router.get('/:id', async (req,res) => {
  const movie = await UpcomingMovie.findById(req.params.id);
  if (movie) {
    return res.json(movie);
  } else {
    return res.sendStatus(404);
  }
});

module.exports = router;