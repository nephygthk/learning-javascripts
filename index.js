// while loop: repeats some code while some condition is true, It can run infinite if the condition continues being true.

//remember to always add a breaking point for your loop else it will end up running infinite


let userName = "";

while(userName == "" || userName == null){
  userName = window.prompt("Enter Your Username");
}

console.log("Hello ", userName)