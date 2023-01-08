/* 
 * id: 05
 * description: getting an Object with arrays in it. Even the code in the comments, leave them!!!
 * Line 16 and 17 are the same array is an object so you can use the reduce function
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses_00 = require('../type-of-objects-to-test/db-tests-00');
const courses_01 = require('../type-of-objects-to-test/db-tests-01');

console.log(courses_01.some_obj_02);
console.log(Object.values(courses_01.some_obj_02));

const inValue = 0;

const test_00 = Object.values(some_obj_00).filter(value => value > 5);
const test_01 = Object.keys(some_obj_00).filter(name => name === 'mark');
//const test_02 = Object.values(courses_01.some_obj_02.reduce((prev, curr) => prev + curr, inValue);
const test_02 = courses_01.some_obj_02.reduce((prev, curr) => prev + curr, inValue);

console.log(test_02);
