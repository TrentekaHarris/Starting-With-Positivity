const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df63d54958mshc6e5ae843b596aep179e42jsn21d36928056d',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function getQuote () {
   
  //Fetch Quote from API
  let response = fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	
  .then(response => response.json())
	.then(response => {
    document.getElementById("paraquote").innerHTML = `${response.content} Have a wonderful day, ${nameValid}!!!`;
     
  })
}




