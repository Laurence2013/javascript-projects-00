/*
 * Standard built-in objects >> Array >> Array.prototype.reduceRight()
  * */

const waterfall_00 = (...functions) => (callback, ...args) =>
  functions.reduceRight((composition, fn) => (...results) => fn(composition, ...results), callback)(...args);

const waterfall_01 = (...functions) => (callback, ...args) =>
  functions.reduceRight((composition, fn) => (...args) => fn(composition, ...args), callback)(...args);

const waterfall_02 = (...functions) => (callbackk, args) =>
  functions.reduceRight((composition, fn) => (args) => fn(composition, args), callbackk)(args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5)
}
const add6 = (callback, x) => {
  return callback(x * 100);
}

const computation = waterfall_00(add6);

computation(console.log, 5);
