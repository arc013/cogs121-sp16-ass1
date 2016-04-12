var mongoose = require('mongoose');

var twitterAuthSchema = new mongoose.Schema({
	"twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photos": [ {"value": String } ]

});
var NewsFeedSchema= new mongoose.Schema({
    "user": String,
    "message": String,
    "posted": Date,
    "photos": [ {"value": String } ]
});

exports.theNews=mongoose.model('NewsFeed', NewsFeedSchema);

exports.User = mongoose.model('twitterUser',twitterAuthSchema);