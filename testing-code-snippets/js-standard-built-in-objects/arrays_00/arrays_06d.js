/*
 * Standard built-in objects >> Array >> Array.prototype.forEach()
 */

// ID: 04
let counter_00 = {sum: 0, count: 0};
let counter_01 = {sum: 1, count: 12};

const arr_00 = [1,2,3,4,5];
let arr_01 = [];

// ID: 04a
let test_00 = arr_00.forEach(function(elem){
  return this.count;
}, counter_01);

// ID: 04ac
let test_002 = arr_00.forEach(function(key){
  this.count++;
  this.sum = this.sum + key
}, counter_00);

console.log(counter_00);

// ID: 04ac

/*let test_01 = arr_00.map(function(elem){
  return this.count;
}, counter_01)*/

/*let test_02 = arr_00.forEach(function(elems){
  return elems.map(function(elem){
    this.count++;
    this.sum = this.sum + elem;
  }, counter_00)
});*/

/*let test_03 = arr_00.map(async function(elem){
    await this.count++;
    this.sum = await this.sum + elem;
}, counter_00);*/

//let test_04 = arr_00.forEach();

