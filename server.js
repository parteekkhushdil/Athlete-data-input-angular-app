var app = require('./express');
var express = app.express;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/'));

require('./server/app');
app.listen(3000,function () {
    console.log("Running application on port 3000");
});