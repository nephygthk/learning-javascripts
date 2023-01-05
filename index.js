// do while loop in javascript, its the same like while loop but it does something first before getting into while loop. with do while loop, you check the condition last instead of checking it first.

// let userName = "";

// while(userName == ""){
//   userName = window.prompt("Enter your name")
// }

// console.log("Hello",userName);

// the same code in do while loop
let userName;

do{
  userName = window.prompt("Enter your name")
}while(userName == "")

console.log("Hello",userName);
