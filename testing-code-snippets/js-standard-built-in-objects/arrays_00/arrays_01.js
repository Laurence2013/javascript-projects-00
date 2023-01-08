/*
 * Standard built-in objects >> Array >> Array.prototype.fill()
 * Related to .fill(), for change of values in array when doing forEach()
 */

var arr = [{ num : "one" }, { num : "two"}, { num : "three"}];

arr.forEach(function(part, index) {
  // the following will not change the object that arr[index] points to because part now points at a new object
  part = 5;
});

console.log((arr[0].num));
console.log((arr[1].num));
console.log((arr[2].num));
