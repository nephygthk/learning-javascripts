// how to sort an array of strings in javascript

let fruits = ["Orange","Apple","Mango","Banana","Kiwi"];

// fruits = fruits.sort();// to sort it alphabetically

fruits = fruits.sort().reverse();//reverse sorting

for(let fruit of fruits){
  console.log(fruit);
}