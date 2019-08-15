import React, { Component } from 'react'
import request from 'superagent'

export default class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentWillReceiveProps (props) {
      this.getWeatherInfo()
    }

    getWeatherInfo () {
      const URL = 'https://api.openweathermap.org/data/2.5/weather'
      const params = {
        appid: 'ade5a3e23673a51a072c0fb1c8ace21c',
        units: 'metric',
        lat: this.props.lat,
        lon: this.props.lon
      }
      request
        .get(URL)
        .query(params)
        .end((err, res) => this.loadedJson(err, res))
    }

    loadedJson (err, res) {
      if (err) return console.error(err)
      if (!res.body) return console.log('no body')
      this.setState({
        data: res.body
      })
      console.log(this.state.data)
    }

  render () {
    if (!this.state.data) {
      return (
        <p/>
      )
    } else {
      const weather = this.state.data.weather[0]
      const mainWeather = weather.main
      const desc = weather.description
      const icon = weather.icon

      const detail = this.state.data.main
      const temp = Math.round(detail.temp)
      const currentDate = new Date()
      const hour = String(currentDate.getHours())
      const minute = `0${String(currentDate.getMinutes())}`.slice(-2)
      const place = this.state.data.name

      return (
        <div className='container'>
          <section className='main'>
            <div className='place'>{place}</div>
            <div className='time'>{`${hour}:${minute}`}</div>
            <div className='mainweather'>{mainWeather}</div>
            <div className='desc'>{desc}</div>
          </section>
          <section className='icon-container'>
            <img className='icon' src={`http://openweathermap.org/img/w/${icon}.png`} alt='icon' />
            <div className='temp'><span>{temp}</span>°C</div>
          </section>
        </div>
      )
    }
  }
}
