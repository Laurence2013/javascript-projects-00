/*
 * Standard built-in objects >> Array >> Array.prototype.reduce()
 * js reduce an array
 */

const message = ['Javascript ', 'is ', 'fun'];

const test = message.reduce((accum, val) => accum + val);

console.log(test);
console.log();
console.log('----------------------------------------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------------------------------------');
console.log();

const people = [
  {name: 'John', age: 21},
  {name: 'Carl', age: 22},
  {name: 'Mark', age: 32}
]

function groupBy(objArray, property){
  return objArray.reduce((accum, curr) => {
    let key = curr[property];

    if(!accum[key]){
      accum[key] = [];
    }
    accum[key].push(curr);
    return accum;
  }, {});
};

let groupByPeople = groupBy(people, 'age');
console.log(groupByPeople);
