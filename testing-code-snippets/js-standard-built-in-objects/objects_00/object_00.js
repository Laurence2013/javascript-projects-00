/*
 * Js-docs: e.g. Standard built-in object > Object > Object.create()
 * Description: Understanding Object.create()
 * Error Notes: [
 * printName_00: variables are undefined, Hello my first name is undefined and my last name is undefined
 * printName_01: ReferenceError: fName_00 is not defined
 * printName_02: variables are undefined, Hello my first name is undefined and my last name is undefined
 * printName_03: Hello my first name is Marcus and my last name is Aurelius, works!
 * ]
 * Passed Notes: [
 *	- At line 31 printName_03 works
 * ]
 * Link: 
 * Evernote: ''
 */

const person = {
	fName_00: 'Lorenzo',
	lName_00: 'Garcia',
	printName_00: () => { return `Hello my first name is ${this.fName_00} and my last name is ${this.lName_00}` },
	printName_01: () => { return `Hello my first name is ${fName_00} and my last name is ${lName_00}` },
	printName_02: () => { return `Hello my first name is ${this.fName_01} and my last name is ${this.lName_01}` },
	printName_03: function(){ return `Hello my first name is ${this.fName_01} and my last name is ${this.lName_01}` } 
}

const getPerson = Object.create(person);

getPerson.fName_01 = 'Marcus';
getPerson.lName_01 = 'Aurelius';

console.log(getPerson.printName_03());
console.log(getPerson.fName_00);
