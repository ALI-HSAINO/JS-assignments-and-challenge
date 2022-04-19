let myString = "EEllzzzzzzzeroo";

// Elzero

let str = myString
  .split("")
  .filter(function (ele, index, array) {
    return array.indexOf(ele) === index;
  })
  .reduce(function (acc, cur) {
    return `${acc}${cur}`;
  });

console.log(str);
