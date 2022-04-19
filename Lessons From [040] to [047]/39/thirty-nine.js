let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
// !X
let x = arr1.pop()

// !Y
let y = arr2.pop()

// !F
let f = arr2.slice(arr2.indexOf("F"),arr2.length).join("")

allArrs =  [x , y , f].sort().join("").toLocaleLowerCase()
console.log(allArrs); // fxy