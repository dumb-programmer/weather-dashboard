export async function getTemperature(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${
      import.meta.env.VITE_API_KEY
    }`
  );
  if (response.ok) {
    const data = await response.json();
    return {
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      wind: data.wind.speed,
      visibility: data.visibility,
      location: data.name,
      timezone: data.timezone,
      weather: data.weather[0].main.toLowerCase(),
      weather_description: data.weather[0].description.toLowerCase(),
    };
  }

  throw new Error();
}
