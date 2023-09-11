const fetchWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=6cf9113cc039128887bea41cc4117942")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const weather = data.weather[0].main;
        console.log("Weather:", weather);
        // document.getElementById("weather").innerText = weather;
        const tempature = Math.round(data.main.temp);
        console.log("Tempature:", tempature);
        // document.getElementById("tempature").innerText = tempature;
        const element = document.getElementById("api");
        const content = element.innerHTML;
        element.innerHTML = `${weather} | ${tempature}°`
        const sunrise = data.sys.sunrise;
        console.log("sunrise:", sunrise);
        const sunriseDate = new Date(sunrise * 1000);
        const sunriseTime = sunriseDate.toLocaleTimeString();
        console.log("Sunrise:", sunriseTime); 
        document.getElementById("sunrise").innerText = sunriseTime;
        const sunset = data.sys.sunset;
        console.log("sunset:", sunset);
        const sunsetDate = new Date(sunset * 1000);
        const sunsetTime = sunsetDate.toLocaleTimeString();
        console.log("Sunset:", sunsetTime);
        document.getElementById("sunset").innerText = sunsetTime;
      })
     
      .catch((error) => console.error("Error:", error))
}

fetchWeather()