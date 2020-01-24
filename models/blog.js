var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  subject: String,
  message: String
});

module.exports = mongoose.model("Blog", blogSchema);
