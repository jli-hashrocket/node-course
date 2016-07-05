var url = 'http://ipinfo.io';
var request = require('request');


module.exports = function (location) {
  request({
    url: url,
    json: true
  }, function(error, response, body){
    if (error) {
      location();
    } else {
      location(body);
    }
  });


};
