// weather.js

const url =
"https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=4&timezone=auto";

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to retrieve weather data.");
        }

        const data = await response.json();

        console.log(data);

        // Current temperature
        document.querySelector("#current-temp").textContent =
            `${data.current.temperature_2m}°C`;

        // Current weather description
        document.querySelector("#weather-desc").textContent =
            getWeatherDescription(data.current.weather_code);

        // Three-day forecast
        const forecast = document.querySelector("#forecast");
        forecast.innerHTML = "";

        for (let i = 1; i <= 3; i++) {

            const date = new Date(data.daily.time[i]);

            const day = date.toLocaleDateString("en-US", {
                weekday: "short"
            });

            forecast.innerHTML += `
                <p>
                    <strong>${day}</strong>:
                    ${data.daily.temperature_2m_max[i]}°C /
                    ${data.daily.temperature_2m_min[i]}°C
                </p>
            `;
        }

    } catch (error) {
        console.error("Weather Error:", error);

        document.querySelector("#current-temp").textContent =
            "Weather unavailable";

        document.querySelector("#weather-desc").textContent =
            "";

        document.querySelector("#forecast").innerHTML =
            "";
    }
}

function getWeatherDescription(code) {

    const weatherCodes = {

        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",

        45: "Fog",
        48: "Depositing Fog",

        51: "Light Drizzle",
        53: "Moderate Drizzle",
        55: "Dense Drizzle",

        61: "Light Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",

        71: "Light Snow",
        73: "Moderate Snow",
        75: "Heavy Snow",

        80: "Rain Showers",
        81: "Heavy Rain Showers",
        82: "Violent Rain Showers",

        95: "Thunderstorm",
        96: "Thunderstorm with Hail",
        99: "Severe Thunderstorm"
    };

    return weatherCodes[code] || "Unknown";
}

getWeather();