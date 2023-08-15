const express = require("express")
const router = express.Router()
const  authRoute = require("../auth/routes/authRoute")

router.use("/auth", authRoute)


module.exports=  router