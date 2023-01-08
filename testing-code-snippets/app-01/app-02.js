/* 
 * id: 02
 * description: getting an Object with arrays in it. Even the code in the comments, leave them!!!
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses = require('../type-of-objects-to-test/db-tests-01');

const course_00 = courses.courses_00;
const course_01 = courses.courses_00[3].type;
const course_02 = Object.keys(courses.courses_00);
const course_03 = Object.entries(courses.courses_00);

//const find_00 = course_03.forEach(data => console.log(data));
const find_01   = course_03.find(elem => elem[0] === '5');
const find_01a  = find_01.find(elem => elem.type === 'home');

const find_02   = course_03.find(elem => elem[0] === '3');
const find_02a  = find_02.find(elem => {return elem.type});
const find_02b  = find_02.find(elem => elem.type);
const find_02c  = find_02.find(elem => {
  //Object.keys(elem.type).forEach(elem => console.log(elem));
});
const find_02d  = Object.values(find_02b).forEach(elem => console.log(elem.home));

const checkType_00 = typeChecks.arrCheck(courses);
const checkType_01 = typeChecks.arrCheck(courses.courses_00[2]);

//console.log(course_03);
