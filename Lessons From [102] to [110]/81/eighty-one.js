let div = document.querySelector("div");

let countDown = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    window.location.href = "https://elzero.org/";
  }
}, 1000);
