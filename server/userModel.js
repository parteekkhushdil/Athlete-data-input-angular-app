var mongoose = require('mongoose');
var userSchema = require("./userSchema");
var db = require("./dbConnection");
var userModel = mongoose.model("userModel", userSchema);
userModel.createAthleteData = createAthleteData;
userModel.getAllAthleteData = getAllAthleteData;
module.exports = userModel;

function createAthleteData(data) {
   return userModel.create(data)
}

function getAllAthleteData(){
    return userModel.find({})
}

