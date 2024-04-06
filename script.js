// Function to fetch weather data from OpenWeatherMap API
function fetchWeather() {
  const apiKey = 'b5d2637782db9d9cbc8d6e54c8391389';
  const city = 'Calgary';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl, { mode: 'cors' }) // Add 'mode: cors' option to enable CORS
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const weatherInfo = `Current temperature: ${temperature}°C, ${description}.`;
      document.getElementById('weather-info').textContent = weatherInfo;
    })
    .catch(error => {
      console.error('There was a problem fetching the weather data:', error);
      document.getElementById('weather-info').textContent = 'Failed to fetch weather data.';
    });
}

// Function to display current date and time
function displayDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  document.getElementById('time-info').textContent = currentDateTime;
}

// Fetch weather data and display current date and time when the page loads
window.onload = function () {
  fetchWeather();
  displayDateTime();
};