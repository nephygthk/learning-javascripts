//function: Define code ones and use it many times. to perform the code, you call the function name. You use function when you know you are repeating a code



function startPrograme(){
  let name = "neph";
  happyBirthday(name);
}


startPrograme();

function happyBirthday(a){
  console.log("happy birthday to you");
  console.log("happy birthday to you");
  console.log("happy birthday to you", a);
  console.log("happy birthday to you");
}