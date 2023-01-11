//  practice to create a clock that would update every second

const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000)
function update(){
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let pmOrAm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12 ;// converts the hour from 24 to 12 type of hour

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

    return `${hours}:${minutes}:${seconds} ${pmOrAm}`
  }

  function formatZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time; 
  }
}