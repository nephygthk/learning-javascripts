//checked property in javascript

//checked property is mostly used for radio buttons or check button, it alwasy returns true or false


document.getElementById("myButton").onclick = function(){
  const myCheckbox = document.getElementById("myCheckbox");
  const visacard = document.getElementById("visaBtn");
  const mastercard = document.getElementById("masterBtn");
  const paypal = document.getElementById("paypalBtn");

  if(myCheckbox.checked){
    console.log("you are subscribed")
  }
  else{
    console.log("you are not subscribed.")
  }

  if(visacard.checked){
    console.log("You are paying with visa card")
  }
  else if(mastercard.checked){
    console.log("You are paying with master card")
  }
  else if(paypal.checked){
    console.log("You are paying with paypal")
  }
  else{
    console.log("You must select a payment method")
  }
}