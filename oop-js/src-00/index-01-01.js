/*
	desc-00: How to do classical inheritance in Javascript without using ES6?
	desc-01: Tags js-classical-inheritance
	desc-02: Give more examples like cars
	desc-03: Give another code example for a car, a truck, a motorbike and a lorry
	goal:
	line-code-added:
*/

function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}
Vehicle.prototype.start = function(){
	return 'Vroom!';
};
Vehicle.prototype.getInfo = function(){
	return {make: this.make, model: this.model, year: this.year};
};
function Car(make, model, year, numDoors){
	Vehicle.call(this, make, model, year);
	this.numDoors = numDoors;
};
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function(){
	return Vehicle.prototype.start.apply(this, arguments) + ' the car has started';
};

function Truck(make, model, bedSize){
	Vehicle.call(this, bedSize);
	this.bedSize = bedSize;
};
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

const myCar = new Car('Suzuki', 'Swift', 2016, 4);
const carInfo = myCar.getInfo();

console.log(carInfo);
console.log('Number of doors: ' + myCar.numDoors);
console.log(myCar.start());

