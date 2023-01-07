// toLocaleString(): returns a string with a language sensitive representation of this number. it's fantastic if you need to format a number as some currency.

//number.toLocaleString(local, {options});

//locale: specify that language (undefined = default set in your browser)

//options: object with formating options


let myNum = 100;

// myNum = myNum.toLocaleString("en-US"); //usa english
// myNum = myNum.toLocaleString("hi-IN"); //hindi india
// myNum = myNum.toLocaleString("de-DE");// standard german

//trying it with currency

// let myCurrency = "EUR"
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency : "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"});
// myNum = myNum.toLocaleString("de-DE", {style:"currency", currency:"EUR"});

//trying it with percents
// myNum = myNum.toLocaleString(undefined, {style: "percent"})

//trying with unit of measurement. make sure the unit is lower case
myNum = myNum.toLocaleString(undefined, {style: "unit", unit:"mile"})



console.log(myNum);