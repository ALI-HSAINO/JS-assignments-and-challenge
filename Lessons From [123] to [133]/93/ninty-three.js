let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let myInfoMap = new Map();
let myKeys = Object.keys(myInfo);
let myValues = Object.values(myInfo);
for (let i = 0; i <= myKeys.length - 1; i++) {
  myInfoMap.set(myKeys[i], myValues[i]);
}
console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));
