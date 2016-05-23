var person = {
  name: 'Jeff',
  age: 35
};
var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('Challenge Area');

var animal = '{"name": "Peter"}';

// convert to js object
var animalObject = JSON.parse(animal);
console.log(animalObject);
// add age prop
animalObject.age = 2;
console.log(animalObject);
// convert back to JSON
var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
// logout

