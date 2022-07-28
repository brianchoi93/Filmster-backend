const UpcomingMovie = require('../models/Upcoming');

const movies = require ('./upcomingMovie.json')

// create new movies with the seed data
UpcomingMovie.insertMany(movies)
.then((res) => {
  // if successful, log the newly created movies
  console.log(res);
})
// if there's an error, log the error
.catch((err) => console.log(err))
// hang up database connection
.finally(() => process.exit());