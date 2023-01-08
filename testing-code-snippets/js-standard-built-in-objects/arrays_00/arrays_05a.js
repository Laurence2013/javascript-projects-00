/*
 * Standard built-in objects >> Array >> Array.prototype.flatmap()
 */

//const arr_00 = [1, 2, 3, 4];
const arr_00 = {length: 3, 0: 1, 1: 2, 2: 3};

// ID: 00
//const test_00 = arr_00.map(x => [x * 2]);

// ID: 01
//const test_00 = arr_00.flatMap(x => [x * 2]);

// ID: 02
//const test_00 = arr_00.flatMap(x => [[x * 2]]);

// ID: 06
//const test_00 = arr_00.flatMap(x => {x, x * 2});

// ID: 07
//const test_00 = arr_00.flatMap(x => [x, {x, 2}]);

// ID: 09
const test_01 = Array.prototype.flatMap.call(arr_00, (x) => ({length: 1, 0: x}));
//const test_02 = Array.prototype.flatMap.call(arr_00, (x) => {length: 1, 0: x});
//const test_03 = Array.prototype.flatMap.call(arr_00, (x) => [{length: 1, 0: x}]);

console.log(test_01);
