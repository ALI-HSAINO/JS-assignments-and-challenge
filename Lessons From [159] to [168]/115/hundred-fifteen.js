let t0 = performance.now();
for (let i = 0; i <= 99999; i++) {
  console.log(i);
}
let t1 = performance.now();
let timeDone = `Loop Took ${Math.trunc(t1 - t0)} Milliseconds.`;
console.log(timeDone);
