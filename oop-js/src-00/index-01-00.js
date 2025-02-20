/*
	desc-00: How to do classical inheritance in Javascript without using ES6?
	desc-01: Tags js-classical-inheritance
	goal:
	line-code-added:
*/

function Shape(x,y){
	this.x = x;
	this.y = y;
}
Shape.prototype.move = function(newX, newY){
	this.x = newX;
	this.y = newY;
}
function Circle(x, y, radius){
	Shape.call(this, x, y);
	this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.calculateArea = function(){
	return Math.PI * this.radius * this.radius;
};

let myCircle = new Circle(10, 20, 5);
myCircle.move(5, 10);

console.log(myCircle.calculateArea());
console.log(myCircle.x);
console.log(myCircle.y);

