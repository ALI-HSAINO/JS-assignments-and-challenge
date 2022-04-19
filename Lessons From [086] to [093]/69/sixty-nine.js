let usd = document.querySelector("input[name]");
let result = document.querySelector(".result");

usd.oninput = function () {
  result.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
  result.textContent = `{${usd.value}} USD Dollar = {${(
    usd.value * 15.6
  ).toFixed(2)}} Egyptian Pound`;
};
