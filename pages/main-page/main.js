let cityForecastMain = document.getElementById('cityForecastMain')
let temperaturemain = document.getElementById('temperaturemain')
let weatherImgmain = document.getElementById('weatherImgmain')



   let url = ` https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=9311667a507e606a4c1ca1225f96b56f`
   axios.get(url)
         .then(function (response) {
            // handle success
            cityForecastMain.innerText = "LVIV"
            
            let tempCalvin = Math.round((response.data.main.temp) - 273.15)
            temperaturemain.innerText = `${tempCalvin} ºC`
            let imgForecast = response.data.weather[0].main
            console.log(response.data.weather[0].main);
            if(imgForecast == "Clouds"){
               weatherImgmain.src = './images/clouds.png'
            }if(imgForecast == "Clear"){
               weatherImgmain.src = './images/sunny.svg'
            }if(imgForecast == "Snow"){
               weatherImgmain.src = './images/snow.png'
            }if(imgForecast == "Rain"){
               weatherImgmain.src = './images/rain.png'
            }

            
         })
         .catch(function (error) {
            // handle error
            console.log(error.name);
         })


         console.log("hrlloo");