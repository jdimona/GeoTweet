var fs = require('fs');
var q = require('q');

exports.readAsyncJSON = function(path) {
  var data = {};
  var read = q.defer();
  
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      read.reject(new Error(err));
    } else {
      read.resolve(JSON.parse(data));
    }
  });

  return read.promise;
};

exports.readSyncJSON = function(path) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
};
