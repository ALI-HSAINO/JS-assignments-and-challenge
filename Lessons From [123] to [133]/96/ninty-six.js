function copyArr(chars) {
  let nums = [];
  nums = chars.filter((e) => typeof e === "number");
  chars = chars.filter((e) => typeof e !== "number");
  chars = [...nums, ...chars];
  chars.copyWithin(0, nums.length, nums.length * 2);
  console.log(chars);
}
copyArr(["A", "B", "C", "D", "E", 10, 15, 6]);
copyArr(["A", "B", "C", 20, "D", "E", 10, 15, 6]);
copyArr(["Z", "Y", "A", "D", "E", 10, 1]);
copyArr(["j", "a", "b", "e", "r", 7, 5, 8, 4]);
