/*
 * Standard built-in objects >> Array >> Array.prototype.forEach()
 */

// ID: 00
/*const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (addUp, num) => addUp + num;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);*/

// ID: 01
/*const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = (addUp, num) => addUp + num;

ratings.forEach(rating => {
  sum = sumFunction(sum, rating);
});

console.log(sum);*/

// ID: 02
//const arraySparse = [1, 3, /* empty */, 7];
/*let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });*/

// ID: 03
/*const logArrayElements = (element, index) => {
  console.log(`a[${index}] = ${element}`);
};

[2, 5, , 9].forEach(logArrayElements);*/
