const nodemailer = require("node-mailer")
const {google} = require("googleapis")
const OAuth = google.auth.OAuth2
const clientID =
  "195543117022 - kgqkcsm75qn17hpj41ob6g6cf3iudbko.apps.googleusercontent.com";

const clientSecret = "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";
const redirectURI = "https://developers.google.com/oauthplayground/";

const transport = nodemailer.createTransport({service: "gmail", auth:{
    type: OAuth
} , })



class EmailService{

}