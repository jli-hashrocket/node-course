// function doWork (shouldFail) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       if (typeof shouldFail === 'boolean' && shouldFail === true){
//         reject('error message');
//       } else {
//         resolve('success');
//       }
//     }, 1000);
//   });
// }

// doWork().then(function(message){
//   console.log(message);
//   return doWork(true);
// }).then(function (message) {
//   console.log(message);
// }).catch(function (error) {
//   console.log(error);
// });
var url = 'http://ipinfo.io';
var request = require('request');

function getLocation(location){
  //return promise
    //resolve('washingotn, dc');
  return new Promise( function(resolve, reject){
    request({
      url: url,
      json: true
    }, function(error, response, body){
      if (error) {
        reject('Unable to get location');
      } else {
        resolve(location);
      }
    });

  });
}

function getWeather(location){
  // return promise
  //  resolve('It's 78 in location)
  return new Promise( function(resolve, reject) {
    var encodedLocation = encodeURIComponent(location);

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

getLocation('washington, dc').then(function(location){
  return getWeather(location)
}).then(function(currentWeather){
  console.log(currentWeather);
});
