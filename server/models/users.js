const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
},
{
  timestamps: true
    
}
);
module.exports = mongoose.model("User", userSchema);
