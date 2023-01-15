// create a game of rock paper scissors

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const gameBtns= document.querySelectorAll(".gameBtn");

let player;
let computer;
let result;

gameBtns.forEach(button => addEventListener("click", () => {
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn(){
  const randNum = Math.floor(Math.random() * 3 + 1);

  switch(randNum){
    case 1:
      computer = "Rock";
      break
    case 2:
      computer = "Paper";
      break
    case 3:
      computer = "Scissors";
      break
  }
}

function checkWinner(){
  if(computer == player){
    return "Draw!";
  }
  else if(computer == "Rock"){
    return (player == "Paper") ? "You win! " : "You Loose!";
  }
  else if(computer == "Paper"){
    return (player == "Scissors") ? "You win! " : "You Loose!";
  }
  else if(computer == "Scissors"){
    return (player == "Rock") ? "You win! " : "You Loose!";
  }
}