// arrow function  =>: compact alternative to a traditional function expression.

// const greetings = function(userName){
//   console.log(`Hello ${userName}`);
// }

//the same function with arrow function. you remove te fuction word, remove the cariblasis, you can remove the bracket on the argument if there is only one argument but will leave the bracket if there is more than one argument
// const greetings = (userName) =>
//   console.log(`Hello ${userName}`);

// greetings("Nephyg");

//another example of arrow function where it caculates a percentage

// const percent = function(x,y){
//   return x/y * 100;
// }

//this with arrow function. the reurn statement wouldn't be needed.

// const percent = (x,y) => x/y *100

// console.log(`${percent(75,100)}%`);


//another example, to use it on arrays

let grades = [23,70,87,34,67,77];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x,y){
//   return x - y;
// }

// function print(element){
//   console.log(element);
// }

// to do the same thing with fucntion expressions
// grades.sort(function (x,y){
//   return x - y;
// });
// grades.forEach(function (element){
//   console.log(element);
// });


//now doing it with arrow function with arrow function you don't need return, cariblasis or the word function
grades.sort((x,y) => x-y);
grades.forEach((element) => console.log(element)
);





