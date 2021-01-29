// import request from 'superagent'

const APIKey = process.env.GATSBY_OPEN_WEATHER_API_KEY


export function getWeather(lon, lat){
    return request  
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=${APIKey}`)
      .then(response => response.body)
  }
