/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value: 100
  - Explain: 13 - 21 + 81 + 13 + 14 
  [+]
  - Explain: 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +20); // 2000
console.log(parseInt(((++g + ++f) / +--e) * -d)); // 173