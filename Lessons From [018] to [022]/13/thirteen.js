let num = "10";

// Solution One
console.log(+num); // 20

// Solution Two
console.log(+num + +num + -num ); // 20

// Solution Three
console.log((+num / +num)*(+num)); // 20

// Solution Four
console.log(-num * (-true)); // 20