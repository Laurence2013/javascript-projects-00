/*
 * Standard built-in objects >> Array >> Array.from()
 */

var employeeDetailsOriginal = {name: 'Manjula', age: 25, profession: 'Software Enginner'};
console.log(employeeDetailsOriginal.name);

// Shallow copy
var employeeDetailsDuplicate = employeeDetailsOriginal;

var name = employeeDetailsDuplicate.name = 'NameChanged';

console.log(employeeDetailsOriginal.name);
console.log(name);

// Deep copy

/*var employeeDetailsDuplicate = {
	name: employeeDetailsOriginal.name,
	age: employeeDetailsOriginal.age,
	profession: employeeDetailsOriginal.profession
}

var name = employeeDetailsDuplicate.name = 'NameChanged01';

console.log(employeeDetailsOriginal.name);
console.log(name);*/
