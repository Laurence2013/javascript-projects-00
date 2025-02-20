/*
	desc-00: Objects in JavaScript, how to define them, create them and even how to interweave them. 
	desc-01: In Javascript how many ways can you define and create objects?
	desc-02: Tags js-interweave, js-object-literals, es6-extend
	desc-03: Extending an Object without using ES6 classes
	desc-04: Part 3
	desc-05: Using Object.create()
	desc-06: How would you use an Object.create() without using the ES6 extend?
	goal:
	line-code-added:
*/

let animalSpeak = {
	dogSpeak: function(){
		console.log('Woof');
	},
	catSpeak: function(){
		console.log('Meow');
	}
};

let myDog = Object.create(animalSpeak);
let myCat = Object.create(animalSpeak);

myDog.name = 'Rex';
myDog.dogSpeak();
console.log(myDog.name);

console.log('---');

myCat.name = 'Kitty';
myCat.catSpeak();
console.log(myCat.name);
