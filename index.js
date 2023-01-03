// useful string methods and properties in Javascript

let fullName = "Demian Chidi";
let phoneNumber = '123-456-3345'

let nameLength = fullName.length;//to get the length of the string
console.log(nameLength);

console.log(fullName.charAt(4)); //getting a letter from a variable with index
console.log(fullName.indexOf("C"));// to find the characters through index
console.log(fullName.lastIndexOf("i"));// to find the last index of a character

fullName.trim(); //to remove any spaces before and after

fullName.toUpperCase();//to turn oall the letters to uppercase
fullName.toLowerCase(); // to turn all the characters to lowercase.

phoneNumber = phoneNumber.replaceAll("-", "/");//replacing characters with another character , only work on strings
console.log(phoneNumber);