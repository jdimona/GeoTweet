function Twitterserver() {
}

//url handling
Twitterserver.prototype.index = function(req, res) {
	console.log('user viewing map page')
	
	res.render('index', { title: "Geotweet - Map" });
};


//socket.io config
var io = require('socket.io');
var TwitterStream = require('./twitter_stream');
var username = 'john_dimona',
    password = 'sluvg9kh';
var twitter_stream = new TwitterStream(username, password);

Twitterserver.prototype.init = function(app) {
	io = io.listen(app);
	twitter_stream.start();
	
	io.on('connection', function(client) {
		twitter_stream.attach(client);
		
		client.on('disconnect', function () {
	    twitter_stream.detach(client);
	  });
	
		client.on('timeout', function () {
	    twitter_stream.detach(client);
	  });
	});
	
};




module.exports = Twitterserver;

