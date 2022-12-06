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
    alert("Please enter your desired name");
  return false} else
{  //Fetch weather from API
  let response = fetch(`'https://weatherapi-com.p.rapidapi.com/forecast.json?q=${nameCity}&days=3'`, weather)
	
  .then(response => response.json())
    .then(response => {
    document.getElementById("paraweather").innerHTML = `Hello ${nameValid} it is currently ${response.current.feelslike_f}° and
    ${response.current.condition.text} in ${response.location.name}`;
     
  })}
}



