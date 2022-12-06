//variable for form
const data = document.querySelector('#username');

//Get desired name
let nameValid = prompt("Please enter your name");
console.log(nameValid)


//ensure input has values alert
async function hasValue() {
  
  if(nameValid == null || nameValid == "") {
    alert("Please enter your desired name");
  return false} else {
    return getQuote() && getWeather();
}
}

hasValue()


//get date
let today = new Date().toDateString()
document.getElementById("todaysdate").innerHTML = `${today}`