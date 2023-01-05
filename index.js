// switch: statement that examines a value  for a match against many case clauses. it is more efficient than using many else if statements. it is important to use it when you see yourself using many else if statements


// let grade = "F";

// switch(grade){
//   case "A":
//     console.log("You did amazing")
//     break;
//   case "B":
//     console.log("You did very good")
//     break;
//   case "C":
//     console.log("You did good")
//     break;
//   case "D":
//     console.log("You barely made it")
//     break;
//   case "F":
//     console.log("You Failed")
//     break;
//   default:
//     console.log(grade, "is either not a letter or not a grading apparatus")
// }



//matching the grade with number for true or false answer
let grade = 5;


switch(true){
  case grade >= 90:
    console.log("You did amazing")
    break;
  case grade >= 80:
    console.log("You did very good")
    break;
  case grade >= 70:
    console.log("You did good")
    break;
  case grade > 63:
    console.log("You barely made it")
    break;
  case grade < 60:
    console.log("You Failed")
    break;
  default:
    console.log(grade, "is either not a letter or not a grading apparatus")
}