// nested loop: it's a loop inside another loop. it is advicable to change the name of the counter variables when you are nesting a loop

let symbol = window.prompt("Enter a symbol");
let rows = window.prompt("Enter # of rows");
let column = window.prompt("enter # columns");
for(let i = 1; i <= rows; i+=1){
  for(let j = 1; j <= column; j+=1){
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}