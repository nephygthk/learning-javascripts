// array = think of it as a variable that can store multiple values. to store values in array variable, use [] and seprate each value with a coma , each value in an array is also known as an element, and you can access those elements with their index numbers starting from 0. e.g arrayname[0]; to access first element of the array. array can accept strings and intergers at the same time
//you can also update and change the elements of an array.

let fruits = ["Orange", "Banana","Mango"];

//to change or update an element of an array
fruits[1] = 'Coconut';

//to add a new element to array use the push method.
fruits.push("Lemon")
fruits.pop(); //removes last element
fruits.unshift("Apple");//to add element at the begining of an array.
fruits.shift(); //removes element from begining

let length = fruits.length; // to get the number of elements in an array. 
let index = fruits.indexOf("Orange");

console.log(index);

console.log(fruits[1]);
console.log(fruits);