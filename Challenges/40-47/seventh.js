/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop(my.pop());
my = my.reverse();
console.log(my); //! ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Elham"), counter)); //! ["Elham", "Mazero"]

// !El
let myE = my[my.indexOf("Elham")].slice(zero, my.indexOf("Mazero"));
// !zero
let myM = my[my.indexOf("Mazero")].slice(my.indexOf("Mazero"));
// !Elzero
let elZero = myE + myM;
console.log(elZero); //! "Elzero"

// !ro
elZero = elZero.slice(++counter);
// !r
let r = elZero.slice(zero, ++zero);
// !O
let o = elZero.slice(zero++).toLocaleUpperCase();
console.log(`${r}${o}`); //! "rO"
// !!!!!!!!!!!!!
