/*
 * Standard built-in objects >> Array >> Array.from()
 * https://www.youtube.com/watch?v=zVMkR-IrBJI&t=165s
 */

//console.log(Array);
//console.dir(Array);

//const name_00 = "Laurence";
//console.log([...name_00]);

//const name_01 = "Laurence";
//const fromString = Array.from(name_01);
//console.log(fromString);

//const name_02 = Array.from({length: 5}, (v, i) => v);
//const name_03 = Array.from({length: 5}, (v, i) => i);
//const name_04 = Array.from({length: 5}, (v, i) => {v: i});
//const name_05 = Array.from({length: 5}, (v, i) => i*2);
//console.log(name_05);

//const name_06 = new Array(5);
//const name_07 = (new Array(5)).fill(0);
//const name_08 = (new Array(5)).fill(0).map((v, i) => i);
//console.log(name_08);

//const name_09 = [1,1,2];
//const unique_00 = new Array(new Set(name_09));
//const unique_01 = [...new Set(name_09)];
//console.log(unique_01);

//const func_00 = function(){
//	console.log(arguments);
//}
//func_00('l','a','u','r','e','n','c','e');
////func();

const func_01 = function(){
	console.log(Array.from(arguments).join(''));
}
func_01('l','a','u','r','e','n','c','e');
