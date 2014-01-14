var twitter = require('twitter');
var gtUtil = require('../util/util.js');

var Server = function(config) {
  this.config = config;
  this.twit = new twitter(config);
};

Server.prototype.listen = function(callback) {
  this.twit.stream('statuses/sample', function(stream) {
    stream.on('data', callback);
  });
};

exports.Server = Server;
