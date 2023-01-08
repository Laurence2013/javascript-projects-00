/*
 * Standard built-in objects >> Array >> Array.prototype.join()
 */

const users = [
  {name: "Joe", age: 22},
  {name: "Kevin", age: 24},
  {name: "Peter", age: 21}
];

// Calling join() on non-array objects
// The join() method reads the length property of this and then accesses each integer index.
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};

const test = users.map(elem => elem.name).join(', ');
const test_00 = [...test];

console.log(test);
//console.log(test_00);

// 2,3,4
console.log(Array.prototype.join.call(arrayLike));
// 2.3.4
console.log(Array.prototype.join.call(arrayLike, "."));
