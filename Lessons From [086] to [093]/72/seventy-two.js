let form = document.forms[0];
let elements = document.getElementsByName("elements")[0];
let texts = document.getElementsByName("texts")[0];
let type = document.getElementsByName("type")[0];
let create = document.getElementsByName("create")[0];
let results = document.getElementsByClassName("results")[0];
form.onsubmit = function (e) {
  document.querySelectorAll(".results .box").forEach((element) => {
    element.remove();
  });
  e.preventDefault();
  for (let i = 0; i < elements.value; i++) {
    let boxes = document.createElement(type.value);
    let boxesText = document.createTextNode(texts.value);
    boxes.className = "box";
    boxes.title = "Element";
    results.appendChild(boxes);
    boxes.appendChild(boxesText);
    boxes.id = `id-${i + 1}`;
  }
};
