// setInterval: invokes a function repeatadly after a number of miliseconds
// asynchrounous function, (doesnt pause execution) 

//to stop the set interval method we will need a clear interval method. in the clear interval we pass the id of the set interval, we get the id by storing the set interval on a variable.

let count = 0;
let max = window.prompt("Enter maximum number");
max = Number(max);

let counter1 = setInterval(countUp, 1000);

function countUp(){
  count += 1;
  console.log(count);
  document.getElementById("myLabel").innerHTML = count
  if(count >= max){
    clearInterval(counter1);
  }
}