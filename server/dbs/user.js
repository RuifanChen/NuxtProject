const mongoose = require("mongoose");

var userScheme = mongoose.Schema({
    username: String,
    password:String,
    email: String,
});

var users = mongoose.model("users", userScheme)

module.exports = users;