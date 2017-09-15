var connection = 'Enter mongohost name here';
var mongoose = require('mongoose');
var db = mongoose.connect(connection);
module.exports = db;