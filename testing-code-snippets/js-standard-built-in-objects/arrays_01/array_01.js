/*
 * Standard built-in objects >> Array >> Array.from()
 * https://www.youtube.com/watch?v=hLgUTM3FOII {ID: [06, 07, 08, 09, 10, 11, 14, 15]}
 */

// ID: 00
//const test_00 = Array.from('laurence');
//console.log(test_00);

// ID: 01
//const test_01 = Array.from('laurence').join('');
//console.log(test_01);

// ID: 03
//const test_02 = new Set(['foo', 'bar', 'baz', 'foo']);
//console.log(test_02);

// ID: 04
//const test_03 = new Set(['foo', 'bar', 'baz', 'foo']);
//console.log(Array.from(test_03));

// ID: 05
const test_04 = new Map([[1,2], [2,4], [4,8]]);
console.log(test_04);

// ID: 06
//const obj_00 = {};
//const a = {};
//const b = {};
//obj_00[a] = 'first';
//console.log(obj_00);

// ID: 07
//const obj_01 = {};
//const a = {};
//const b = {};
//obj_01[a] = 'first';
//obj_01[b] = 'second';
//console.log(obj_01);

// ID: 08
//const a = {};
//const b = {};
//const obj_02 = new Map([[a, 'first'], [b, 'second']]);
//console.log(obj_02);

// ID: 09
//const obj_03 = new Map([[{}, 'one'], [{}, 'two']]);
//obj_03.set({}, 'three');
//console.log(obj_03);

// ID: 10
//const obj_03 = new Map([[{}, 'one'], [{}, 'two']]);
//obj_03.set({}, 'three');
//obj_03.set('a', 'four');
//obj_03.set(1, 'five');
//console.log(obj_03);

// ID: 11
//const obj_04 = new Map([[1, 1], [2, 2]]);
//console.log(obj_04);
//obj_04.delete(2);
//console.log(obj_04);

// ID: 11a
//const obj_04a = new Map([[1, 1], [2, 2], [3, 3]]);
//console.log(obj_04a);
//obj_04a.delete(2);
//console.log(obj_04a);

// ID: 12
//const obj_05 = new Map([[1, 1], [2, 2], [3, 3]]);
//const test_00 = Array.from(obj_05);
//console.log(test_00[0]);
//console.log(test_00[2]);

// ID: 13
//const obj_06 = new Map([[1, 21], [2, 22], [3, 23], [4, 24], [5, 25]]);
//const test_01 = Array.from(obj_06).map(v => v);
//const test_02 = Array.from(obj_06).map(v => v[0]);
//const test_03 = Array.from(obj_06).map(v => v[1]);
//console.log(test_03);

// ID: 13a
//const obj_06a = new Map();
//obj_06a.set('a', 1);
//obj_06a.set('b', 2);
//obj_06a.set('c', 3);
//const test_01 = Array.from(obj_06a).map(v => v);
//const test_02 = Array.from(obj_06a).map(v => v[0]);
//const test_03 = Array.from(obj_06a).map(v => v[1]);
//console.log(test_03);

// ID: 14
//const obj_07 = new Map([[1, 21], [2, 22], [3, 23], [4, 24], [5, 25]]);
//console.log(obj_07);
//obj_07.clear();
//console.log(obj_07);

// ID: 15, search by keys
//const obj_08 = new Map([[1, 21], [2, 22], [3, 23], [4, 24], [5, 25]]);
//console.log(obj_08.has(1));
//console.log(obj_08.has(22));
//console.log(obj_08.has(100));
//console.log(obj_08.size);

// ID: 16
//const map_00 = new Map([[1, 2], [2, 3], [3, 4], [4, 5]]);
//console.log(Array.from(map_00));
//const map_01 = new Map([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']]);
//console.log(Array.from(map_01.values()));
//const map_02 = new Map([[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']]);
//console.log(Array.from(map_02.keys()));
