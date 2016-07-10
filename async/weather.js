var request = require('request');

module.exports = function (location, callback) {
  //move url into here
  var encodedLocation = encodeURIComponent(location);
  if (!location) {
    return callback('No location provided');
  }

  var url = 'http://api.openweathermap.org/data/2.5/weather?appid=2cc14f1ea516b96a82fbede67ca1f029&q=' + encodedLocation + '&units=imperial';

  request({
    url: url,
    json: true
  }, function(error, response, body){
    if (error) {
      callback('Unable to fetch weather');
    } else {
      // console.log(JSON.stringify(body, null, 4));
      callback("It's " + body.main.temp + " in " + body.name);
    }
  });


};
