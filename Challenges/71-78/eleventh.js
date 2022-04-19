/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// ! added by Mr.Osama knowledge (
let zLetter = myString[myString.length - true];
// ! )
let solution = myString
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) && ele !== "," && ele !== zLetter;
  })
  .map(function (ele) {
    return ele.replace("_", " ");
  })
  .reduce(function (acc, cur) {
    if (acc === cur) {
      return acc;
    } else {
      return acc + cur;
    }
  });

console.log(solution); // Elzero Web School
