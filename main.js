const searchBtn = document.getElementById("btn")
const cityName = document.getElementById("city-name")
const temp = document.getElementById("city-temp")
const humidity = document.getElementById("city-humidity")
const windSpeed = document.getElementById("city-windSpeed")
const searchField = document.getElementById("searchField")
const cityLocation = document.getElementById("location")
const current = document.getElementById("current")
const error = document.getElementById("error")

const apiKey = "e8e5d7f8cfd4408a98e181258242003"

const fetchWeatherData = async () =>{
    try{

      if(searchField.value === ""){
        error.style.display = "block"
      }else{
        
        error.style.display = "none"
        
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchField.value}`)
        if(!response.ok){
        error.style.display = "block"
        throw new Error('Failed to fetch weather data')
      }
      
      const data = await response.json()

      cityLocation.style.display = "block"
      current.style.display = "flex"

      
      cityName.innerHTML = data.location.name
      temp.innerHTML = data.current.temp_c + "°C"
      humidity.innerHTML = data.current.humidity + "%"
      windSpeed.innerHTML = data.current.wind_kph + "km/hr"
      
      console.log(data);
    }
    }catch(error){
      console.log(error);
    }
  }