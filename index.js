// && which is AND also || which is OR: Gives us the ability to check for more than one condition concurently

//&& (both conditions must be true)
// || (either condition can be true)


let temp = 31;

// if(temp > 0 && temp < 30){
//   console.log("The weather is very good")
// }
// else{
//   console.log("The weather is bad")
// }


// if(temp <= 0 || temp >= 30){
//   console.log("The weather is bad")
// }
// else{
//   console.log("The weather is good")
// }

let sunny = false;

if(temp > 0 && temp < 30 && sunny){
  console.log("The weather is good")
}
else{
  console.log("The weather is bad")
}