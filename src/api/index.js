import request from 'superagent'

const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Wellington,nz&APPID=ebfbb04818fee9523dfbe461b9445a30'

export function getWeather(){
    return request  
      .get(weatherURL)
      .then(response => response.body)
  }