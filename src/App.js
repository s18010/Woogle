import React, { Component } from 'react'
import Search from './Search'
import './css/search.css'
import './css/main.css'
import './css/content.css'
import imgUrl from './img/woogle.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className='logo'><img src={imgUrl} alt='logo' /></div>
        <Search />
      </div>
    )
  }
}
