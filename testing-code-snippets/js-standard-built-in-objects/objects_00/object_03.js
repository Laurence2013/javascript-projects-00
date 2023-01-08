const obj_00 = {a: 0, b: 1, c: 2};
const obj_01 = Object.assign({}, obj_00);

console.log(obj_01);
obj_00.a = 1;
console.log(obj_01);
console.log(obj_00);
obj_01.a = 2;
console.log(obj_00);
console.log(obj_01);
obj_01.b = 3;
obj_01.c = 3;
console.log(obj_00);
console.log(obj_01);

