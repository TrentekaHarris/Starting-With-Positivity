/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df63d54958mshc6e5ae843b596aep179e42jsn21d36928056d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=userlocation&days=3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    const userlocation = navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.
      });

        fetch('https://extreme-ip-lookup.com/json/?key=GFhkPZYGjZdfppPIiJdn')
      .then(res => res.json())
      .then(response => {
          location = response.city
       })
       .catch((data, status) => {
          console.log('Request failed');
       })*/


//weather api
const weather = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df63d54958mshc6e5ae843b596aep179e42jsn21d36928056d',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    

async function getWeather () {
   

  //Fetch weather from API
  let response = fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=auto%3Aip', weather)
	
  .then(response => response.json())
    .then(response => {
    document.getElementById("paraweather").innerHTML = `${response.location.name}  ${response.current.feelslike_f}°
    ${response.current.condition.text}`;
     
  })
}
