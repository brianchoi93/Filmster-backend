
//=============================================================================
// Basic Config
//=============================================================================
// Import express
const express = require('express');
// Instantiate express
const app = express();
// Set server port
app.set('port', process.env.PORT || 8000);

//=============================================================================
// Middleware
//=============================================================================
// Parse key value pairs in request
app.use(express.urlencoded({ extended: true }));
// Convert json strings to an object and attaches it to req.body
app.use(express.json());
// Use cors package to allow connections from all domains
const cors = require('cors');
app.use(cors());

//=============================================================================
// Routes
//=============================================================================
app.get('/', (req, res) => {
  res.redirect('/movies');
});
//=============================================================================
// Start Controllers
//=============================================================================

const moviesController = require('./controllers/moviesController.js');
app.use('/movies', moviesController);

const upcomingMoviesController = require('./controllers/upcomingController.js');
app.use('/upcoming', upcomingMoviesController);

const commentsController = require('./controllers/commentController.js');
app.use('/comments', commentsController);

//=============================================================================
// End Controllers
//=============================================================================
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});
//=============================================================================
// Start Server
//=============================================================================
app.listen(app.get('port'), () => {
	console.log(`??? Listening on Port ${app.get('port')}`);
});