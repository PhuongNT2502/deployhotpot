"use strict";

var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "phuongnt2502@gmail.com",
    pass: "dnas vhno yvup yrdg"
  }
});
module.exports = transporter;
