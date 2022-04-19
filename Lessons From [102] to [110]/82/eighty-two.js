let div = document.querySelector("div");

let countDown = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(countDown);
    let elzeroWin = window.open(
      "https://elzero.org/",
      "",
      "width=400,height=400,top=100,left=100"
    );
  }
}, 1000);
