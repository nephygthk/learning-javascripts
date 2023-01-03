//practice create simple counter programm with javascript
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
  count -= 1;
  document.getElementById('count-label').innerHTML = count
}

document.getElementById("resetBtn").onclick = function(){
  count = 0;
  document.getElementById('count-label').innerHTML = count
}

document.getElementById("increaseBtn").onclick = function(){
  count += 1;
  document.getElementById('count-label').innerHTML = count
}