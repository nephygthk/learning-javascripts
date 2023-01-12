//add event listener(event, function, useCapture).
//you can add many event handler to one elements
//even the same events that invokes different functions
//it is the prefered way of handling events.

//usecapture handles wich invent will happen first if two elements are taking the same eventlistener function.

// const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", changeColor);// you don't add "on" when using the event action inside add event listener

// innerDiv.addEventListener("mouseout", changeColorBack);

// function changeColor(){
//   innerDiv.style.backgroundColor = "red";
// }

// function changeColorBack(){
//   innerDiv.style.backgroundColor = "lightgreen";
// }


const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeColor);
outerDiv.addEventListener("click", changeColor, true);

function changeColor(){
  alert(this.id);
  this.style.backgroundColor = "blue";
}

function changeColorBack(){
  innerDiv.style.backgroundColor = "lightgreen";
}
