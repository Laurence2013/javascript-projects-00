/* 
 * id: 03
 * description: getting an Object with arrays in it. Even the code in the comments, leave them!!!
 * */
const typeChecks = require('../js-type-checking-00/type-checking-00');
const courses = require('../type-of-objects-to-test/db-tests-01');

const test_00 = [];

const course_00 = courses.courses_00;
const course_01 = Object.keys(course_00).map(key => [Number(key), course_00[key]]);
const course_02 = course_01.find(elem_00 => {if (typeChecks.objCheck01(elem_00[1]) === true) return get_data_00(elem_00[1])});
const course_03 = course_01.find(elem_00 => {
  //console.log('12: ', elem_00);
  if(typeChecks.objCheck01(elem_00[1]) === true){
    //console.log('14: ',elem_00);
    elem_00.filter(data_00 => {if(data_00.type !== undefined) test_00.push(data_00.type)});
  }
});

function get_data_00(data_00){
  return [Object.values(data_00)]
}

//console.log(course_00);
//console.log('26: ',course_01);
//console.log(course_02);
console.log('27: ', test_00);
