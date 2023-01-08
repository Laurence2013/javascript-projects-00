/*
 * Standard built-in objects >> Array >> Array.of()
 */

function NotArray(len){
  console.log('NotArray called with length', len);
}

console.log(Array.of.call(NotArray, 1,2,3));
