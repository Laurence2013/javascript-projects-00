/*
 * Standard built-in objects >> Array >> Array.prototype.map()
 */

const obj_00 = {firstName: 'Lorenzo', lastName: 'Garcia', age: 25};
let arr_00 = [23,24,25,26];

let test_00 = arr_00.map(function(elem){
  if(elem === this.age){
    return {firstName: this.firstName, lastName: this.lastName, age: this.age};
  }else{
    return undefined;
  }
}, obj_00);

console.log(test_00);
let test_01 = test_00.filter(elem => elem != undefined);

console.log(test_01);
