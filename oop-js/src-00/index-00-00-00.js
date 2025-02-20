/*
	desc-00: Objects in JavaScript, how to define them, create them and even how to interweave them. 
	desc-01: In Javascript how many ways can you define and create objects?
	desc-02: Tags js-interweave, js-object-literals, es6-extend
	desc-03: Extending an Object without using ES6 classes
	desc-04: Part 2
	desc-05: Using constructor function
	desc-06: How would you use a constructor function without using the ES6 extend?
	goal:
	line-code-added:
*/

function Animal(name, type){
	this.name = name;
	this.type = type;
}
Animal.prototype.speak = function(){
	console.log('Generic animal sound');
}
function Dog(name, type){
	Animal.call(this, name);
	this.type = type;
}
Dog.prototype.speak = function(){
	console.log('Woof');
}

let myDog00 = new Dog('Rex');
let myDog01 = new Dog('Gero', 'German Shepherd');

myDog00.speak();
console.log(myDog00.name);

myDog01.speak();
console.log(myDog01.name);
console.log(myDog01.type);
