 var models = require("../models");

exports.view = function(req, res) {


    models.theNews.find({}, function(err, stuff){
        if (!err){
            // console.log(stuff);

            var data = {'newsfeed': stuff};
            //console.log(data);
            res.render('chat', data);
        } else { console.log(err);}
    });


};
