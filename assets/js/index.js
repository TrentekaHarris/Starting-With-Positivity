//variable for form

const data = document.querySelector('#username');

//Get desired name
let nameValid = prompt("Please enter your name");
 let username = nameValid;



//ensure input has values alert
async function hasValue() {

  if (username == null || username == "") {
    alert("Please enter your desired name");
    return false
  } else {
    getQuote() && getWeather();
  }
}


window.onload = hasValue()
//get date
let today = new Date().toDateString()
document.getElementById("todaysdate").innerHTML = `${today}`