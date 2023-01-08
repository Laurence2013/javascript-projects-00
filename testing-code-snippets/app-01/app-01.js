/* 
 * id: 01
 * description: getting an Object.
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses = require('../type-of-objects-to-test/db-tests-00');

const courses_00 = courses.fCourseById(1);
const courses_01 = courses.courses;

console.log(typeChecks.arrCheck(courses_01));
console.log(typeChecks.objCheck(courses_01));

Object.values(courses_01).forEach(key => {
  //console.log(courses_01[1]);
  console.log(courses_01[1].titles);
})
