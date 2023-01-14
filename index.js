//window: interface used to talk with the web browser.
//the DOM is property of the window

// console.dir(window);

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);// you can change the href to another url

// console.log(window.location.hostname);

//console.log(window.location.pathname);

let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", () => window.open("https://google.com"));// there is window.close(),window.print(), window.alert(),window.prompt(), window.confirm