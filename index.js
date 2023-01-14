// cookie: a small text file stored on your computer. used to remember information about the user.  saved in name= value pairs

// console.log(navigator.cookieEnabled);// to check if cookie is anbled in your compueter

// document.cookie = "firstName=smigo; expires=Sun, 1 january 2030 12:00:00 UTC; path=/" ;
// document.cookie = "lastName=mike; expires=Sun, 1 january 2020 12:00:00 UTC; path=/" ;


// setCookie("email", "smigo@gmail.com", 180);
// deleteCookie("email");
// deleteCookie("firstName");
// console.log(document.cookie);

// setCookie("email", "smigo@gmail.com", 356);
// setCookie("firstName", "Smigo", 180);

// console.log(getCookie("firstName"));


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () =>{
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
})
cookieBtn.addEventListener("click", () =>{
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
})


function setCookie(name,value, daysToLive){
  let date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 100));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
  setCookie(name, null, null);
}

function getCookie(name){
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;
  
  cArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1);
    }   
  })
  return result;
}