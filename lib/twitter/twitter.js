var util = require('util');
var twitter = require('twitter');
var gtUtil = require('../util/util.js');

var Server = function() {
  var configFile = __dirname + '/config.json';
  
  var setup = function(config) {
    console.log(config);
    this.config = config;
    this.twit = new twitter(config);
  };
  
  gtUtil.readJSON(configFile, setup.bind(this));
};

Server.prototype.listen = function(callback) {
  this.twit.stream('statuses/sample', function(stream) {
    stream.on('data', callback);
  });
};

exports.Server = Server;
