const mongoose = require('mongoose');

// Define the comment schema
const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the blog post schema
const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 50,
    },
    author: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String], // Array of strings
      default: [],
    },
    category: {
      type: String,
      default: 'General',
    },
    likes: {
      type: [String], // Array of usernames
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
    comments: [commentSchema], // Embedding comments as subdocuments
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt`
  }
);

// Create the model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
