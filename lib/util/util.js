var fs = require('fs');

exports.readJSON = function(path, callback) {
  var data = {};
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    callback(JSON.parse(data));
  });
};
