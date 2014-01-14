var static = require('node-static');
var twitter = require('./lib/twitter/twitter.js');

server = twitter.createServer();
server.listen(function(stream) {
  stream.on('data', function(data) {
    console.log(data);
  });
});

var fileServer = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(3000);
