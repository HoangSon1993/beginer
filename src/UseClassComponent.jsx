import React, { Component } from 'react'

class UseClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Alex',
      age: 24
    }
  }
  handleIncreaseAge = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>UseClassComponent</h1>
        <ul>
          <li>First name: {this.state.firstName}</li>
          <li>age: {this.state.age}</li>
        </ul>
        <button onClick={this.handleIncreaseAge}>Increase Age</button>
      </div>
    )
  }
}

export default UseClassComponent
