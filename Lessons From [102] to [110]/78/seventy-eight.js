let numbers = prompt("Print Number From – To", "Example: 5-20");
let firstNum = +numbers.slice(0, numbers.indexOf("-"));
let lastNum = +numbers.slice(numbers.indexOf("-") + 1);
let nums = [firstNum, lastNum];
nums.sort((a, b) => a - b);
for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
  let ele = document.createElement("div");
  ele.append(i);
  document.body.append(ele);
}
