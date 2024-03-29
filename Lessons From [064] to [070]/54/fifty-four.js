function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName[0].toUpperCase()}${zName
      .slice(1, zName.indexOf(" "))
      .toLowerCase()}${zName
      .slice(zName.indexOf(" "), zName.indexOf(" ") + 2)
      .toUpperCase()}.`;
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${zAge[0]}${zAge[1]}`;
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    return `${zCountry.slice(0, 2).toUpperCase()}`;
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
