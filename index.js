//function expression: it's a function without a name, (anonymous function).
//avoid polluting the global scope with names 
//Write it, then forget about it. it helps when you don't always want to be thinking about function names and also when you know that you won't be reusing the function.

//you can store it in a variable if you want

// const greetings = function(){
//   console.log("hello");
// }

// greetings();

let count = 0;

// function increaseCount(){
//   count+=1;
//   document.getElementById("myLabel").innerHTML = count
// }
// function decreaseCount(){
//   count-=1;
//   document.getElementById("myLabel").innerHTML = count
// }


//to do this same thing with function expression

document.getElementById("increaseButton").onclick = function(){
  count+=1;
  document.getElementById("myLabel").innerHTML = count
}
document.getElementById("decreaseButton").onclick = function(){
  count-=1;
  document.getElementById("myLabel").innerHTML = count
}