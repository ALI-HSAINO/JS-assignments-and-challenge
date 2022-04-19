let num = 3;

// Solution One
console.log(num+num); // 6

// Solution Two
console.log((num / num + num / num)*(num)) // 6

// Soultion Three
console.log((num * num)-(num)); // 6

// Soultion Four
console.log((num ** num)-((num + (num*num)+ (num*num)))); // 6

// Solution Five
console.log(num += num); // 6

// Solution Six
num = 3; // restrat the value to 3 because i declare it in the last soluiton
console.log(num * (true + true)); // 6