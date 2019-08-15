import React, { Component } from 'react'
import fetchp from 'fetch-jsonp'
import Weather from './Weather'
import Input from './Input'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      lat: 0,
      lon: 0
    }
  }
  loadedJSON (res) {
      const coord = res.Feature[0].Geometry.Coordinates.split(',')
      this.setState({
        data: res,
        lat: coord[1],
        lon: coord[0]
      })
    }
  onSubmit (e) {
    const url = 'https://map.yahooapis.jp/geocode/V1/geoCoder?'
    const appid = 'appid=dj00aiZpPXVCNlZPdDFlQ00zSSZzPWNvbnN1bWVyc2VjcmV0Jng9YTM-&'
    const output = 'output=json&'
    const query = 'query=' + e
    fetchp(url + appid + output + query)
      .then(res => res.json())
      .then(json => this.loadedJSON(json))
      .catch((error) => {
        console.log(error)
      })
  }
  render () {
    console.log("this.state.data", this.state.data)
    return (
      <div>
        <Input
          placeholder='沖縄県　那覇市'
          value='Search'
          onSubmit={(e) => this.onSubmit(e)}
        />
        <Weather
          lat={this.state.lat}
          lon={this.state.lon}
        />
      </div>)
  }
}
