// how to loop through an array in javascript

let prices = [100, 200, 300, 500, 700, 900, 2000];

//iterating with for loop

// for(let i=0; i<prices.length; i++){
//   console.log(prices[i]);
// }

//iterating with for loop but backwards
// for(let i=prices.length - 1; i>=0; i--){
//   console.log(prices[i]);
// }


//to iterate with for of statement. this is like for price in prices in django python
for(let price of prices){
  console.log(price)
}