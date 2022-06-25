var mS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let date = new Date();
date.setDate(-1);
console.log(date);
console.log(
  `The previous Month is ${
    mS[date.getMonth()]
  } and last Day is ${date.getDate()}`
);
