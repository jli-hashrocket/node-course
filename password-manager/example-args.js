var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && argv.firstname !== undefined && argv.lastname !== undefined) {
  console.log('Hello ' + argv.firstname + ' ' + argv.lastname + '!');
}else if (command === 'hello' && argv.firstname !== undefined){
  console.log('Hello ' + argv.firstname + '!');
}else if (command === 'hello'){
  console.log('Hello world!');
}
