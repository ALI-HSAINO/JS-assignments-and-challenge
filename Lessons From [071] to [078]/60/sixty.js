let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let flatArray = myArray
  .reduce(function (acc, cur) {
    return acc + cur;
  })
  .split("")
  .filter(function (ele) {
    return ele !== ",";
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });
console.log(flatArray);
