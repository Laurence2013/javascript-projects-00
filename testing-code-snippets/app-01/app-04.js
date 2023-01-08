/* 
 * id: 04
 * description: getting an Object with arrays in it. Even the code in the comments, leave them!!!
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses_00 = require('../type-of-objects-to-test/db-tests-00');
const courses_01 = require('../type-of-objects-to-test/db-tests-01');

const test_00 = [];

const course_00 = Object.entries(courses_00);
const course_01 = Object.values(course_00[0]);

/*
 * Array is true
 * Arr, Obj
 * const test_00 = typeChecks.arrCheck(course_01);
console.log(test_00);
*/

/*
 * Object is true
 * Obj
 * const test_01 = typeChecks.objCheck01(course_01[1]);
console.log(test_01);
*/

//console.log(course_01[1]);

/*const course_02 = Object.entries(course_01[1]).forEach(elem_00 => {
  console.log(elem_00[1].titles.description);
});*/
const course_03 = Object.entries(course_01[1]).filter(elem_00 => {

  test_00.push(elem_00[1].category == 'BEGINNER');

});
console.log(test_00);


