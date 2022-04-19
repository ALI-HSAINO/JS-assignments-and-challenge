function sayHello(theName, theGender) {
document.write(`<div>`)
if(theGender==="Male"){
document.write(`<p>Hello Mr ${theName}</p>`)
}else if(theGender==="Female"){
    document.write(`<p>Hello Miss ${theName}</p>`)
}else{
document.write(`<p>Hello ${theName}</p>`)
}
document.write(`</div>`)
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"