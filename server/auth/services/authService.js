const { errorResponse, successResponse } = require("../../utils/helper");
const User = require("../../models/users");
const PasswordResetToken = require("../../models/passwordReset")
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const emailService = require("../../email/emailServices");
const { randomBytes } = require("crypto");

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

      newUser.token = randomBytes(20).toString("hex");
      const user = await newUser?.save();

      emailService.sendVerificationEmail(user.email, user.id, user.token);
      if (user) {
        return successResponse(user, "User registered successfully", 200);
      }
    } catch (error) {
      return errorResponse({}, error.message, 501);
    }
  }

  async LoginUser(payload) {
    try {
      const { email, password } = payload;
      const returnedUser = await User.findOne({ email: email });

      !returnedUser && errorResponse({}, "User not found", 404);
      const validPassword = await bcrypt.compareSync(
        password,
        returnedUser?.password
      );

      if (!validPassword) {
        return errorResponse({}, "Incorrect email or password", 400);
      }
      return successResponse(returnedUser, "Logged in Successfully", 200);
    } catch (error) {
      return errorResponse({}, error.message, 500);
    }
  }

  async RequestPasswordReset(email){
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User does not exist ");
      let token = await PasswordResetToken.findOne({ userId: user._id });
      if (token) {
        await token.deleteOne();
      }
      let resetToken = randomBytes(32).toString("hex");
      const hash = await bcrypt.hash(resetToken, salt);

      await new PasswordResetToken({
        userId: user.id,
        token: hash,
        createdAt: Date.now(),
      }).save();
      emailService.sendPasswordResetEmail(user.id, user.email, resetToken);
      if(resetToken){
         return successResponse(resetToken, "successful", 200);
      }
    } catch (error) {
       return errorResponse({}, error.message, 501);
    }
    
  }

  
  async ResetPassword (userId, token, password){
    let passwordResetToken = await PasswordResetToken.findOne({userId})
    if(!passwordResetToken){
      throw new Error("Invalid or expired password reset token")
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token)
    if(!isValid){
      throw new Error("Invalid or expired password reset token")
    }
    const hash = await bcrypt.hash(password, salt)
    await User.updateOne(
      {_id: userId},
      {$set: {password:hash}},
      {new: true}
    )
   emailService.sendPasswordResetSuccessEmail()
   await passwordResetToken.deleteOne()
   return true;
  }
}

module.exports = new Authservice();
