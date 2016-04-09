var mongoose = require('mongoose');

var twitterAuthSchema = new mongoose.Schema({
	"twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photos": [String]

}, {
	collection: 'User'
});

var twitterModel = mongoose.model('twitterUser',twitterAuthSchema);
exports.User = twitterModel;