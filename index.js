// async: makes a function return a promise. when using async, there is no need to use resolve or rejected. if async is successful you will return something or it fails you use the throw keyword to throw an error 

// const promise = new Promise((resolve, reject) => {
//   let fileLoaded = true;
//   if(fileLoaded){
//     resolve("File is resolved");
//   }
//   else{
//     reject("file is rejected");
//   }

// }); 

// promise.then((value) => console.log(value))
//       .catch(error => console.log(error));

// doing this with async function. async replaces evrything about promise in the function.

async function loadFile(){
  let fileLoaded = false;
  if(fileLoaded){
    return "File is loaded";
  }
  else{
    throw "file loading failed";
  }
};

loadFile().then((value) => console.log(value))
      .catch(error => console.log(error));



// another way without using async

// function loadFile(){
//   let fileLoaded = false;
//   if(fileLoaded){
//     return Promise.resolve("File is loaded");
//   }
//   else{
//     return Promise.reject("file loading failed");
//   }
// };

// loadFile().then((value) => console.log(value))
//       .catch(error => console.log(error));




