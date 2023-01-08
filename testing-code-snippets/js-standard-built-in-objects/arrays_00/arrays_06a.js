/*
 * Standard built-in objects >> Array >> Array.prototype.forEach()
 * js reduce an array
 */
const odd = [1,3,5,[6,7]];
const combined = [2,4,6, ...odd];

console.log(combined);
console.log();
console.log('----------------------------------------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------------------------------------');
console.log();

// /media/lozza187/18AA-BFE84/courses/javascript/js-standard-library-built-in/arrays/array-prototype-for-each.ods
// Sheet: for-each-00
const flatten_00 = (arr) => {
  const result = [];
  arr.forEach((item) => {
    //console.log('17: ', item)
    if (Array.isArray(item)) {
      console.log('19: ', item)
      result.push(...flatten_00(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

// /media/lozza187/18AA-BFE84/courses/javascript/js-standard-library-built-in/arrays/array-prototype-for-each.ods
// Sheet: for-each-01
const flatten_01 = (arr) => {
  const result = [];
  arr.forEach((item) => {
    console.log('29: ', item)
    if (Array.isArray(item)) {
      result.push(flatten_01(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

console.log(flatten_00(nested));
