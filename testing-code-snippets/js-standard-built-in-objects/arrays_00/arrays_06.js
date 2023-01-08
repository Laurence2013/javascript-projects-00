/*
 * Standard built-in objects >> Array >> Array.prototype.forEach()
 * js reduce an array
 */

class Counter {
  constructor(){
    this.sum    = 0;
    this.count  = 0;
  }
  add1(arr){
    arr.forEach(function countEntry(entry){
      this.sum += entry;
      ++this.count;
    }, this);
  }
  add2(arr){
    arr.forEach((entry) => {
      this.sum += entry;
      ++this.count;
    }, Counter);
  }
  add3(arr){
    arr.forEach((entry) => {
      this.sum += entry;
      ++this.count;
    });
  }
};

const counter = new Counter();
counter.add([2,5,9]);
console.log(counter.sum);
console.log(counter.count);
