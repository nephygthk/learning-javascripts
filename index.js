//method chaining: calling one method after another in one contineous line of code.


let userName = "Nephyg";

// let letter = userName.charAt(0);
// letter.toUpperCase();

// console.log(letter)

//doing this with method chaining

let letter = userName.charAt(0).toUpperCase().trim();
userName = userName.replaceAll("e", letter);

console.log(userName)