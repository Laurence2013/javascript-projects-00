/*
 * Standard built-in objects >> Array >> Array.prototype.every()
 * https://www.youtube.com/watch?v=urRO7OFrRB4
 */

const nums_00 = [1,2,3,4,5,6,7,8,9];
const nums_01 = [1,2,3,4,5,6,7,8,9,10];
const output = nums_01.every(num => num < 10);

console.log(output);
