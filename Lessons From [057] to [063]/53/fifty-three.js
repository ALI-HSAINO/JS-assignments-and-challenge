function multiply(...nums) {
  let num = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      num *= Math.trunc(nums[i]);
    }
  }
  console.log(num);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
