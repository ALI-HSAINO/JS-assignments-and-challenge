let div = document.querySelector("div");

let countDown = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(countDown);
  }
}, 1000);
