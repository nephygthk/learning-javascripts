//array.filter(): creates a new array with all elements that pass the test provided by a function.

// let ages = [12,45,17,18,22,67,34,11,7,90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);


// function checkAge(element){
//   return element >= 18
// }

// function print(element){
//   console.log(element);
// }


//array.reduce(): reduces an array to a single value. a very good use of this method would be to sum up all the values of an array like items in a shopping cart

let prices = [10,7,8,15,35,47,39];
let total = prices.reduce(checkOut);
console.log(`Your total prize is $${total}`)

function checkOut(total, element){
  return total + element;
}

