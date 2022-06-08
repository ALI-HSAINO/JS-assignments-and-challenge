class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  carInfo() {
    return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
  }
  static run = function () {
    return `Car Is Running Now`;
  };
  static stop = function () {
    return `Car Is Stopped`;
  };
}

let carOne = new Car("Hyundai", "Accent", 500);
let carTwo = new Car("Kia", "Rio", 550);
let carThree = new Car("BMW", "X6", 3000);

console.log(carOne.carInfo());
console.log(Car.run());
