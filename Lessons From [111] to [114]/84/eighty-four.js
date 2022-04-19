let inputs = document.querySelectorAll("input");
let profession = document.getElementById("profession");
//
if (window.sessionStorage.getItem("fname")) {
  reload(0, "fname");
}
if (window.sessionStorage.getItem("lname")) {
  reload(1, "lname");
}
if (window.sessionStorage.getItem("mname")) {
  reload(2, "mname");
}
if (window.sessionStorage.getItem("profession")) {
  profession.value = window.sessionStorage.getItem("profession");
}
//
inputs.forEach(function (e) {
  e.addEventListener("input", function () {
    saveToSessionStorage(e, "fname", "fname");
    saveToSessionStorage(e, "lname", "lname");
    saveToSessionStorage(e, "mname", "mname");
  });
});
profession.addEventListener("change", function () {
  window.sessionStorage.setItem("profession", profession.value);
});
//
function saveToSessionStorage(ele, id, keyName) {
  if (ele.id == id) {
    window.sessionStorage.setItem(keyName, ele.value);
  }
}
function reload(i, k) {
  inputs[i].value = window.sessionStorage.getItem(k);
}
