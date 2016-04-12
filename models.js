var mongoose = require('mongoose');

var twitterUserSchema = new mongoose.Schema({
	"twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photos": [ {"value": String } ]

}, {
	collection: "userdata"
});

var courseSchema = new mongoose.Schema({
	"name": String,
    "prof": String,
    "info": String,
    "number": Number

}, {
	collection: "courses"
});

var commentSchema = new mongoose.Schema({
	"username": String,
    "course_id": String,
    "text": String,
    "timestamp": { type: Date, default: Date.now }

}, {
	collection: "comments"
});

var courseRatingSchema = new mongoose.Schema({
    "course_id": String,
    "rating": String

}, {
	collection: "overallratings"
});

exports.User = mongoose.model('twitterUser',twitterUserSchema);
exports.Course = mongoose.model('courseDetail',courseSchema);
exports.Comment = mongoose.model('commentDetail',commentSchema);
exports.OverallRating = mongoose.model('overallCourseRating',courseRatingSchema);