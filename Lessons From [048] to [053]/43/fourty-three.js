let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  console.log(index);
  index -= 2;
  if (index == jump) {
    break;
  }
}
