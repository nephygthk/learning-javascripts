//practice to convert temprature

//to get the ° in pc, hold the alt and on the num pad type 0176 to get it.

document.getElementById("submitButton").onclick = function(){
  let temp = Number(document.getElementById("myTextbox").value);

  if(document.getElementById("cButton").checked){
    // temp = Number(document.getElementById("myTextbox").value);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp+"°C";

  }
  else if(document.getElementById("fButton").checked){
    // temp = Number(document.getElementById("myTextbox").value);
    temp = toFerinheit(temp);
    document.getElementById("tempLabel").innerHTML = temp+"°F";
  }
  else{
    document.getElementById("tempLabel").innerHTML = "Select a temperature";
  }
}



function toCelsius(temp){
  return (temp -32) * (5/9);
}

function toFerinheit(temp){
  return temp * 9/5 + 32;
}