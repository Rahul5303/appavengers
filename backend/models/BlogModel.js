const mongoose = require('mongoose');

// Create a Blog model to store blog content in MongoDB.

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;