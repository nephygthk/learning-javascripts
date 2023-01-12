// console.time(): starts a timer you can use to trach how long an operation takes.
// give each timer a unique name. it doesn't wait around for asychronous task.


//start
console.time("Response Time");

// alert("click button");
// console.log(addNumber(5,7));

// function addNumber(x,y){
//   return x + y;
// }

setTimeout(() => console.log("hello"), 3000);// to show it odesnt wait for asynchronous task

//end
console.timeEnd("Response Time")
