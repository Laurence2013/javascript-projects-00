/*
 * Standard built-in objects >> Array >> Array.prototype.flat()
 */

const arr_00 = [1, 2, [3, 4, [5, 6]]];
const arr_01 = [1, 2, [3, 4, [5, [6]]]];
const arr_02 = [1, 2, 3, 4];

// ID: 00
/*function flatDeep(arr, d = 1){
  if(!Array.isArray(arr)){
    return arr;
  }
  if(d > 0){
    return arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), []);
  }else{
    return arr.slice();
  }
}
console.log(flatDeep(arr_01, Infinity));
*/

// ID: 01
const test_00 = arr_01.flat(Infinity);
console.log(test_00);
