var nodeStatic = require('node-static');
var twitter = require('./lib/twitter/twitter.js');


var twitterServer = new twitter.Server();
twitterServer.listen(function(data) {
  console.log(data);
});


var fileServer = new nodeStatic.Server('./public');
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    fileServer.serve(request, response);
  }).resume();
}).listen(2000);
