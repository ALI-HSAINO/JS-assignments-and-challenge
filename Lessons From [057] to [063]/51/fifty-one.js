function showDetails(a, b, c) {
  let info = [a, b, c],
    name,
    age,
    availability,
    sentence;

  for (let i = 0; i < 3; i++) {
    typeof info[i] === "string"
      ? (name = info[i])
      : typeof info[i] === "number"
      ? (age = info[i])
      : typeof info[i] === "boolean"
      ? (availability = info[i])
      : "";
  }

  availability === true
    ? (sentence = "You are available For Hire")
    : (sentence = "You are not available For Hire");

  console.log(`Hello ${name}, Your age Is ${age} , ${sentence}`);
}
showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);
showDetails(38, true, "Osama");
