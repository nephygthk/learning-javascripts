// rest parameters ...: it represents and indefinite number of parameters. this is closer to *args and **Kwargs in python. you use it when you don't know how many arguments user will put in. 
//(packs arguments into an array)




let a = 1;
let b = 2;
let c = 3;
let d = 4;

// console.log(sumTotal(a,b,c,d));

// function sumTotal(a,b){
//   return a + b
// }

//with rest parameters. with this it doesn't matter how many arguments is added on the fuction. 
console.log(sumTotal(a,b,c,d));

function sumTotal(...numbers){
  let total = 0;
  for(let number of numbers){
    total += number;
  }
  return total
}