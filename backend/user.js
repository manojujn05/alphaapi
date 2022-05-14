const mongoose = require("mongoose");
const user = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);
