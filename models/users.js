var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
//var userRouter = require("../models/user");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
