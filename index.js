// synchronous code: in an ordered sequence
//            step by step linear instructions
//            (start now, finish now)


// asynchronous code: OUT OF sequence
//            E.G access a database, fetch a file, tasks that take time
//            (start now, finish sometime later.)

//synchronous
console.log("Game started");
console.log("This is synchronous code");
console.log("Game end");


//asynchronous
console.log("Game started");
setTimeout(() => console.log("This is asynchronous code"), 5000)
console.log("Game end");
