const { errorResponse, successResponse } = require("../../utils/helper");
const User = require("../../models/users");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

class Authservice {
  async RegisterUser(payload) {
    const { email, password } = payload;

    try {
      const oldUser = await User?.findOne({ email: email });
      if (oldUser) {
        return errorResponse({}, "User Already Exist. Please Login", 409);
      }
      const encryptedUserPassword = await bcrypt.hash(password, salt);
      // Create user in our database
      const newUser = new User({
        ...payload,
        email: email.toLowerCase(),
        password: encryptedUserPassword,
      });
     
      const user = await newUser?.save();
      console.log("user", user);
        if(user){
          return successResponse(user, "User registered successfully", 200);
        }
      
    } catch (error) {
      return errorResponse({}, error.message, 501);
    }
  }

  async LoginUser(payload){
    try {
      const { email, password } = payload;
      const returnedUser = await User.findOne({ email: email });
      console.log(returnedUser)
      !returnedUser && errorResponse({}, "User not found", 404);
      const validPassword = await bcrypt.compareSync(
        password,
        returnedUser?.password
      );
      console.log(bcrypt.compare(password, returnedUser?.password))
      if(!validPassword){
      return errorResponse({}, "Incorrect email or password", 400);
      }
      return successResponse(returnedUser, "Logged in Successfully", 200);
    } catch (error) {
     return errorResponse({}, error.message, 500)

    }
      
  }
}

module.exports = new Authservice();
