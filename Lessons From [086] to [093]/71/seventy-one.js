let body = document.body;
let imgs = body.children;
for (let i = 0; i <= imgs.length-1; i++) {
  if (imgs[i].hasAttribute("alt")) {
    imgs[i].setAttribute("alt", "old");
  } else {
    imgs[i].setAttribute("alt", "Elzero New");
  }
}
