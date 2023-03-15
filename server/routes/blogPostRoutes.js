const express = require("express");
const router = express.Router()
const BlogPost = require("../models/blogPostSchema")

// blogPostRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /blogPost.
const blogPostRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

/*add new blog post*/ 
router.post("/add", async (req, res) => {
  console.log(req.body)
  const blogPost = new BlogPost({
    body: req.body.body,
    author: req.body.author, 
    title: req.body.title,
    date: req.body.date
  })

  try {
    const newBlogPost = await blogPost.save()
    console.log(newBlogPost)
    res.json(newBlogPost)
  } catch (err) {
    console.log(err)
    res.json({ message: err })
  }
});

/*get all blog posts*/
router.get("/", async (req,res) => {
  try {
    const blogPosts = await BlogPost.find()
    res.json(blogPosts)
  } catch (err) {
    res.json({ message: err })
  }
}
)

module.exports = router;