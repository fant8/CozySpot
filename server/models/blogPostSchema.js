
const mongoose = require("mongoose")

// any of the fiels can be made mandetory by adding "required: true"

const blogPostSchema = new mongoose.Schema({
  date: {
    type: date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required:true,
  },
  author:{
    type: String,
    required: true,
  },
  photo:{
    type: Buffer,
  }
})

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

module.exports = mongoose.model("BlogPost", blogPostSchema)