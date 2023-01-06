// ternary operator: it's a short cut for if and else statement

//takes 3 operands,
// 1 a condition with ?
// 2 expression if true
// 3 expression if false

// e.g ====>> condition ? expressioniftrue : expressioniffalse

// let adult = checkAge(11);

// console.log(adult);

// function checkAge(age){
//   if(age >= 19){
//     return true;
//   }
//   else{
//     return false;
//   }
// }


// writing it with ternary operator

// let adult = checkAge(11);

// console.log(adult);

// function checkAge(age){
//   return age >= 18 ? true : false
// }


//another exampl
checkWin(false)

function checkWin(win){
  win ? console.log("You are a winner") : console.log("You are a looser");
}
