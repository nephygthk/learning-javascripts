//array.forEach(): executes a provided callback function once for each array elements.for for each ,method three arguments are provided. an element, and index and an array. we don't necssary needs to provide all of it.

let students = ["mike","smigo","zeal"];

students.forEach(capitalize);//make sure to not add () after the function inside the foreach bracket.
students.forEach(print);

function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
  console.log(element);
}