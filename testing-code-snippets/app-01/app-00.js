/* 
 * ID: 00
 * Description: Pushing the whole Object into an Array.
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses = require('../type-of-objects-to-test/db-tests-00');

const courses_00 = courses.fCourseById(1);
const courses_01 = courses.courses;

console.log(typeChecks.arrCheck(courses_01));
console.log(typeChecks.objCheck(courses_01));

const obj_00 = []

Object.values(courses_01).forEach(key => {
  obj_00.push({key, courses_01});
})

/*obj_00.map(data => {
  console.log(typeChecks.objCheck(data));
});*/

console.log(obj_00);
