// Method One
// Create Your Object Here
let objMethodOne = {
  property: 1,
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object();
objMethodTwo.property = 1;
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create(objMethodOne);
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, objMethodOne);

console.log(objMethodFour.property); // "Method Four"
