//Class: it's a blueprint for creating objects
//       define what properties and methods they have
//       use a constructor for unique properties

class Player{
  score = 0;

  pause(){
    console.log("player is paused");
  }// when you declare a method in a class, you don't need the function keyword.

  exit(){
    console.log("You exited the game");
  }
}


//to instantiate this class while creating an object

const player1 = new Player();
const player2 = new Player();
player1.score += 1

console.log(player1.score);
console.log(player2.score);
player1.pause();
player2.exit();