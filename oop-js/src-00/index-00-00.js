/*
	desc-00: Objects in JavaScript, how to define them, create them and even how to interweave them. 
	desc-01: In Javascript how many ways can you define and create objects?
	desc-02: Tags js-interweave, js-object-literals, es6-extend
	desc-03: Extending an Object without using ES6 classes
	desc-04: Part 1
	goal:
	line-code-added:
*/

class Animal {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	makeSound(){
		console.log('Generic animal sound');
	}
}
class Dog extends Animal {
	constructor(name){
		super(name, 'dog');
	}
	makeSound(){
		console.log('Woof!');
	}
}
class Cat extends Animal {
	constructor(name){
		super(name, 'cat');
	}
	makeSound(){
		console.log('Meow');
	}
}

let myDog = new Dog('Buddy');
let myCat = new Cat('Kitty');

myCat.makeSound();
console.log(myCat.name);
