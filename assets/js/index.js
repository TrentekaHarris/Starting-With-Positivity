//variable for form
const data = document.querySelector('#username');



//Hide alert
//document.getElementById("alert").style.display = "none";

//ensure input has values alert
function hasValue() {
  let nameValid = document.forms["username"]["inputName"].value;
  if(nameValid == "") {
    alert("Please enter your desired name");
    return false;
  } else {
    return getQuote() && getWeather();
  }
}

//Get User's chosen name
 async function getUsername(form) {
    var formData = new FormData(form);
    /*console.log(Object.fromEntries(formData));
    const choosenName = Object.fromEntries(formData);
    document.getElementById("quote").innerHTML= `Hello ${choosenName}!
    Here's some inspiration!`
    console.log(choosenName)*/
}

//submit listener
window.onload = function() {document.getElementById("username").addEventListener("submit", function (event) {
    event.preventDefault();
   getUsername(event.target);
    hasValue();
  
 //hide name request
 document.getElementById("username").style.display = "none";
})};


//get date
let today = new Date().toDateString()
document.getElementById("todaysdate").innerHTML = `${today}`