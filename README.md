# Filmster

## Project Description

This is the backend for the Filmster MERN application.

## Technologies Used

- MongoDB
- Mongoose
- Express
- CORS

## Installation

1. Fork and clone repository
2. Install dependencies
3. Install `nodemon` if it hasn't been installed already
4. Create a `.env` file and add a `DATABASE_URL` variable with your MongoDB Atlas connection string

## Getting Started

1. Run node `db/seed.js` and `node db/upcomingSeed.js` to populate your database with seed data
2. Run `nodemon index.js` to start your development server.

## API Endpoints

Movies

- GET: /movies
- GET: /movies/:id

Upcoming

- GET: /upcoming
- GET: /upcoming/:id

Comments
POST - /comments
