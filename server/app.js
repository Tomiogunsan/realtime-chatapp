require("dotenv").config()
require("./config/database").connect()
const express = require("express");
const User = require("./models/users")
const app = express()

app.use(express.json())

// Register
app.post("/register", async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body

        // validate user input
        if(!(email && password && firstName && lastName)){
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // validate if user exist in our database
        const oldUser = await User.findOne({email})
        if(oldUser){
            return res.status(409).send("User Already Exist. Please Login")
        }

        // Encrypt user password
        encryptedUserPassword = await bcrypt.hash(password, 10)

        // Create user in our database
        const user = await User.create({
           first_name: firstName,
            last_name:lastName,
            email: email.toLowerCase(),
            password: encryptedUserPassword,
        })

        // Create token
        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h",
            }
        )
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (error) {
        
    }
})

// Login
app.post("/login", (req, res) => {})


module.exports = app