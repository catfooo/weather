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
        const sunriseTime = sunriseDate.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        console.log("Sunrise:", sunriseTime); 
        document.getElementById("sunrise").innerText = sunriseTime;
        const sunset = data.sys.sunset;
        console.log("sunset:", sunset);
        const sunsetDate = new Date(sunset * 1000);
        const sunsetTime = sunsetDate.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        console.log("Sunset:", sunsetTime);
        document.getElementById("sunset").innerText = sunsetTime;

        const imgElement = document.createElement("img");
        imgElement.src="./icons/noun_Sunglasses_2055147.svg"
        imgElement.alt = "image for clear weather"
        imgElement.style.marginTop = "50px";
        const container = document.getElementById("imgContainer");
        container.appendChild(imgElement);

        document.getElementById("textContainer").innerText = 'Get your sunnies on.'
        document.getElementById("textContainer2").innerText = 'Stockholm is looking rather great today.'

        const textContainer2 = document.getElementById("textContainer2");
        textContainer2.style.marginBottom = "50px";
      })
     
      .catch((error) => console.error("Error:", error))
}

fetchWeather()

const fetchForecast = () => {
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=6cf9113cc039128887bea41cc4117942")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const mon = parseInt(data.list[0].main.temp);
      console.log("mon:", mon);
      document.getElementById("mon").innerText = mon
      const tue = parseInt(data.list[9].main.temp);
      console.log("tue:", tue);
      document.getElementById("tue").innerText = tue
      const wed = parseInt(data.list[19].main.temp)
      console.log("wed", wed)
      document.getElementById("wed").innerText = wed
      const thu = parseInt(data.list[29].main.temp)
      console.log("thu:", thu)
      document.getElementById("thu").innerText = thu
      const fri = parseInt(data.list[39].main.temp)
      console.log("fri:", fri)
      document.getElementById("fri").innerText = fri
    })
    .catch((error) => console.error("Error:", error))
}

fetchForecast()