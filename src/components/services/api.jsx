async function getCurrentWeather(lat, lon) {
    const apiKey = "1dde84c245e7a1646cb1025dad917e7b";
    const currrentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const response = await fetch(currrentWeatherURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Weather data collection failed:", error);
      return null;
    }
  }
  
  export { getCurrentWeather };
  
  
  async function getFiveDaysWeather(lat, lon) {
    const apiKey = "1dde84c245e7a1646cb1025dad917e7b";
    const sixDaysWeatherURL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=6&appid=${apiKey}`
      try {
          const response = await fetch(sixDaysWeatherURL)
          const data = await response.json()
          return data
      } catch(error){
          console.log('Weather data collection failed:', error)
          return null
      }
    }
  
  export { getFiveDaysWeather } 