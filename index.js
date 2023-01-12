// await: makes a async function wait for a Promise. to be able to use await, you can only place await in async function for it to work. this is mostly used when you have to wait for multiple async functions.

async function loadFile(){
  let fileLoaded = false;
  if(fileLoaded){
    return "File is loaded";
  }
  else{
    throw "file loading failed";
  }
};


// await is used to replace this "then catch"
// loadFile().then((value) => console.log(value))
//       .catch(error => console.log(error));


// to catch errors we round our await code in try and catch
async function startProcess(){
  try{
    let message = await loadFile();
    console.log(message);
  }
  catch(error){
    console.log(error)
  }
  
}

startProcess();









