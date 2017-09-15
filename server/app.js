console.log("hello from server");
var app = require('../express');
var userModel = require('./userModel');
var addAthleteData = function(req,res) {
    var data = req.body;
    userModel.createAthleteData(data)
        .then(function (user) {
            res.json(user);
        })
};   

var getAllAthleteData = function (req, res){
    userModel.getAllAthleteData().then(function(data){
        res.json(data);
    })
}
function routes(app) {
app.route('/api/AthleteData')
    .post(addAthleteData)
    .get(getAllAthleteData);
};
routes(app);

