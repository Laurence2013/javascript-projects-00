/* 
 * id: 06
 * description: 
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses_00 = require('../type-of-objects-to-test/db-tests-00');
const courses_01 = require('../type-of-objects-to-test/db-tests-01');

const totalVal  = 0;
const test_00   = Object.values(courses_01.some_obj_00).reduce((prev, curr) => prev + curr, totalVal);
const test_01   = Object.values(courses_01.some_obj_00).reduce((prev, curr) => prev - curr, totalVal);
const test_02   = Object.values(courses_01.some_obj_00);
const test_02a  = Object.values(test_02);

const test_03   = Object.entries(courses_01.some_obj_01);
console.log(test_03);

//console.log(test_02a[0] + test_02a[1]);

