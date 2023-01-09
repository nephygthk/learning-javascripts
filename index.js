//spread operator ... : allows an iterable such as an array or strings to be expanded in places where zero or more arguments are expected.
//(unpacks the element) it is like * ** in python

// let numbers = [1,2,3,4,5,6,7,8,9];

// console.log(...numbers);

// how can this be useful. eg below

// let numbers = [1,2,3,4,5,6,7,8,9];

// let maximum = Math.max(...numbers); // without the three dots it can not be abble to unpack the array to get the numbers and check for maximum
// console.log(maximum);


// another way to use it is when you want to merge two array list together. eg

let class1 = ["mike","smigo","mikilo"];
let class2 = ["nephy","zeal","mikipiano"];

// class1.push(class2);// this adds it as an array
class1.push(...class2);// this unpacks it before adding the individual elements
console.log(...class1);