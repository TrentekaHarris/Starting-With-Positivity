//weather api
const weather = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df63d54958mshc6e5ae843b596aep179e42jsn21d36928056d',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    

async function getWeather () {
  let nameCity = prompt("Please your city name");
  if(nameCity == null || nameCity == "") {
    alert("Please enter your desired city's name to get the weather.");
  return false} else
{  //Fetch weather from API
  //let response = fetch(`'https://weatherapi-com.p.rapidapi.com/forecast.json?q=${nameCity}&days=3'`, weather)
	
  let response = fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=auto%3Aip&days=3', weather)
  .then(response => response.json())
    .then(response => {
    document.getElementById("paraweather").innerHTML = `Hello ${nameValid}, it is currently ${response.current.feelslike_f}° with
    ${response.current.condition.text} in ${nameCity}`;
     
  })}
}



