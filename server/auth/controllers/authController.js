const { User } = require("../../models/users");
const { errorResponse, successResponse } = require("../../utils/helper");
const authService = require("../services/authService");

class AuthController {
  async RegisterUser(req, res) {
    // const { email, password, firstName, lastName } = req?.body;
    const email = req?.body?.email;
    const password = req?.body?.password;
    const firstName = req?.body?.firstName;
    const lastName = req?.body?.lastName;

    try {
      if (!(email && password && firstName && lastName)) {
        //   res.status(400).send("All input is required");
        return errorResponse({}, "All input is required", 400);
      }

      // check if user already exist
      // validate if user exist in our database

      const register = await authService.RegisterUser(req?.body);
      console.log("register", register);
      return res.status(register?.code).send(register);
    } catch (error) {
      console.log("error", error);
    }
  }
  async LoginUser(req, res){
    try {
      const loggedIn = await authService.LoginUser(req?.body);
      return  res.status(loggedIn?.code).send(loggedIn);
    } catch (error) {
      return errorResponse({}, "Unautorized", 401)
    }
    
  }
}

module.exports = new AuthController();
