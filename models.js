var mongoose = require('mongoose');

var twitterAuthSchema = new mongoose.Schema({
	// email: String,
	// content: String,
	// created: { type: Date, default: Date.now }
	
});

var twitterModel = mongoose.model('twitter',twitterAuthSchema);
exports.User = twitterModel;