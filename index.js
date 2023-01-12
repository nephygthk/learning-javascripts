// add/ change html element

// to ways to change html content is eaither with innerHTML or .textContent

//innerHTML (vulnerable to xss attack)
//textContent (more secured) it's better to use this

// const nameTag = document.createElement("h1"); //this is how to create html tag with javascript

// nameTag.innerHTML = "Nephyg";
// document.body.append(nameTag);

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);

let listItem = document.querySelector("#fruits");
const nameTag = document.createElement("li");
nameTag.textContent = "Cashew"
// listItem.append(nameTag); // you can use prepend to make you append be the first on the list.
// listItem.prepend(nameTag);// to add to first on the list

listItem.insertBefore(nameTag, listItem.getElementsByTagName("li")[2])// this inserts before the  index element choosen