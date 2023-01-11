// Date object: used to work with date and time

// let date = new Date();
// let date = new Date(0);// 0 is the reference point
// let date = new Date(2023, 0, 1,14,23,00,);// year, month=> starts counting from 0, and then day. then hour, minutes and seconds.

// let date = new Date("january 4, 2022, 0:00:00");// you can also pass a string representation of date

let date = new Date();

// let year = date.getFullYear();// to get year
// let dayOfMonth = date.getDate();// to get date of the day
// let dayOfWeek = date.getDay();// to get if it's monday to sunday. sunday is 0

// let month = date.getMonth(); //gets the month. january is 0

// you can set aall this methods

// date.setFullYear("2025")

// date = date.toLocaleString();

console.log(formatTime(date));

function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate()
  return `${day}/${month}/${year}`;
}

function formatTime(date){
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let amOrPm = hour >= 12 ? "pm" : "am";

  return `${hour}:${minutes}:${seconds} ${amOrPm}`
}

