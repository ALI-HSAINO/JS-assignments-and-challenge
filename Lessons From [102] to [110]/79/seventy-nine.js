setTimeout(function () {
  let popUp = document.createElement("div");
  let wlcmSpan = document.createElement("span");
  wlcmSpan.append("Welcome");
  let intrdSpan = document.createElement("span");
  intrdSpan.append("Welcome To Elzero Web School");
  popUp.append(wlcmSpan);
  popUp.append(intrdSpan);
  document.body.append(popUp);
  let close = document.createElement("span");
  close.className = "close";
  close.append("X");
  popUp.append(close);
  close.onclick = function () {
    popUp.remove();
  };
}, 5000);
