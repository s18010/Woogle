import React, { Component } from 'react'

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount () {
    this.input.focus()
  }
  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
  }
  handleChange (e) {
    this.setState({ value: e.target.value })
  }
  render () {
    return (
      <div className='search-area'>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            ref={elem => {this.input = elem}}
            type='text'
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
          <button type='submit'/>
        </form>
      </div>
    )
  }

}
