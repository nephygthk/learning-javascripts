// 2d arrays also known as multi dimensional arrays: it is an array of arrays. you access or iterate over a 2d arrays with a nested loop

let fruits = ["Orange","Banana","Apple"];
let vegetables = ["carrots", "onions","potato"];
let meats = ["fish","beef","chicken"];

let groceryList = [fruits,vegetables,meats];

//to replace things in your arrays inside of the array

groceryList[0][1] = "Mango";
console.log(groceryList[1][2])

// for(let list of groceryList){
//   for(let food of list){
//     console.log(food);
//   }
// }