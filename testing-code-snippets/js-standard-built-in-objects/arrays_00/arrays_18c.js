/*
 * Standard built-in objects >> Array >> Array.prototype.reduceRight()
 *
  * */
const calc_00 = (...funcs_00) => (callback, ...args) => funcs_00.map((fn_00 => fn_00(...args), callback));

const test_00 = num => num * 100;
const test_01 = function(num){
  return num * 20;
}
const result_00 = calc_00(test_00);

result_00(console.log, 5);
