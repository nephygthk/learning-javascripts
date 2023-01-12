// how to show and hide html element

const myButton = document.querySelector("#myButton");

const myImage = document.querySelector("#myImage");

myButton.addEventListener("click", () => {
  if(myImage.style.visibility == "hidden"){
    myImage.style.visibility = "visible"
  }
  else{
    myImage.style.visibility = "hidden";
  }
})

//if you want to reserve the space of the image, you use visibility instead of display.

//when you put display of the property none, the button will need to be clicked trwice before it will toggle at the fist time of refreshing the page/. but to solve that, the first way is to add the display style inline, inside the tag.