const obj00 = {
	name: 'Lozza'
}

const test00 = Object.create(obj00);

console.log(test00.name)
console.log('-------------------');

const test01 = Object.create(test00, {
	fullname: {
		configurable: true,
		writable: true,
		enumerable: true,
		value: 'Jeff Lebowski'
	},
	canBowl: {
		configurable: true,
		writable: true,
		enumerable: true,
		value: true
	}
});

console.log(test01);

