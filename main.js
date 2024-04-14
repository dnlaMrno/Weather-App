const apiKey = "951e81f6e637841e7afbd3bdd4be84e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "assets/clouds.png";
        }else if (data.weather[0].main == "Clear"){
            weathericon.src = "assets/clear.png";
        }else if (data.weather[0].main == "Rain"){
            weathericon.src = "assets/rain.png";
        }else if (data.weather[0].main == "Drizzle"){
            weathericon.src = "assets/drizzel.png";
        }else if (data.weather[0].main == "Mist"){
            weathericon.src = "assets/mist.png";
        }
        
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

    }
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})