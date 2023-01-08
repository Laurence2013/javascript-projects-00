/*
 * Standard built-in objects >> Array >> Array.prototype.flat()
 * js reduce an array
 */

const arr_00 = [1, 2, [3, 4, [5, 6]]];
const arr_01 = [1, 2, [3, 4, [5, [6]]]];
const arr_02 = [1, 2, 3, 4];


function flatDeep(arr, d = 1){
  if(!Array.isArray(arr)){
    return arr;
  }
  if(d > 0){
    return arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), []);
  }else{
    return arr.slice();
  }
  //return d > 0 ? arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), []) : arr.slice();
}

console.log(flatDeep(arr_01, Infinity));
//console.log(flatDeep(arr_00));
console.log();
console.log('----------------------------------------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------------------------------------');
console.log();

const arr_03 = [1,2,3,[4,5]];

const test = arr_03.reduce(function(accumulate, value){
  //console.log(accumulate);
  return accumulate.concat(value);
}, []);

console.log(test);
