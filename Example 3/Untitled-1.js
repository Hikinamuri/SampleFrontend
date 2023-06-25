let token = "364fa3f680c7d181786dd98422d07f16"
let lat = "55.75222"
let lon = "37.61556"

function weather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.752&lon=37.615&units=metric&lang=ru&appid=364fa3f680c7d181786dd98422d07f16')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let tempavg = document.getElementById("temp")
      let tempav1 = document.getElementById("temp1")
      let tempmax = document.getElementById("tempmax")
      let tempmin = document.getElementById("tempmin")
      let name = document.getElementById("name")
      let name1 = document.getElementById("name1")
      let weather = document.getElementById("weather")
      let vind = document.getElementById("vind")
      let pressure = document.getElementById("pressure")
      let humidity = document.getElementById("humidity")
      let feelslike = document.getElementById("feelslike")

      tempavg.innerText = data.main.temp
      tempav1.innerText = data.main.temp
      tempmax.innerText = data.main.temp_max
      tempmin.innerText = data.main.temp_min
      name.innerText = data.name
      name1.innerText = data.name
      weather.innerText = data.weather[0].description
      vind.innerText = data.wind.speed
      pressure.innerText = data.main.pressure
      humidity.innerText = data.main.humidity
      feelslike.innerText = data.main.feels_like
    })
    .catch(error => console.error(error));
}

function weatherdop(){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.788700&lon=49.122100&units=metric&lang=ru&appid=364fa3f680c7d181786dd98422d07f16')
  .then(response => response.json())
  .then(data => {
    let name = document.getElementById("name2")
    let tempavg = document.getElementById("temp2")

    name.innerText = data.name
    tempavg.innerText = data.main.temp
  })
  .catch(error => console.error(error));
}

function weatherdop2(){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=63.4621700&lon=142.7949100&units=metric&lang=ru&appid=364fa3f680c7d181786dd98422d07f16')
  .then(response => response.json())
  .then(data => {
    let name = document.getElementById("name3")
    let tempavg = document.getElementById("temp3")

    name.innerText = data.name
    tempavg.innerText = data.main.temp
  })
  .catch(error => console.error(error));
}