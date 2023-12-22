import React, { Component } from 'react'

class TemperatureInput extends Component {
  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value)
  }
  render() {
    const { title, temperature } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input type='text' value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput
