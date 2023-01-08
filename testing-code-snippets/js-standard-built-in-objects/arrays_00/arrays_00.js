/*
 * Standard built-in objects >> Array >> Array.prototype.of()
 */

const arr_00 = [1,2,3];
const arr_01 = [4,5,6];
const arr_02 = [7,8,9];

const test_00 = Array.of(arr_00, arr_01, arr_02);
const test_01 = test_00.flatMap(num => num);
const test_02 = test_01.map(num => 2 * num);

console.log(test_01);
console.log(test_02);
