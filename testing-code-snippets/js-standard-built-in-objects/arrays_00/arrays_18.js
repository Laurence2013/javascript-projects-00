/*
 * Standard built-in objects >> Array >> Array.prototype.reduceRight()
  * */

const arr_00 = [[0, 1], [2, 3], [4, 5]];
const arr_01 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
  * If arr_01 is used will .concat() then there will be an error because when reduceRight returns its a value
  * */

const res_00 = arr_01.reduceRight((accum, val) => accum.concat(val));

console.log(res_00);
