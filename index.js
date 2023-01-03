//practice with hypoternus of a right angle triangle


//below is with window prompt
// let a;
// let b;
// let c;

// a = window.prompt("Enter Side A");
// b = window.prompt("Enter Side B");

// c = Math.pow(a, 2) + Math.pow(b, 2);

// c = Math.sqrt(c);

// //you can also put all c in one code
// // c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(c)



// now with html input

document.getElementById("button").onclick = function(){
  a = document.getElementById("aside-textbox").value;
  a = Number(a)

  b = document.getElementById("bside-textbox").value;
  b = Number(b)

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("side-c").innerHTML = "Side C Is "+c;
};