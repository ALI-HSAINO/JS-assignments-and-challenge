let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /\bos(\d)*o\b/gi;
console.log(specialNames.match(specialNamesRe));
// Output
// ['Os10O', 'OsO', 'Os100O']
