let myAdmins = ["Ahmed", "Osama", "Sayed", "Kamel", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
//! Push element inside it in memberLoop
let ahmedMe = [];
let OsamaMe = [];
let SayedMe = [];
//!
//?counting admin number before "stop" element
let i = 0;
adminLoop: for (; ; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
}
//?
//! member loop which push the elements inside last three empty arrays
memberLoop: for (let k = 0; k < myEmployees.length; k++) {
  if (myEmployees[k][0] === "A") {
    ahmedMe.push(myEmployees[k]);
  } else if (myEmployees[k][0] === "O") {
    OsamaMe.push(myEmployees[k]);
  } else {
    SayedMe.push(myEmployees[k]);
  }
}
//!
//? Start display output on the browser page
document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr>`);
teamNumLoop: for (let j = 0; j < i; j++) {
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${j + 1} ${myAdmins[j]}</p>`);
  document.write(`<h2>Team Members:</h2>`);
  for (let c = 0; c < myEmployees.length; c++) {
    if (myAdmins[j] === "Ahmed") {
      if (ahmedMe[c] === undefined) {
        break;
      } else {
        document.write(`<p>${c + 1}--${ahmedMe[c]}</p>`);
      }
    }
    if (myAdmins[j] === "Osama") {
      if (OsamaMe[c] === undefined) {
        break;
      } else {
        document.write(`<p>${c + 1}--${OsamaMe[c]}</p>`);
      }
    }
    if (myAdmins[j] === "Sayed") {
      if (SayedMe[c] === undefined) {
        break;
      } else {
        document.write(`<p>${c + 1}--${SayedMe[c]}</p>`);
      }
    }
  }
  document.write(`<hr>`);
  document.write(`</div>`);
}
//?
console.log(ahmedMe);
