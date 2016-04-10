var mongoose = require('mongoose');

var twitterAuthSchema = new mongoose.Schema({
	"twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photos": [ {"value": String } ]

});

exports.User = mongoose.model('twitterUser',twitterAuthSchema);