// routes/blogmodel.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/BlogModel');

// Create a new blog
router.post('/', async (req, res) => {
  try {
    const post = new Blog(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a blog
router.put('/:id', async (req, res) => {
  try {
    const post = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all blog
router.get('/', async (req, res) => {
  try {
    const posts = await Blog.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
      const deletedBlog = await Blog.findOneAndDelete({ _id: req.params.id });
  
      if (!deletedBlog) {
        // Document with the specified ID not found
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      console.log(`Blog deleted: ${deletedBlog}`);
  
      res.json({ message: 'Blog deleted' });
    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
