import React, { Component } from 'react'

class BoilingVerdict extends Component {
  render() {
    return <div>{this.props.celsius >= 100 ? 'The water would boild' : 'The water would not boild'}</div>
  }
}

export default BoilingVerdict
