let theName = "Elzero";
function firstMethod() {
  let theNameArray = theName.split("");
  console.log(theNameArray);
}
function secondMethod() {
  let theNameArray = [];
  for (let i = 0; i <= theName.length - 1; i++) {
    theNameArray.push(theName[i]);
  }
  console.log(theNameArray);
}
function thirdMethod() {
  let theNameArray = [...theName];

  console.log(theNameArray);
}
function fourthMethod() {
  let theNameArraySpread = [...theName];
  let theNameArray = theNameArraySpread.copyWithin(0);

  console.log(theNameArray);
}
function fifthMethod() {
  let theNameArraySpread = [...theName];
  theNameArray = Array.from(theNameArraySpread);
  console.log(theNameArray);
}
firstMethod();
secondMethod();
thirdMethod();
fourthMethod();
fifthMethod();
