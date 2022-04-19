// set the web page font-family
document.body.style = "font-family: Droid Arabic Kufi, sans-serif;";
// create header and append it to body
let header = document.createElement("header");
document.body.append(header);
// create logo , append textNode to logo and append logo to header
let logo = document.createElement("p");
logo.append("Elzero");
header.append(logo);
// create links container and append it to header
let links = document.createElement("ul");
header.append(links);
// create lis (with for loop) and append it to links container
for (let i = 1; i <= 4; i++) {
  let li = document.createElement("li");
  links.append(li);
}
//append textNode to lis
links.children[0].append("Home");
links.children[1].append("About");
links.children[2].append("Services");
links.children[3].append("Contact");
// styling header
header.style =
  "display : flex; justify-content : space-between; align-items : flex-start; padding : 10px";
// styling logo
logo.style =
  " padding : 0px; margin : 0px;color:#23a96e; font-size : 30px; font-weight : bold;";
// styling links container
links.style =
  " padding : 0px; margin : 0px; list-style:none; display : flex; align-self:center";
// styling lis
for (let j = 0; j <= 3; j++) {
  links.children[j].style = "padding : 0px 20px; margin:0px; color:#6e6e6e";
}
// create section part and append it to body
let section = document.createElement("section");
document.body.append(section);
// create divs in section part and append it
for (let k = 1; k <= 15; k++) {
  let div = document.createElement("div");
  section.append(div);
}
// create textNodes , num spans ,text spans, append textNodes to spans then append spans to divs
for (let l = 1; l <= 15; l++) {
  let spanN = document.createElement("span");
  let spanNum = document.createTextNode(l);
  spanN.append(spanNum);
  section.children[l - 1].append(spanN);
  spanN.classList.add("no");
  let spanP = document.createElement("span");
  let spanText = document.createTextNode("product");
  spanP.append(spanText);
  section.children[l - 1].append(spanP);
}
// styling section
section.style =
  "height : calc(100vh - 111px); display : flex; justify-content: space-evenly; align-items: center; background-color : #ececec; flex-wrap: wrap";
//   styling divs
for (let h = 0; h <= section.children.length - 1; h++) {
  section.children[h].style =
    "width : 32%; height : 17%; background-color : #ffffff; display : flex; flex-direction : column; justify-content : center; align-items : center;";
}
// styling spanN and spanP
for (let q = 0; q <= 14; q++) {
  document.querySelectorAll("section div .no")[q].style = "font-size : 30px ";
  document.querySelectorAll("section div .no")[q].nextElementSibling.style =
    "color : rgb(110, 110, 110)";
}
// create footer and append it to body
let footer = document.createElement("div");
footer.append("Copyright 2021");
document.body.appendChild(footer);
// styling footer
footer.style =
  "width : 100%; height :40px; background-color : #23a96e; display : flex; justify-content : center; align-items : center; color : white; padding:0px; margin : 0px ";
