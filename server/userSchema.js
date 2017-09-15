var mongoose = require('mongoose');
console.log('user schema');
var userSchema = mongoose.Schema({
    name: String,
    dob: String,
    nationality: String,
    location: String,
    association: String,
    team: String,
    gender: String,
    sport: String,
    about: String,
    interests: String,
    charities: String,
    socialMedia : {
            Facebook: String,
            Twitter: String,
            Instagram: String,
            Youtube: String,
            Twitch: String,
            Snapchat: String
        },
    pets: String,
    drinkAlcohol: String,
    married: String
    
},{collection:"athleteData"});

module.exports = userSchema;
