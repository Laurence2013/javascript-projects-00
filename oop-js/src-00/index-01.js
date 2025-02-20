/*
	desc-00: We can mimic classical inheritance by defining a new “class” Wizard and making it inherit from Minion, 35/424
	desc-01: Tags js-classical-inheritance
	goal:
	line-code-added:
*/

function Minion(name, hp){
	this.name = name;
	this.hp = hp;
}
Minion.prototype.toString = function(){
	return this.name;
}

var orc = new Minion('orc', 100);

function Wizard(name, element, hp, mana){
	Minion.call(this, name, hp);
	this.element = element;
	this.mana = mana;
}

Wizard.prototype = Object.create(Minion.prototype);
Wizard.prototype.constructor = Wizard;

Wizard.prototype.castsSpell = function(spell, target){
	console.log(this + ' casts ' + spell + ' on ' + target);
	this.mana -= spell.mana;
	spell(target);
};

Wizard.prototype.toString = function(){
	return Minion.prototype.toString.apply(this, arguments) + ', the ' + this.element + ' Wizard';
}

var gandalf = new Wizard('Gandalf', 'Grey', 50, 50);

console.log('Gandalf is a Wizard: ' + (gandalf instanceof Wizard));
console.log('Gandalf is a Minion: ' + (gandalf instanceof Minion));
console.log(gandalf.toString());

var lightningSpell = function(target){
	console.log('A bolt of lightning electrifies ' + target + '(-10hp)');

	target.hp = -10;
};
lightningSpell.mana = 5;
lightningSpell.toString = function(){ return 'lightning spell' };

gandalf.castsSpell(lightningSpell, orc);
