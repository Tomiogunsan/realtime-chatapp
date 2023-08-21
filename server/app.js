require("dotenv").config();
require("./config/database").connect();
const passport = require("passport");
require("./middleware/passport-config")(passport);
const express = require("express");

const routes = require("./routes");

const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const uriEncoder = bodyParser.urlencoded({ extended: false });

app.use(uriEncoder);
app.use(jsonParser);
// app.use(express.json());
app.use(passport.initialize());
app.use("/api", routes);
// Register
// app.post("/register", async (req, res) => {
//     try {
//         const {firstName, lastName, email, password} = req.body

//         // validate user input
//         if(!(email && password && firstName && lastName)){
//             res.status(400).send("All input is required");
//         }

//         // check if user already exist
//         // validate if user exist in our database
//         const oldUser = await User.findOne({email})
//         if(oldUser){
//             return res.status(409).send("User Already Exist. Please Login")
//         }

//         // Encrypt user password
//        const  encryptedUserPassword = await bcrypt.hash(password, 10)

//         // Create user in our database
//         const user = await User.create({
//            first_name: firstName,
//             last_name:lastName,
//             email: email.toLowerCase(),
//             password: encryptedUserPassword,
//         })

//         // Create token
//         //  const token = jwt.sign(
//         //    { user_id: user._id, email },
//         //    // process.env.TOKEN_KEY,
//         //    {
//         //      expiresIn: "5h",
//         //    }
//         //  );
//         // save user token
//         // user.token = token;

//         // return new user
//         res.status(201).send( "User registered successfully", user);
//     } catch (error) {
//         console.log(error)
//     }
// })

// // Login
// app.post("/login", async(req, res) => {
//     try {
//         const {email, password} = req.body;
//         const user = await User.findOne({ email });
//         if(!user){
//             return res.status(400).send("Invalid email or password")
//         }
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if(!passwordMatch){
//             return res.status(400).send("Invalid email or password")
//         }
//         const token = jwt.sign(
//             { user_id: user._id, email },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: "1h",
//             }
//             );
//             res.status(200).send("Logged in successfully", token)
//     } catch (error) {
//         console.log(error)
//     }
// })

app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("You have accessed a protected route!");
  }
);

module.exports = app;
