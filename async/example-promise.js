// function doWork (data, callback) {
//   callback('done');
// }

// function doWorkPromise (data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       reject('everything is broken!');
//     },1000);
//     // reject({
//     //   error: 'something bad happened'
//     // });
//   });
// }

// doWorkPromise('some data').then(function (data) {
//   console.log(data);
// }, function (error) {
//   console.log(error);
// });
var request = require('request');

function getWeather (location) {
  var encodedLocation = encodeURIComponent(location);
  return new Promise(function (resolve, reject){
    if (!location) {
      return reject('No location provided');
    }

    var url = 'http://api.openweathermap.org/data/2.5/weather?appid=2cc14f1ea516b96a82fbede67ca1f029&q=' + encodedLocation + '&units=imperial';

    request({
      url: url,
      json: true
    }, function(error, response, body){
      if (error) {
        reject('Unable to fetch weather');
      } else {
        // console.log(JSON.stringify(body, null, 4));
        resolve("It's " + body.main.temp + " in " + body.name);
      }
    });
  });
}

getWeather('washington, dc').then(function (currentWeather){
  console.log(currentWeather);
}, function(error) {
  console.log(error);
});
