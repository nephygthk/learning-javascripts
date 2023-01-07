// create a basic number guessing game in javscript


const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById("myButton").onclick = function(){
  let guess = document.getElementById("myNum").value;
  guesses+=1;

  if(guess == answer){
    alert(`${guess} is the right answer`);
  }
  else if(guess < answer){
    alert("Too small");
  }
  else{
    alert("Too large")
  }
}