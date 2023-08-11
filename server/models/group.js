const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  group: {
    type: String,
    required: true,
  },
  messages: {
    message: String,
    displayName: String,
    createdtime: Date,
    group: String,
  },
});
const Group = mongoose.model("Group", groupSchema)

module.exports={Group}
