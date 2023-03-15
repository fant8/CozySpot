
const mongoose = require("mongoose")

const blogPostSchema = new mongoose.Schema({
  date: {
    type: Date,
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

blogPostSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

module.exports = mongoose.model("BlogPost", blogPostSchema)