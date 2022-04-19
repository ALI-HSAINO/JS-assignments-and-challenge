let start = 0;
let swappedName = "elZerO";
let str = "";
for (i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    str = str + swappedName[i].toUpperCase();
  } else {
    str = str + swappedName[i].toLowerCase();
  }
}
console.log(str);
