let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let arr = words.pop()[0].slice(website.length).toLocaleUpperCase()
console.log(arr); // ZERO