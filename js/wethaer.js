let btnGet = document.getElementById('btnGet')


// header
let cityInput = document.getElementById('cityInput')
let btnSearch = document.getElementById('btnSearch')


// box
let cityForecast = document.getElementById('cityForecast-page')
let dateForecast = document.getElementById('dateForecast')

let weatherText = document.getElementById('weather-text')
let temperature = document.getElementById('temperature-page')
let weatherImg = document.getElementById('weather-img-page')

let minTemp = document.getElementById('min-temp')
let maxTemp = document.getElementById('max-temp')
let winSpeed = document.getElementById('wind-speed')

let cityInfo = document.getElementById('city-info')
let errorOpen = document.getElementById('error')
let openBox = document.getElementById('open')


btnSearch.addEventListener('click', ()=>{
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=9311667a507e606a4c1ca1225f96b56f`
      errorOpen.classList.remove('error-open')
      openBox.classList.remove('open-box')
   axios.get(url)
         .then(function (response) {
            // handle success
            weatherText.innerText = response.data.weather[0].main
            cityForecast.innerText = cityInput.value
            
            let tempCalvin = Math.round((response.data.main.temp) - 273.15)
            let tempMin = Math.round((response.data.main.temp_min) - 273.15)
            let tempMax = Math.round((response.data.main.temp_max) - 273.15)
            temperature.innerText = `${tempCalvin} ºC`
            minTemp.innerText = `${tempMin} ºC`
            maxTemp.innerText = `${tempMax} ºC`
            winSpeed.innerText = `${response.data.wind.speed}`
            let imgForecast = response.data.weather[0].main
            console.log(response.data.weather[0].main);
            if(imgForecast == "Clouds"){
               weatherImg.src = 'https://img.icons8.com/clouds/256/clouds.png'
            }if(imgForecast == "Clear"){
               weatherImg.src = 'https://www.svgrepo.com/show/206396/sun-sunny.svg'
            }if(imgForecast == "Snow"){
               weatherImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nuvola_weather_snow.svg/419px-Nuvola_weather_snow.svg.png'
            }if(imgForecast == "Rain"){
               weatherImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Weather-rain-thunderstorm.svg/919px-Weather-rain-thunderstorm.svg.png'
            }
            
         })
         .catch(function (error) {
            // handle error
            console.log(error.name);
            if(error.name == "AxiosError"){
               // cityInfo.innerHTML = `<div class="error">Error 404</div>`
               errorOpen.classList.add('error-open')
               openBox.classList.add('open-box')
            }
         })
})
