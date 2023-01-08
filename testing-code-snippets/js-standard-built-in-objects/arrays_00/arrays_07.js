/*
 * Standard built-in objects >> Array >> Array.prototype.group()
 */

// /media/lozza187/18AA-BFE84/courses/javascript/js-standard-library-built-in/arrays/array-prototype-group-00.ods
// Sheet: group-00
/*const inventory_00 = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];

const test_00 = inventory_00.group(elem => elem);

console.log(test_00);*/

// ID: 00
const countries = [
  {name: 'Canada', continent: 'AMER'},
  {name: 'United States of America', continent: 'AMER'},
  {name: 'India', continent: 'ASIA'},
  {name: 'Switzerland', continent: 'EUROPE'},
  {name: 'Germany', continent: 'EUROPE'},
]

const groupByContinent = countries.groupBy(country => { return country.continent});

console.log(JSON.stringify(groupByContinent, null, 2));
