let num1 = 10;
let num2 = 30;
let num3 = "30";
if (num3 > num1 && num3 !== num2) {
  console.log(
    `${num3} Is Larger Than ${num1} And Not The Same Type As ${num2}`
  );
} else if (num3 > num1 && num3 == num2 && num3 !== num2) {
  console.log(
    `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type Is Not The Same As ${num2}`
  );
}
else{
  console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
}

// Needed Output
("{num3} Is Larger Than {num1} And Not The Same Type As {num2}");
("{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
