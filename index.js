let textInput = document.querySelector("#textInput");
// const myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click", spinBtn);

// function spinBtn(){
//   textInput = textInput.value;
//   myBtn.textContent = `connecting with ${textInput} ...........`;
//   myBtn.style.width = "700px";
// }


// myBtn.addEventListener("click", () => {
//   textInput = textInput.value;
//   myBtn.textContent = `connecting with ${textInput} ...........`;
//   myBtn.style.width = "350px";
// });

const myBtn = document.querySelector("#myBtn").onclick = function(){
  textInput = textInput.value;
  this.textContent = `connecting with ${textInput} ...........`;
  this.style.width = "350px";
}
