/*
 * Standard built-in objects >> Array >> Array.prototype.reduceRight()
  * */

const calc_00 = function(cb, num){
  const result = cb(num);
  return result;
}
const test_00 = function(num){
  return num * 10;
}
const result_00 = calc_00(test_00, 5);

console.log(result_00);
// -------------------------------------------------------------------
// -------------------------------------------------------------------
const calc_01 = (...functions) => (callback, ...args) =>
  functions.reduceRight((composition, fn) => (...results) => fn(composition, ...results), callback)(...args);

const calc_03 = function(...functions){
  return function(callback, ...args){
    functions.reduceRight((composition, fn) => {
      return function(...results){
        console.log(results);
      }
    }, callback)
  }
}
const calc_02 = (...functions) => 
  (callback, ...args) => 
    functions.reduceRight((composition, fn) => (...results) => fn(composition, ...results), callback)(...args);

const randInt_00 = (max) => Math.floor(Math.random() * max);
const add5 = (callback, x) => {
  setTimeout(callback, randInt_00(10), x + 5);
};
const result_01 = calc_03(add5);

result_01(console.log, 5);

