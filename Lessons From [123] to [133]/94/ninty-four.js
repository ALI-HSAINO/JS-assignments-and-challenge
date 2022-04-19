let theNumber = 100020003000;

console.log(
  +Array.from(new Set(theNumber.toString()))
    .filter((e) => e != 0)
    .join("")
);
