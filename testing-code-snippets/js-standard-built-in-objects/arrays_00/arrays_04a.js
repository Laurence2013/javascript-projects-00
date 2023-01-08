/*
 * Standard built-in objects >> Array >> Array.prototype.reduce()
 * js reduce an array
 */

// ID: 00
/*const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;
const result = expenses.reduce((accumulateValue, currentValue) => accumulateValue - currentValue, salary);

console.log(result);*/

// ID: 01
/*const getMax = (a,b) => Math.max(a,b);
const test_00 = [1, 100].reduce(getMax);

console.log(test_00);*/

// ID: 02
/*const arr_00 = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index){
  const returns = accumulator + currentValue;

  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`);

  return returns;
}
arr_00.reduce(reducer);*/

// ID: 03
/*const test_01 = [15, 16, 17, 18, 19].reduce((accumulator, currentValue) => accumulator + currentValue, 10);
console.log(test_01);*/

// ID: 04
/*const objects = [{x: 1}, {x: 2}, {x: 3}];
const sum = objects.reduce((accumulator, currentValue) => accumulator + currentValue.x, 0);
console.log(sum);*/

// ID: 05
/*const flattened = [[1, 2], [3, 4], [5, 6]];
const test_00 = flattened.reduce((accum, arrs) => accum = accum.concat(arrs));
console.log(test_00);*/

// ID: 06-00
/*const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const test_00 = names.reduce((accum, name, index) => index);
console.log(test_00);*/

// ID: 06-01
/*const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {...allNames, [name]: 'hello'};
}, {});
console.log(countedNames);*/

// ID: 06-02
/*const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {...allNames, [name]: currCount + 1};
}, {});
console.log(countedNames);*/

// ID: 07
const people = [
  {name: "Alice", age: 21},
  {name: "Jane", age: 20},
  {name: "Max", age: 20}
]

function groupBy(objArray, prop){
  return objArray.reduce((acc, obj) => {
    const key = obj[prop];
    //console.log(acc[key]);
    const curGroup = acc[key] ?? [];
    //console.log(curGroup);
    console.log({...acc, [key]: key});

    return {...acc, [key]: key};
    //{...acc, [key]: [...curGroup, obj]};
  }, {});
}

const groupedPeople = groupBy(people, 'age');
//console.log(groupedPeople);
