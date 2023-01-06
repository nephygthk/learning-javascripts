//Return statement: Returns a value back to the place where you invokec a function. When you call a function, you can return some information.


let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log(area)

function getArea(){
  // result = ;
  return width * height;
}