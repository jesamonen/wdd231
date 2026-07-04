const url = "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=auto";

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.querySelector("#temperature").textContent =
            `Temperature: ${Math.round(data.current.temperature_2m)}°C`;

        document.querySelector("#conditions").textContent =
            `Weather Code: ${data.current.weather_code}`;

    } catch (error) {
        console.error(error);
    }
}

getWeather();