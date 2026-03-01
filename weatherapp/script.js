const apiKey = 'c43fe43a9a0b1a419d84a536958fe358'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const humidity = document.getElementById('humidity');

  location.textContent = `Location: ${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Weather: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}