const mongoose = require("mongoose");
const groupUsers = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  }
})
const groupSchema = new mongoose.Schema({
  group: {
    type: String,
    required: true,
  },
 users: [groupUsers]
  



});
const Group = mongoose.model("Group", groupSchema)

module.exports={Group}
