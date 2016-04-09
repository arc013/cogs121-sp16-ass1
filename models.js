var mongoose = require('mongoose');

var twitterAuthSchema = new mongoose.Schema({
	// email: String,
	// content: String,
	// created: { type: Date, default: Date.now }

}, {
	collection: 'User'
});

var twitterModel = mongoose.model('twitterUser',twitterAuthSchema);
exports.User = twitterModel;