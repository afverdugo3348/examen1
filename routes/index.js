var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");


var url ="mongodb://localhost:27017/test";


var GitHubApi = require("github");
 

router.get('/followers/:user', function(req, res, next) {

mongodb.connect(url, (err,db)=>{
		if(err) throw err;

		var registro = db.collection("test");
		var reg = {"user":req.params.user};
		registro.insertOne(reg);
		});


    var github = new GitHubApi({});

// check our rate-limit status
// since we're unauthenticated the limit is 60 requests per hour

    github.users.getFollowersForUser({
        username: req.params.user
    }, function(err, data) {
    	console.log(JSON.stringify(data));
        res.json(data)
    });
});


router.get('/followers/registro', function(req, res) {


	getReg((regs)=>{

		res.json(regs);
	})
});

function getReg(callback){
	mongodb.connect(url, (err,db)=>{
		if(err) throw err;

		var regs = db.collection("test");
		labs.find({}).toArray((err2,labs)=>{
			if(err2) throw err2;

			callback(regs);
		});
	});

};
 
// TODO: optional authentication here depending on desired endpoints. See below in README.



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
