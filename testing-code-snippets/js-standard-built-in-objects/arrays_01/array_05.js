/*
 * Standard built-in objects >> Array >> Array.prototype.find()
 */
const arr_00 = [
	{'id':'00','foo':'bar00'},
	{'id':'01','foo':'bar01'},
	{'id':'02','foo':'bar02'},
	{'id':'03','foo':'bar03'}
]

const test_00 = arr_00.find(elem => elem.id === '03').foo;

console.log(test_00);
