// error handling: object with a description of something that went wrong.
// can't open a file
// loose connection
// user types incorrect inputs
// type error

// one way to handle error is to put any dangerous code in try and catch which is the same with exception in python.

//we use catch to catch the error or throw with if statement to write the error we want to be printed out

//throw: executes a defined error. mostly used when things goes wrong but doesn't throw an error

//finally: will always execute wether code is successful or not. mostly used to close a file. or do clean up.

try{
  let x = window.prompt("enter a number");
  x = Number(x);

  if(isNaN(x)) throw "That wasn't a number";

  if(x == "") throw "You left the input empty, please enter a number";

  console.log(`${x} is a number`);
}
catch(error){
  console.log(error)
}
finally{
  console.log("file is closed")
}