const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
  }
});
const User = mongoose.model("User", userSchema);

module.exports={User}