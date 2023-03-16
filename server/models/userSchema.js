
const mongoose = require("mongoose")

// any of the fiels can be made mandetory by adding "required: true"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  _id: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
  },
  friends: [{
    friendId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    }
  }],
})

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

module.exports = mongoose.model("Users", userSchema)