var mongoose = require('mongoose');

var twitterAuthSchema = new mongoose.Schema({
	"twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photos": [String]

}
// , {
// 	collection: 'User'
// }
);

exports.User = mongoose.model('twitterUser',twitterAuthSchema);