// callback: it is a function passed as an argument to another function. using call back is a popular programming technique because it ensures that a function is not going to run before a task is completed.

//helps us develope asynchronous code.
//(when one function has to wait for another function)
//it helps us avoid errors and pottential problems
//Ex. wait for a file to load

let solve = sum(2,6,displayConsole);

// displayDom(solve);

// function sum(a,b){
//   let result = a + b;
//   return result
// }



//doing this with callback. rmemebr to not add () in the parameters arguments
function sum(a,b, halla){
  let result = a + b;
  halla(result);
}

function displayDom(output){
  document.getElementById("myLabel").innerHTML = output
}


function displayConsole(output){
  console.log(output);
}