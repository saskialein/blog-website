import React from "react"

import { getWeather } from '../api/index'

import classes from './Layout.module.css'

class Weather extends React.Component {

    state = {
        weather: [],
        temperature: []
    }
    
    componentDidMount() {
        getWeather()
            .then(res => {
                console.log(res)
                this.setState(
                    {
                        weather: res.weather,
                        temperature: res.main
                    }
                )
            })
    }



    render() {
        return (
            <div className={classes.WeatherContainer}>
            {this.state.weather.map(data => {
                return (
                        <p key={data}>Welly weather right now: {data.description}</p>)
            })}
                            {/* {this.state.temperature.map(temp => {
                return (
                    <p>Temperature: {temp.temp}</p>
                )
            })} */}
            </div>
        )
    }
}

export default Weather