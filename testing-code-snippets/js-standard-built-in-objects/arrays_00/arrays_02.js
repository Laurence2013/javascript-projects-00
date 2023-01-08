/*
 * Standard built-in objects >> Array >> Array.prototype.filter()
 * shallow copy, return new array, in filter any modification of word it is not returned
 */

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

const test_00 = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra';
  //arr[index + 1] = ' extra';
  //word.length < 6;
});
//const test_01 = words.filter((word, index, arr) => word.length < 6);
const test_02 = cities.filter((city, index, arr) => city.population <= 3000000)

console.log(test_02);
