// variable scope: where a variable is accessable.
//let: the variables are limited to a block scope {}

//var variables are limited to a function (){}

//global variable: is declared outside any functions.(if global, var will change browser's window properties). using var keyword for declaring a global variable can be problematic because if a variable with var is declared global, it can and will change the browser window properties.

//it's considered good practice to use let over var to avoid messing with your window property and causing you lots of problem because var can change a default window property with the same var name.



//var variable can escape {} while let variable cannot escape {},, var varaible can not escape a function (){}. escape here means can be accessable.

function doSomething(){
  for(var i = 1; i<=3; i++){
  
  }
}

console.log(i);