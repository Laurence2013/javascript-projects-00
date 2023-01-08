/*
 * Standard built-in objects >> Array >> Array.prototype.forEach()
 */

const arr_00 = [1,2,3,4,5];
const arr_01 = [6,7,8,9,10];
const arr_02 = (callback, num) => callback(num * 100);

function func_00(arr){
  return arr.map(elm_00 => elm_00 * 2);
}
function func_01(...arr){
  const arr_retrn = [];
  arr.forEach(dat_00 => dat_00.map(elm_01 => arr_retrn.push(elm_01 * 10)));

  return arr_retrn;
}
const func_02 = function(func){
  return (function(callback, arr){
    arr.map(elem => func(callback, elem));
  })
}
const func_03 = (func) => (callback, arr) => arr.map(elem => func(callback, elem));

const test_00 = func_00(arr_00);
const test_01 = func_01(arr_00, arr_01);
const test_02 = func_02(arr_02);
const test_03 = func_03(arr_02);

test_02(console.log, [1,2,3,4,5, 66]);
