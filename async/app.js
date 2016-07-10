var weather = require('./weather.js');
var location = require('./location.js');

// setup yargs to have a --location or -l arguments
var argv = require('yargs')
    .command('location', 'Get location for weather',function(yargs){
      yargs.options({
        location: {
          demand: true,
          alias: 'l',
          description: 'Enter location for weather',
          type: 'string'
        }
      }).help('help');
    })
    .command('get', 'some description', function(yargs){

    })
    .help('help')
    .argv;

var retrievedLocation = argv.l;

if (retrievedLocation) {
  weather(retrievedLocation, function( currentWeather){
      console.log(currentWeather);
    });
} else {
  console.log('no location given');
  location(function(location){
    if (!location){
      console.log('Unable to guess location');
      return;
    } else {
      weather(location.city, function( currentWeather){
      console.log(currentWeather);
    });
    }
  });
}
