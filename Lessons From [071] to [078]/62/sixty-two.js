let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let sum = 0;
let fiveHundred = nums.reduce(function (acc, cur) {
  if (cur % 2 !== 0) {
    sum = acc + cur;
  } else if (cur % 2 == 0) {
    sum = acc * cur;
  }
  return sum;
});

console.log(fiveHundred);
