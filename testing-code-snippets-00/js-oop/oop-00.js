function User(fName, lName, age, gender){
	this.fName = fName;
	this.lName = lName;
	this.age = age;
	this.gender = gender;
}

const user00 = new User('Tom', 'Craig', 29, 'male');
const user01 = new User('Mark', 'Harris', 26, 'male');

User.prototype.email = '@facebook.com';
User.prototype.getEmail = function(){
	return `My name is ${this.fName} ${this.lName} and my email is ${this.lName}${this.email}`;
}

console.log(user00.getEmail());
console.log(user01.getEmail());
