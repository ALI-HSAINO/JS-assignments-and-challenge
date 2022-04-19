let numOne = 9;
// Condition Output => "009"
numOne < 10
  ? console.log("009")
  : numOne > 10 && numOne < 100
  ? console.log("09")
  : numOne >= 100
  ? console.log("9")
  : console.log(null);

let numTwo = 20;
// Condition Output => "020"
numTwo < 10
  ? console.log("0020")
  : numTwo > 10 && numTwo < 100
  ? console.log("020")
  : numTwo >= 100
  ? console.log("20")
  : console.log(null);

let numThree = 110;
// Condition Output => "110"
numThree < 10
  ? console.log("00110")
  : numThree > 10 && numThree < 100
  ? console.log("0110")
  : numThree >= 100
  ? console.log("110")
  : console.log(null);

