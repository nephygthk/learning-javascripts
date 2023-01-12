// DOM triversal techniques

//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)


// let element = document.body;
// let child = element.lastElementChild;

// child.style.backgroundColor = "blue";

// let element = document.querySelector("#vegetables");
// let parent = element.parentElement;

// parent.style.backgroundColor = "blue";

// let element = document.querySelector("#vegetables");
// let sibling = element.previousElementSibling;

// sibling.style.backgroundColor = "blue";


//to acees children through index
// let element = document.querySelector("#fruits");
// let child = element.children[2];

// child.style.backgroundColor = "blue";

// to acces the whole children at once
let element = document.querySelector("#fruits");
let children = Array.from(element.children);

// children.forEach(child => {
//   child.style.backgroundColor = "blue";
// })

for(let child of children){
  child.style.backgroundColor = "red";
}


// for(let i = 0; i >= children.length; i++){
//   console.log(i);
// }

