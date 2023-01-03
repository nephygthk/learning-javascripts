
let username;

document.getElementById("my-button").onclick = function(){
  username = document.getElementById('my-text').value;
  console.log(username)
  document.getElementById("my-label").innerHTML = "hello "+username;
}