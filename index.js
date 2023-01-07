// Template reterals: they are delimited with (`)  instead of double or single quotes. they allows embedded variables and expressions. it is like f string in python but you use ${} for the variable and change the "" to ``. it is really helpful when you want to update an html element with some text.


let userName = "Nephyg";
let items = 3;
let total = 78;

// console.log("Hello", userName);
// console.log("you bought",items, "items from us.");
// console.log("your total prize is $",total );

//to do this same thing with template reterals

// console.log(`hello ${userName}`);
// console.log(`You bought ${items} items from us.`);
// console.log(`your total prize is $${total}`);

// another example with long text is:

let text = `hello ${userName}<br>
You bought ${items} items from us.<br>
your total prize is $${total}`

//you can add it line break too

// console.log("text")
document.getElementById("myLabel").innerHTML = text;