const mongoose = require('../db/connection');

const commentSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

module.exports = commentSchema;