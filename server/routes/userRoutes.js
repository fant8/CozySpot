const express = require("express");
const router = express.Router();
const User = require("../models/userSchema")


// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


router.post("/add", async (req, res) => {
  console.log(req.body)
  const user = new User({
    _id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
    friends: [],
  })

  try {
    const newUser = await user.save()
    console.log(newUser)
    res.json(newUser)
  } catch (err) {
    console.log(err)
    res.json({ message: err })
  }
})

/*get all users*/
router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find({})
    console.log(users);
    res.json(users)
  } catch (err) {
    res.json({ message: err })
  }
}
)

module.exports = router;