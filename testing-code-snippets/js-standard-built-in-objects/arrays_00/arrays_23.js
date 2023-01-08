/*
 * standard built-in objects >> array >> array.prototype.sort()
 */

const numberArray = [40, 1, 5, 200];
const numericStringArray = [80, 9, 700];
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

function compareNumbers(a, b) {
  return a - b;
}

const test_00 = numberArray.sort((compareNumbers) => (...nums) => nums * 2);
const test_01 = numberArray.sort(compareNumbers);
const test_02 = items.sort((a, b) => a.value - b.value);
const test_03 = items.sort((a, b) => a.name.localeCompare(b.name));

console.log(test_03);
