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
        document.getElementById("sunrise").innerText = sunrise;
        const sunset = data.sys.sunset;
        console.log("sunset:", sunset);
        document.getElementById("sunset").innerText = sunset;
      })
     
      .catch((error) => console.error("Error:", error))
}

fetchWeather()