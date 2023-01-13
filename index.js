// creating few simple animations using javascript.

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);


// function begin(){
//   let timerId = null;
//   let x = 0;
//   let y = 0;

//   timerId = setInterval(frame, 5)
//   function frame(){
//     if( x >=200 ){
//       // myAnimation.style.display = "none";
//       clearInterval(timerId);
//     }
//     else{
//       x+=1;
//       y+=1;
//       myAnimation.style.left = x + "px";
//       myAnimation.style.top = y + "px";
//     }
//   }
// }


function begin(){
  let timerId = null;
  let degres = 0;
  let x = 0;
  let y = 0;

  timerId = setInterval(frame, 5)


  function frame(){
    if( x >= 300 || y >= 300){

      clearInterval(timerId);
    }
    else{
      degres+=4;
      x+=1;
      y+=1;

      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px"
      myAnimation.style.transform = "rotateZ("+degres+"deg)";

    }
  }
}



// function begin(){
//   let timerId = null;
//   let scaleX = 1;
//   let scaleY = 1;

//   timerId = setInterval(frame, 10)


//   function frame(){
//     if( scaleX >= 3 || scaleY >= 3 ){

//       clearInterval(timerId);
//     }
//     else{
//       scaleX+=0.1;
//       scaleY+=0.1;
//       myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";

//     }
//   }
// }