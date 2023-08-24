const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
})