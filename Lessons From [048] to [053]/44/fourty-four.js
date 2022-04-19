let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let i = friends.indexOf("Ahmed"); i < friends.length; i++) {
  if (friends[i][friends.indexOf("Ahmed")] === letter.toLocaleUpperCase()) {
    continue;
  }
  console.log(`${i} => ${friends[i]}`);
}
