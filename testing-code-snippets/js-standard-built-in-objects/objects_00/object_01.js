/*
 * Js-docs: e.g. Standard built-in object > Object > Object.defineProperties()
 * Description: 
 * Error Notes:
 * Passed Notes:
 * Link: 
 * Evernote: ''
 */

const object1 = {};

Object.defineProperties(object1, {
	property1: {
		value: 43
	},
	property2: {
		value: 22
	}
});

console.log(object1.property1);
