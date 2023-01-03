// slice method: extracts a section of a string and returns it as a new string, without modifying the original string.

let fullName = "Demian Chidi";
let firstName;
let lastName;


// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(7);

//we can do this same thing with indexof

lastName = fullName.slice(fullName.indexOf(" ")+1);

firstName = fullName.slice(0, fullName.indexOf(" "));



console.log(firstName);
console.log(lastName);