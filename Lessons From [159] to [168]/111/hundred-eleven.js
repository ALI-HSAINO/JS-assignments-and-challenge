let UnixTimeDate = new Date();
let myBirthdayDate = new Date("jan 22 2001");
console.log(UnixTimeDate);
console.log(myBirthdayDate);
console.log(Math.trunc((UnixTimeDate - myBirthdayDate) / 1000), `Seconds`);
console.log(Math.trunc((UnixTimeDate - myBirthdayDate) / 1000 / 60), `Minutes`);
console.log(
  Math.trunc((UnixTimeDate - myBirthdayDate) / 1000 / 60 / 60),
  `Hours`
);
console.log(
  Math.trunc((UnixTimeDate - myBirthdayDate) / 1000 / 60 / 60 / 24),
  `Days`
);
console.log(
  Math.trunc((UnixTimeDate - myBirthdayDate) / 1000 / 60 / 60 / 24 / 30),
  `Months`
);
console.log(
  Math.trunc((UnixTimeDate - myBirthdayDate) / 1000 / 60 / 60 / 24 / 30 / 12),
  `Year`
);
