import React, { Component } from 'react'

class Button extends Component {
  handleChange = (event) => {
    console.log(event.target)
  }
  render() {
    return (
      <button className='btn' onClick={this.handleChange}>
        Button
      </button>
    )
  }
}

class YellowButton extends Button {
  render() {
    return (
      <div>
        <button className='btn btn-yellow' onClick={this.handleChange}>
          Button
        </button>
      </div>
    )
  }
}
class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <Button />
        <YellowButton />
      </div>
    )
  }
}

export default Inheritance
