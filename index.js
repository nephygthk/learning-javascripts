// nested functions = A function inside of another function.
//outer function have access to inner function
//inner functions are hidden from outside the outer function.
// used in closures (future video topic)
//it adds some data security


let userName = "Nephyg";
let userInbox = 5;

login();

// function login(){
//   displayUserName();
//   displayUserInbox();
// }
// function displayUserName(){
//   console.log(`welcome ${userName}`)
// }
// function displayUserInbox(){
//   console.log(`You have ${userInbox} new messages`)
// }

//To next this function so that userName and inbox can only be accesed through login function.
function login(){
  displayUserName();
  displayUserInbox();

  function displayUserName(){
    console.log(`welcome ${userName}`)
  };

  function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`)
  };
};


