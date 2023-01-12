// Promise: Object that encapsulates the result of an asynchronous operations. it lets asynchronous methods return values like synchronous method.

//I promise to return something in the future.

// promises has a state, they are pending "then": they are fulfilled. or rejected.
//the result is what can be returned
//two parts, producing and consuming


//you use then to consume and catch to get the error in else statemtnet

// const promise = new Promise((resolve, reject) => {
//   let fileLoaded = true;
//   if(fileLoaded){
//     resolve("File is resolved");
//   }
//   else{
//     reject("file is rejected");
//   }

// }); //within the bracket you can put callback, function expression or arrow function expression.

// //consumer

// promise.then((value) => console.log(value))
//       .catch(error => console.log(error));



//another example

// const promise = new Promise(resolve => {
//   setTimeout(resolve, 5000);
// });

// //consume. it's not a must to return a value
// promise.then(() => console.log("file resolve completed"));


//another way of doing it with asigning arguments

const wait = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
});

//consume. it's not a must to return a value
wait(3000).then(() => console.log("file resolve completed"));

