import React from "react"

import { getWeather } from '../api/index'

import classes from './Layout.module.css'

class Weather extends React.Component {

    state = {
        lon: null,
        lat: null,
        error: null,
        weather: null,
        temperature: null,
        city: null,
        country: null,
        geolocationTurnedOn: false
    }
    
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lon: position.coords.longitude,
                    lat: position.coords.latitude,
                    geolocationTurnedOn: true,
                    error: null
                })    
                getWeather(this.state.lon, this.state.lat)
                    .then(res => {
                        console.log(res)
                        this.setState(
                            {
                                weather: res.weather[0],
                                temperature: res.main,
                                city: res.name,
                                country: res.sys
                            }
                        )
                    })
            }, (error) => {
                this.setState(
                    {
                        error: error.message
                    })
            })
        
        }
    }

    render() {
    
    let getGreeting = () => {
        let now = new Date();
        let hour = now.getHours()
        console.log(hour)
        if (hour < 12) {
           return <p>Good Morning visitor</p>
        } else if (hour >= 12 && hour < 18) {
            return <p>Good Afternoon visitor</p>
        } else if (hour >= 18 && hour < 24) {
            return <p>Good Evening visitor</p>
        }
    }
        
        let weather =   (<div className={classes.WeatherContainer}>
                            <p className={classes.Italic}>Loading...</p>
                        </div>)
        if (!this.state.geolocationTurnedOn) {
            weather =   (<div className={classes.WeatherContainer}>
                            <p className={classes.Italic}>If you turn on your location, your current weather will be displayed here.</p>
                        </div>)
        }
        if (this.state.weather && this.state.temperature) {
            weather = (
            <div className={classes.WeatherContainer}>
                <hr className={[classes.LineBreakOne, classes.LineBreak].join(' ')} />
                {getGreeting()}
                <hr className={[classes.LineBreak, classes.LineBreakTwo].join(' ')} />
                <p>
                    Your current weather in&nbsp;<span className={classes.Italic}>{this.state.city}, {this.state.country.country}:&nbsp;</span> <span className={classes.WeatherData}>{this.state.weather.description}</span>.
                    </p>
                <hr className={[classes.LineBreak, classes.LineBreakThree].join(' ')} />
                <p>
                    The actual temperature is&nbsp;<span className={classes.WeatherData}>{Number.parseFloat(this.state.temperature.temp).toFixed(1)} ℃</span>, but it feels more like&nbsp;<span className={classes.WeatherData}>{Number.parseFloat(this.state.temperature.feels_like).toFixed(1)} ℃</span>.
                    </p>
                <hr className={[classes.LineBreak, classes.LineBreakFour].join(' ')} />
            </div>
            )
        }  
        return weather
    }
}

export default Weather