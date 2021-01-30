import React from "react"

import { getWeather } from '../api/index'

import classes from './Layout.module.css'

class Weather extends React.Component {

    state = {
        lon: null,
        lat: null,
        error: null,
        weather: '',
        temperature: 0,
        city: '',
        country: '',
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
                // console.log("Latitude is :", position.coords.latitude);
                // console.log("Longitude is :", position.coords.longitude);
            
                // let lon = position.coords.longitude.toFixed(2)
                // let lat = position.coords.latitude.toFixed(2)
    
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
           return <p>Good Morning Visitor</p>
        } else if (hour >= 12 && hour < 18) {
            return <p>Good Afternoon Visitor</p>
        } else if (hour >= 18 && hour < 24) {
            return <p>Good Evening Visitor</p>
        }
    }

        return (
            this.state.geolocationTurnedOn && this.state.weather && this.state.temperature ?
            <div className={classes.WeatherContainer}>
                    <hr className={ [classes.LineBreakOne, classes.LineBreak].join(' ')}/>
                    {getGreeting()}
                    <hr className={ [classes.LineBreak, classes.LineBreakTwo].join(' ')}/>
                    <p>
                        Your current weather in&nbsp;<span className={classes.Italic}>{this.state.city}, {this.state.country.country}:&nbsp;</span> <span className={classes.WeatherData}>{this.state.weather.description}</span>.
                    </p> 
                    <hr className={ [classes.LineBreak, classes.LineBreakThree].join(' ')}/>
                    <p>
                        The actual temperature is&nbsp;<span className={classes.WeatherData}>{Number.parseFloat(this.state.temperature.temp).toFixed(1)} ℃</span>, but it feels more like&nbsp;<span className={classes.WeatherData}>{Number.parseFloat(this.state.temperature.feels_like).toFixed(1)} ℃</span>.
                    </p>
                    <hr className={ [classes.LineBreak, classes.LineBreakFour].join(' ')} />
                </div> : <div className={classes.WeatherContainer}>
                    <p className={classes.Italic}>If you turn on your location, your current weather will be displayed here.</p>
                </div>
            
        )
    }
}

export default Weather