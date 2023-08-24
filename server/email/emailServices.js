const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { CLIENT_ID } = process.env;
const { CLIENT_SECRET } = process.env;
const { REDIRECT_URI } = process.env;
const { REFRESH_TOKEN } = process.env;
const OAuth = google.auth.OAuth2;
const clientID = CLIENT_ID; ;

const clientSecret = CLIENT_SECRET; ;
const redirectURI = REDIRECT_URI; ;
const refreshToken = REFRESH_TOKEN;
const OAuth2Client = new OAuth(clientID, clientSecret, redirectURI);
OAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});
const accessToken = OAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 456,
  secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2" ,
    user: "tomiafolayan@gmail.com",
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
    accessToken: accessToken,
  },
});

class EmailService {
  sendVerificationEmail(to, userId, userToken) {
    console.log("id", userId);
    console.log(to);
    const mailOptions = {
      from: "chatApp <tomiafolayan@gmail.com>",
      to: to,
      subject: "Email verification",
      text: "Email Verification",
      html: `<p>Dear user, please verify your email for chat app</p> <p>This <a href="http://localhost:3000/verify/${userId}/${userToken}">link<a/>will verify your email address</p><p>If you do not register on chatApp please ignore this mail</p>`,
    };
    transport.sendMail(mailOptions, function (err, result) {
      if (err) {
        console.log("error", err.message);
        return err;
      }
      console.log("message sent successfully", result.response);
      return result;
      
    });
  }
  sendPasswordResetEmail(to, userId, resetToken) {
    const mailOption = {
      from: "chatApp <tomiafolayan@gmail.com>",
      to: to,
      subject: "Password Reset",
      text: "Password Reset",
      html: `<p>Dear user, please reset your password for chat app</p> <p>This <a href="http://localhost:3000/reset/${userId}/${resetToken}">link<a/>will reset your password</p><p>If you do not register on chatApp please ignore this mail</p>`,
    };
    transport.sendMail(mailOption, function (err, result) {
      if (err) {
        return err;
      }
      return result;
    });
  }

  sendPasswordResetSuccessEmail(to){
    const mailOption = {
      from: "chatApp <tomiafolayan@gmail.com>",
      to: to,
      subject: "Password Reset Successfully",
      text: "Password Reset Successfully",
    };
    transport.sendMail(mailOption, function(err, result){
      if(err){
        return err;
      }
      return result;
    })
  }
}

module.exports = new EmailService();
