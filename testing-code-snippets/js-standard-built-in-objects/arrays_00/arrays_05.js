/*
 * Standard built-in objects >> Array >> Array.prototype.flatmap()
 * js reduce an array
 */

// ID: 00
//const nums_00 = [1,2,3,[4,5]];
//console.log(...nums_00);

// ID: 01
//const nums_01 = [1,2,3,4,5];
//const test_00 = nums_01.flatMap(x => [x, x * 2]);
//console.log(test_00);

// ID: 01a
const nums_01a = [1,2,3,4,5];
const test_00a = nums_01a.flatMap(x =>[x, [x + 2, x * 2]]);
console.log(test_00a);

// ID: 02
/*let cart_00 = [{
        name: 'Smartphone',
        qty: 2,
        price: 500,
        freeOfCharge: false
    },
    {
        name: 'Tablet',
        qty: 1,
        price: 800,
        freeOfCharge: false
    }
];
const test_01 = cart_00.flatMap(item => {
  if(item.name === 'Smartphone'){
    return [item, {
      name: 'Smartphone',
      qty: 5, 
      price: 900,
      freeOfCharge: true
    }]
    }else{
      return [item];
    }
});
console.log(test_01);*/


