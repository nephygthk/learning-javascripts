//events: is some actions that the user or the browswer does.
// onclick
//onload
// onchange
//onmouseover
//onmouseout
//onmousedown

//onclick
// const elememt = document.querySelector("#myButton").onclick = doSomething; //be sure not to add () on the function callback


// //onload
// const elememt1 = document.body.onload = doSomething;

//onchange
// const element = document.getElementById("myText").onchange = doSomething;

//onmouseover
const element = document.getElementById("myDiv");
// element.onmouseover = changeColor;

//onmouseout
// element.onmouseout = changeColorBack;

//onmousedown
element.onmousedown = changeColor;

//onmouseup
element.onmouseup = changeColorBack;


function doSomething(){
  alert("you did something");
};

function changeColor(){
  element.style.backgroundColor = "red";
  element.style.width = "150px"
  element.style.height = "150px"
  element.style.borderRadius = "50%"
};

function changeColorBack(){
  element.style.backgroundColor = "green";
  element.style.width = "100px"
  element.style.height = "100px"
  element.style.borderRadius = "0%"
};


