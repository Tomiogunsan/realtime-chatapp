require("dotenv").config()
require("./config/database").connect()
const express = require("express");
const User = require("./models/users")
const app = express()

app.use(express.json())


module.exports = app