// setTimeout: invokes a function after a number of miliseconds, asynchrounous function,(doesn't pause execution). 

// with setTimoue we pass in a callback, function expression or arrow function expression. it is possible to have multiple set timeout method executing concurrently. to clear your settimeout use clear method
 let item = "Bag";
 let price = 4500;


let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 8000);
//note every setTimeout returns an id.

function firstMessage(item, price){
  alert(`Buy this great ${item} for $${price}`);
}
function secondMessage(){
  alert(`please buy it cus it's greate`);
}
function thirdMessage(){
  alert(`Buy it now!!`);
}


document.getElementById("myButton").onclick = function(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`Thank you for buying`);
}