let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let vFriends = [];

while (counter < friends.length) {
  if (typeof friends[counter] === "string" && friends[counter][index] !== "A") {
    vFriends.push(friends[counter]);
  }
  counter++;
}
while (index < vFriends.length) {
  console.log(`${index + 1} => ${vFriends[index]}`);
  index++
}
