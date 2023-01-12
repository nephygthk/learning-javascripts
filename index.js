// few different ways to select elements in a web page.

// let title = document.getElementById('myTitle');

// title.style.backgroundColor = "blue";

// let fruits = document.getElementsByName("fruits"); //this returns a node list, similar to array.

// fruits.forEach(fruit => {
//   if(fruit.checked){
//     console.log(fruit.value);
//   }
// })

// let soupIngredient = document.getElementsByTagName("li");

// soupIngredient[3].style.backgroundColor = "blue";

// let desserts = document.getElementsByClassName("desserts");
// desserts[2].style.backgroundColor = "blue";


//with queryselector you pass a name, id , classname or an attribute. you use # for id, . for classname, [for] for attributes like for in label

// let element = document.querySelector("#myTitle"); // it selects the first elemnt of the group, if you need to select all you use querySelctorAll()
// elements.style.backgroundColor = "yellow";

let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
  element.style.backgroundColor = "blue";
})


