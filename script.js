const fetchWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=6cf9113cc039128887bea41cc4117942")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const weather = data.weather[0].main;
        console.log("Weather:", weather);
        document.getElementById("weather").innerText = weather;
      })
     
      .catch((error) => console.error("Error:", error))
}

fetchWeather()