let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
// let nums = [];
for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    if (mix[i] === mix[start]) {
      continue;
    } else {
      console.log(mix[i]);
    }
  }
}
// for (let j = 0; j < nums.length; j++) {
//     console.log(nums[j]);
//   }
