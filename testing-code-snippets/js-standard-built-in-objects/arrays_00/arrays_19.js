/*
 * Standard built-in objects >> Array >> Array.prototype.reverse()
 * The spread operator creates a shallow copy, there is no mutation
 */

const number = [1,2,3,4,5];

const reversed = [...number].reverse();

console.log(reversed);
