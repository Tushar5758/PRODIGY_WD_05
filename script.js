function getWeather() {
        const apiKey = 'b80d85cd18c190579de73a0e9ddc7dd3';
        const locationInput = document.getElementById('location');
        const location = locationInput.value;

        if (!location) {
            alert('Please enter a location.');
            return;
        }

        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherIcon = document.getElementById('weather-icon');
                const temperature = document.getElementById('temperature');
                const description = document.getElementById('description');

                // Adjust these based on the Weatherstack API response structure
                weatherIcon.src = data.current.weather_icons[0];
                temperature.textContent = `${data.current.temperature} °C`;
                description.textContent = data.current.weather_descriptions[0];
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            });
    }

