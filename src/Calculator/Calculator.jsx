import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahreheit'
}
const tryConvert = (temperature, scaleInput) => {
  const input = parseFloat(temperature)

  //Case input khong phai la 1 so
  if (Number.isNaN(input)) {
    return ''
  }
  let output
  if (scaleInput === 'f') {
    //case input la f -> conver to c
    output = (input - 32) / 1.8
  } else {
    //case input la c -> conver to f
    output = input * 1.8 + 32
  }
  output = Math.round(output * 1000) / 1000
  return output
}
class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  /**
   * Cus phap curying sort hand
   * */
  // hangleChange = (scale) => (value) => {
  //   this.setState({
  //     temperature: value,
  //     scale: scale
  //   })
  // }

  /**
   * Ky thuat curying viet day du
   * */
  handleChange = (scale) => {
    return (value) => {
      this.setState({
        temperature: value,
        scale: scale
      })
    }
  }

  render() {
    const { temperature, scale } = this.state
    const celsius = scale === 'f' ? tryConvert(temperature, scale) : temperature
    const fahreheit = scale === 'c' ? tryConvert(temperature, scale) : temperature
    return (
      <div>
        <TemperatureInput title={scaleNames.c} temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title={scaleNames.f} temperature={fahreheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export default Calculator
