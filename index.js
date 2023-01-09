// how to sort an array of numbers in javascript

let grades = [100, 70,50,80,65];

grades = grades.sort(ascending);
console.log(grades); //prints an array

grades.forEach(print);//prints individual elements


function descending(x,y){
  return y - x;
}

function ascending(x,y){
  return x - y;
}

function print(element){
  console.log(element);
}