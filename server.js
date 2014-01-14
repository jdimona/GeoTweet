var nodeStatic = require('node-static');
var gtUtil = require('./lib/util/util.js');
var twitter = require('./lib/twitter/twitter.js');

var configFile = './config.json';
var config = gtUtil.readSyncJSON(configFile);

var twitterServer = new twitter.Server(config);

twitterServer.listen(function(data) {
  console.log(data);
});

var fileServer = new nodeStatic.Server('./public');
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    fileServer.serve(request, response);
  }).resume();
}).listen(2000);
