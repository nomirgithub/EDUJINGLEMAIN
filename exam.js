const celsiusOne = document.getElementById("celsius");
const fahrenheitOne = document.getElementById("fahrenheit");
const cityName = document.getElementById("cityName");

async function tempOne(location) {

    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/getTemperature?location=${location}`;

    const responce = await fetch(apiUrl);
    const data = await responce.json();
    const temp = data.temp;
    const celsius = temp.celsius;
    const fahrenheit = temp.fahrenheit;
 
    
    celsiusOne.innerText = `${celsius}C`;
    fahrenheitOne.innerText = `${fahrenheit}F`;
    cityName.innerText = location;
}

