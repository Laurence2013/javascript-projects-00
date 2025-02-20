/*
	desc-00: A C# class is more or less equivalent to a JavaScript constructor function and prototype pair, 33/424
	desc-01: Tags js-constructor-fn, js-prototype,
	goal:
	line-code-added:
*/

function Minion(name, hp){
	this.name = name;
	this.hp = hp;
}
Minion.prototype.toString = function(){
	return this.name
}

var orc = new Minion('orc', 100);

console.log(orc);
console.log(orc.toString());
console.log('orc is a Minion: ', orc instanceof Minion);
