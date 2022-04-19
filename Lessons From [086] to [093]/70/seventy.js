let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");
let div1Att = div1.title;
let div2Att = div2.title;
div1.title = div2Att;
div2.title = div1Att;
// !
let div1Con = div1.innerHTML;
let div2Con = div2.innerHTML;
div1.innerHTML = div2Con;
div2.innerHTML = `${div1Att} ${document.querySelectorAll("div").length}`;
