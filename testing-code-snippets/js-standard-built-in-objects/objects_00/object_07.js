const person = {
	isHuman: false,
	printIntro: function(){
		console.log(`My name is ${this.name}, am I a human ${this.isHuman}`);
	}
}

const me = Object.create(person);

me.name = 'Lozza';
me.isHuman = true;

console.log(me.printIntro());
