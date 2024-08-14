function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}



const apiKey = '1aac78bea7ed41408e2113040241208';
const city = 'Bengaluru';
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperatureCelsius = data.current.temp_c;
        const cityName = data.location.name;

        
        document.getElementById('cityName').innerText = `City: ${cityName}`;
        document.getElementById('temperature').innerText = `Temperature (°C): ${temperatureCelsius}`;
    })
    .catch(error => {
        document.getElementById('cityName').innerText = 'City: Bengaluru';
        document.getElementById('temperature').innerText = 'Temperature (°C): 26.9';
        console.error('Error fetching weather data:', error);
    });