const target = {'a': 1, 'b': 2, 'c': 3};
const source_00 = {'e': 4, 'f': 5, 'g': 6};
const source_01 = { a : 4, 'f': 5, 'g': 6};
const source_02 = {'a': 4, 'f': 5, 'g': 6};
const source_03 = [1, 2, 3, 4, 5];

const test_00 = Object.assign(target, source_03);
const test_01 = Object.assign(source_03, target);
const test_03 = Object.assign({}, source_01, source_02);
const test_04 = Object.assign({}, source_01, source_03);
const test_05 = Object.assign([], source_01, source_03);

console.log(test_05);
